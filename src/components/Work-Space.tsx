"use client";

import { useWorkSpaceStore } from "@/store/workspace-store";
import { FaFile, FaFolder } from "react-icons/fa";
import FolderTree from "./Folder-tree";
import ButtonGroup from "./ButtonGroup";
import Breadcrumbs from "./Breadcrumbs";

const WorkSpace = () => {
  const { items, selectedFolderId } = useWorkSpaceStore();

  const rootFolder = items.find((item) => item.parentId === null);
  

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="max-auto flex min-h-[calc(100vh-48px)] max-w-7xl overflow-hidden rounded-2xl border bg-white shadow-sm">
        {/* sidebar  */}
        <aside className="w-72 border-r p-5">
          <h1 className="text-xl font-bold text-black">Workspace</h1>

          <section className="mt-6">
            {rootFolder && <FolderTree item={rootFolder} />}
          </section>
        </aside>


        {/* main side */}
        <section className="flex-1 p-6">
          <h2 className="text-2xl font-semibold text-black">Workspace</h2>

          <ButtonGroup />

          <Breadcrumbs />

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {items
              .filter((i) => i.parentId === selectedFolderId)
              .map((i) => (
                <div key={i.id} className="rounded-xl border p-5">
                  <div className="text-3xl">
                    {i.type === "folder" ? (
                      <FaFolder className="text-amber-500" />
                    ) : (
                      <FaFile className="text-gray-500" />
                    )}
                  </div>

                  <p className="mt-3 font-medium text-black text-[0.8rem]">
                    {i.name}
                  </p>
                </div>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default WorkSpace;