import { initialItems } from "@/data/folder.data";
import { WorkspaceItem } from "@/types/workspace";

export const getInitialItems = (): WorkspaceItem[] => {
    if(typeof window === "undefined") {
        return initialItems
    }

    const sorted = localStorage.getItem("workspace-item");
    return sorted ? JSON.parse(sorted) : initialItems
}

