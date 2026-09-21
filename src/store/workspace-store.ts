import { WorkspaceItem } from '@/types/workspace';
import { create } from 'zustand'

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
