"use client"

import { getInitialItems } from "@/helper/getInitial.locaStorage";
import { saveItemsToStorage } from "@/helper/savaData.localStorage";
import { WorkSpaceStore } from "@/interfaces/workspace.interface";
import { create } from "zustand";


// function for the folder-structure
export const useWorkSpaceStore = create<WorkSpaceStore>((set) => ({
  items: getInitialItems(),
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

        const updatedItems = [
          ...state.items,
          {
            id: crypto.randomUUID(),
            name: trimmedName,
            type,
            parentId: state.selectedFolderId,
            ...(type === "file" ? { content: "" } : {}),
          },
        ];

        saveItemsToStorage(updatedItems);

        return {
          items: updatedItems,
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

        const updatedItems = state.items.map((item) =>
          item.id === id
            ? { ...item, name: trimmedName }
            : item
        );

        saveItemsToStorage(updatedItems);

        return {
            items: updatedItems
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

      const updatedItems = state.items.filter(
        (item) => !idsToDelete.has(item.id)
      );

      saveItemsToStorage(updatedItems);

      return {
        items: updatedItems,

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
