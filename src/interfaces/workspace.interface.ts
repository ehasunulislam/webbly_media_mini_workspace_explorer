import { WorkspaceItem } from "@/types/workspace";

export interface WorkSpaceStore {
    items: WorkspaceItem[];
    selectedFolderId: string;

    setSelectedFolder: (
        id: string
    ) => void;

    // create the item
    createItem: (
        name: string,
        type: "folder" | "file"
    ) => void;

    // reName item
    renameItem: (
        id: string,
        name: string
    ) => void;

    // delete item
    deleteItem: (
        id: string
    ) => void;

    // update Content  -> after create this content
    updateFileContent: (
        id: string,
        content: string
    ) => void;
}