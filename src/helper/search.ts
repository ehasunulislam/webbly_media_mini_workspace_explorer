import { WorkspaceItem } from "@/types/workspace";

export const searchItem = (items: WorkspaceItem[], searchTerm: string) => {
    const trimSearch = searchTerm.trim();

    if (!trimSearch) {
        return [];
    }

    return items.filter((i) => 
        i.name.toLowerCase().includes(trimSearch)
    )
}