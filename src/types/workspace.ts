export interface WorkspaceItem {
  id: string;
  name: string;
  type: "folder" | "file";
  parentId: string | null;
  content: string
}
