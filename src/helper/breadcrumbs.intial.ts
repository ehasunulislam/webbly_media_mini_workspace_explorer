import { WorkspaceItem } from "@/types/workspace";

export const getBreadcrumbs = (items: WorkspaceItem[], selectedFolderId: string) => {
    const breadcrumbs: WorkspaceItem[] = [];

    let current = items.find(
        (item) => item.id === selectedFolderId
    );

    while (current) {
        breadcrumbs.unshift(current);
        current = items.find((item) => item.id === current?.parentId) || undefined;
    }

    return breadcrumbs
}