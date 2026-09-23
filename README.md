# Mini Workspace Explorer

A modern file-system inspired workspace application built with **Next.js**, **TypeScript**, and **Zustand**. The application allows users to manage folders and text files through an interactive workspace interface with persistence, search, and editing capabilities.

## Features

### Folder Management

* Create folders
* Rename folders
* Delete folders recursively
* Navigate through nested folder structures
* Expand and collapse folder tree

### File Management

* Create text files
* Rename files
* Delete files
* Open and edit text files
* Save file content

### Workspace Navigation

* Interactive folder tree
* Breadcrumb navigation
* Search files and folders
* Quick navigation from search results

### Data Persistence

* LocalStorage integration
* Workspace state persists after page refresh
* File content persistence

### User Experience

* Responsive layout
* Clean workspace interface
* Real-time updates
* Type-safe architecture with TypeScript

---

## Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* DaisyUI

### State Management

* Zustand

### Icons

* React Icons

### Storage

* Browser LocalStorage

---

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Breadcrumbs.tsx
│   ├── ButtonGroup.tsx
│   ├── Folder-tree.tsx
│   ├── LeftSideBar.tsx
│   ├── RightSidebar.tsx
│   ├── Search.tsx
│   ├── TextEditor.tsx
│   └── Work-Space.tsx
│
├── data/
│   └── folder.data.ts
│
├── helper/
│   ├── breadcrumbs.intial.ts
│   ├── getInitial.locaStorage.ts
│   ├── savaData.localStorage.ts
│   └── search.ts
│
├── interfaces/
│   ├── folderTree.interface.ts
│   ├── search.interface.ts
│   └── workspace.interface.ts
│
├── store/
│   └── workspace-store.ts
│
└── types/
    └── workspace.ts
```

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/ehasunulislam/webbly_media_mini_workspace_explorer.git
```

### Navigate to Project

```bash
cd webbly_media
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Application will be available at:

```text
http://localhost:3000
```

---

## Core Functionalities

### Create Items

Users can create folders and text files inside the currently selected folder.

### Rename Items

Files and folders can be renamed with duplicate-name validation.

### Delete Items

Deleting a folder removes all nested folders and files recursively.

### Search

Search supports both folders and files and allows quick navigation to results.

### Text Editor

Users can open text files, edit content, and save changes.

### Persistence

All workspace changes are stored in LocalStorage and restored automatically on refresh.

---

## State Management

The application uses Zustand to manage:

* Workspace items
* Selected folder
* Selected file
* File content updates
* CRUD operations

---

## Author

**Ehasun Ul Islam Orko**

Portfolio: https://ehasun.com

GitHub: https://github.com/ehasun

LinkedIn: https://linkedin.com/in/ehasun
