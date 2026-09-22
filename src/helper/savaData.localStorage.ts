import { WorkspaceItem } from "@/types/workspace";

export const saveItemsToStorage = (items: WorkspaceItem[]) => {
    localStorage.setItem("workspace-item", JSON.stringify(items))
}