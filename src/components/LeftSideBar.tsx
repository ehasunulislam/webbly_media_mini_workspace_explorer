"use client"

import { useWorkSpaceStore } from "@/store/workspace-store";
import Search from "./Search";
import FolderTree from "./Folder-tree";

const LeftSideBar = () => {
 const  { items, setSelectedFolder, setSelectedFile} = useWorkSpaceStore();

 const rootFolder = items.find(
    (item) => item.parentId === null
  );

  return (

    <div>
      <aside className="w-72 border-r p-5">
        <h1 className="text-xl font-bold text-black">Workspace</h1>

        <Search
          items={items}
          onSelect={(i) => {
            if (i.type === "folder") {
              setSelectedFolder(i.id);
            } else if (i.parentId) {
              setSelectedFolder(i.parentId);
              setSelectedFile(i.id);
            }
          }}
        />

        <section className="mt-6">
          {rootFolder && <FolderTree item={rootFolder} />}
        </section>
      </aside>
    </div>
  );
};

export default LeftSideBar;
