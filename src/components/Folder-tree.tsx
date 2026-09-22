"use client"

import { IFolderTreeProps } from "@/interfaces/folderTree.interface"
import { useWorkSpaceStore } from "@/store/workspace-store";
import { useState } from "react"
import { FaFile, FaFolder } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const FolderTree = ({ item, level = 0 }: IFolderTreeProps ) => {
  const [expanded, setExpanded] = useState(true);
  const isFolder = item.type === "folder";

  const items = useWorkSpaceStore(
    (state) => state.items
  );

  const selectedFolderId = useWorkSpaceStore(
    (state) => state.selectedFolderId
  );

  const setSelectedFolder = useWorkSpaceStore(
    (state) => state.setSelectedFolder
  );

  const children = items.filter(
    (child) => child.parentId === item.id
  );

  const folders = items.filter(
    (child) => child.type === "folder"
  );

  const file = items.filter(
    (child) => child.type === "file"
  )

  const isSelected = selectedFolderId === item.id;

  // handle folder functiona
  const handleClick = () => {
    setSelectedFolder(item.id);

    if(isFolder) {
        setSelectedFolder(item.id);

        if(children.length > 0) {
            setExpanded((prev) => !prev)
        }
    }
  }

  return (
    <div>
      <button 
        className={`flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm ${
          isSelected
            ? "bg-slate-100 font-medium"
            : "hover:bg-slate-50"
        }`}
        style={{
          paddingLeft: `${level * 16 + 8}px`,
        }}

        onClick={handleClick}
       >
        <span className="text-black">
            {/* {
                folders.length > 0 ?
                    expanded ?
                    <MdKeyboardArrowDown /> :
                    <MdKeyboardArrowRight /> : 
                    ""
            } */}
            {
                item.type === "folder" &&
                  folders.length > 0 &&
                   (expanded ? (
                     <MdKeyboardArrowDown />
                     ) : (
                     <MdKeyboardArrowRight />
            ))}
        </span>

        <span>
            {
                item.type === "folder" ? (
                    <FaFolder className="text-amber-500" />
                ) : (
                    <FaFile className="text-gray-500" />
                )
            }
        </span>

        <span className="text-gray-600 text-[0.8rem]">{item.name}</span>
      </button>

      {
        expanded && 
         children.map((folder) => (
            <FolderTree
                key={folder.id}
                item={folder}
                level={level + 1}
            />
         ))
      }

      {/* {
        expanded && 
         file.map((folder) => (
            <FolderTree
                key={folder.id}
                item={folder}
                level={level + 1}
            />
         ))
      } */}
    </div>
  )
}

export default FolderTree
