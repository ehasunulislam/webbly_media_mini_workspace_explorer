import { useWorkSpaceStore } from "@/store/workspace-store";

const ButtonGroup = () => {
  const {items, selectedFolderId, createItem, renameItem, deleteItem } = useWorkSpaceStore();
  const selectedItem = items.find((item) => item.id === selectedFolderId) ?? null;


  const handleDelete = () => {
    if (!selectedItem) return;

    const confirmed = window.confirm(`Delete "${selectedItem.name}"?`);

    if (confirmed) {
      deleteItem(selectedItem.id);
    }
  }

  return (
          <div className="mt-4 flex gap-3">
            <button onClick={() => {
                    const name = prompt("Folder name");

                    if (name) {
                        createItem(name, "folder");
                    }
                }}
                className="rounded-md bg-blue-600 px-4 py-2 text-white cursor-pointer">
              New Folder
            </button>

            <button onClick={() => { 
                    const name = prompt("File name");

                    if (name) {
                        createItem(name, "file");
                    }
                }}
                className="rounded-md bg-green-600 px-4 py-2 text-white cursor-pointer">
              New File
            </button>

            <button onClick={() => {
                    if(!selectedItem) {
                        return 
                    }
                    const name = prompt("Enter new name", selectedItem.name);

                    if (name !== null) {
                        renameItem(selectedItem.id, name);
                    }
                }}
                className="rounded-md bg-yellow-400 px-4 py-2 text-white cursor-pointer">
                Rename
            </button>

            <button onClick={handleDelete}
                className="rounded-md bg-red-600 px-4 py-2 text-white cursor-pointer">
                Delete
            </button>
          </div>
  )
}

export default ButtonGroup
