import { WorkspaceItem } from "@/types/workspace";

export interface ISearchProps {
  items: WorkspaceItem[];
  onSelect: (item: WorkspaceItem) => void;
}