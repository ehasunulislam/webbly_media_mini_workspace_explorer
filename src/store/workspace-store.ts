import { WorkSpaceStore } from "@/interfaces/workspace.interface";
import { WorkspaceItem } from "@/types/workspace";
import { ToastContainer } from "react-toastify";
import { create } from "zustand";

const initialItems: WorkspaceItem[] = [
  {
    id: "workspace",
    name: "Workspace",
    type: "folder",
    parentId: null,
  },
  {
    id: "projects",
    name: "Projects",
    type: "folder",
    parentId: "workspace",
  },
  {
    id: "webbly",
    name: "Webbly",
    type: "folder",
    parentId: "projects",
  },
  {
    id: "notes",
    name: "notes.txt",
    type: "file",
    parentId: "webbly",
    content: "Welcome to Webbly Media.",
  },
  {
    id: "tasks",
    name: "tasks.txt",
    type: "file",
    parentId: "webbly",
    content: "Build the Mini Workspace Explorer.",
  },
  {
    id: "personal",
    name: "Personal",
    type: "folder",
    parentId: "projects",
  },
  {
    id: "documents",
    name: "Documents",
    type: "folder",
    parentId: "workspace",
  },
  {
    id: "readme",
    name: "README.txt",
    type: "file",
    parentId: "workspace",
    content: "Mini Workspace Explorer",
  },
];

// function for the folder-structure
export const useWorkSpaceStore = create<WorkSpaceStore>((set) => ({
  items: initialItems,
  selectedFolderId: "workspace",

  setSelectedFolder: (id) =>
    set({
      selectedFolderId: id,
    }),

  // create the item
  createItem: (name, type) =>
    set((state) => {
        const trimmedName = name.trim();

        if (!trimmedName) {
            alert("Name is required");
            return state;
        }

        const duplicateExists = state.items.some(
            (item) =>
                item.parentId === state.selectedFolderId &&
                item.name.toLowerCase() === trimmedName.toLowerCase()
        );

        if (duplicateExists) {
            alert("Item with same name already exists");
            return state;
        }

        return {
            items: [
                ...state.items,
                {
                    id: crypto.randomUUID(),
                    name: trimmedName,
                    type,
                    parentId: state.selectedFolderId,
                    ...(type === "file"
                        ? { content: "" }
                        : {}),
                },
            ],
        };
    }),

  // reName item
  renameItem: (id, name) =>
    set((state) => {
        const trimmedName = name.trim();

        if (!trimmedName) {
            alert("Name is required");
            return state;
        }

        const currentItem = state.items.find(
            (item) => item.id === id
        );

        if (!currentItem) {
            return state;
        }

        const duplicateExists = state.items.some(
            (item) =>
                item.id !== id &&
                item.parentId === currentItem.parentId &&
                item.name.toLowerCase() === trimmedName.toLowerCase()
        );

        if (duplicateExists) {
            alert("Item with same name already exists");
            return state;
        }

        return {
            items: state.items.map((item) =>
                item.id === id
                ? { ...item, name: trimmedName }
                : item
            ),
        };
  }),

  // delete item
  deleteItem: (id) =>
    set((state) => {
      const idsToDelete = new Set<string>([id]);

      let changed = true;

      while (changed) {
        changed = false;

        state.items.forEach((i) => {
          if (
            i.parentId &&
            idsToDelete.has(i.parentId) &&
            !idsToDelete.has(i.id)
          ) {
            idsToDelete.add(i.id);
            changed = true;
          }
        });
      }

      const deletedItem = state.items.find((item) => item.id === id);

      return {
        items: state.items.filter((item) => !idsToDelete.has(item.id)),

        selectedFolderId:
          state.selectedFolderId === id
            ? deletedItem?.parentId || "workspace"
            : state.selectedFolderId,
      };
    }),

  // update Content
  updateFileContent: (id, content) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, content } : item,
      ),
    })),
}));
