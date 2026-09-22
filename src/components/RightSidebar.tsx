"use client"

import { useWorkSpaceStore } from "@/store/workspace-store";
import TextEditor from "./TextEditor";
import ButtonGroup from "./ButtonGroup";
import Breadcrumbs from "./Breadcrumbs";
import { FaFile, FaFolder } from "react-icons/fa";

const RightSidebar = () => {
  const { items, selectedFolderId, selectedFileId, setSelectedFolder, setSelectedFile} = useWorkSpaceStore();

  return (
    <section className="flex-1 p-6">
      {selectedFileId ? (
        <TextEditor />
      ) : (
        <>
          <h2 className="text-2xl font-semibold text-black">My Workspace</h2>

          <ButtonGroup />

          <Breadcrumbs />

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {items
              .filter((i) => i.parentId === selectedFolderId)
              .map((i) => (
                <div
                  key={i.id}
                  onClick={() => {
                    if (i.type === "folder") {
                      setSelectedFolder(i.id);
                    } else {
                      setSelectedFile(i.id);
                    }
                  }}
                  className="cursor-pointer rounded-xl border p-5 transition hover:border-gray-400 hover:shadow-sm"
                >
                  <div className="text-3xl">
                    {i.type === "folder" ? (
                      <FaFolder className="text-amber-500" />
                    ) : (
                      <FaFile className="text-gray-500" />
                    )}
                  </div>

                  <p className="mt-3 text-[0.8rem] font-medium text-black">
                    {i.name}
                  </p>
                </div>
              ))}
          </div>
        </>
      )}
    </section>
  );
};

export default RightSidebar;
