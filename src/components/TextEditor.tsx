"use client";

import { useEffect, useState } from "react";
import { useWorkSpaceStore } from "@/store/workspace-store";

const TextEditor = () => {
  const {
    items,
    selectedFileId,
    updateFileContent,
  } = useWorkSpaceStore();

  const selectedFile = items.find(
    (item) => item.id === selectedFileId && item.type === "file"
  );

  const [content, setContent] = useState("");

  useEffect(() => {
    if (selectedFile) {
      setContent(selectedFile.content || "");
    }
  }, [selectedFile]);

  if (!selectedFile) {
    return null;
  }

  // handle saving functionality  
  const handleSave = () => {
    updateFileContent(selectedFile.id, content);
    alert("File saved successfully");
  };

  return (
    <div className="flex h-full flex-col">
      {/* Editor Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-black">
            {selectedFile.name}
          </h2>

          <p className="text-sm text-gray-500">
            Edit your text file
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 cursor-pointer"
        >
          Save
        </button>
      </div>

      {/* Editor */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write something..."
        className="min-h-100 w-full resize-none rounded-xl border border-gray-300 bg-white p-4 text-sm text-black outline-none focus:border-gray-500"
      />
    </div>
  );
};

export default TextEditor;