import { useWorkSpaceStore } from "@/store/workspace-store";
import { getBreadcrumbs } from "@/helper/breadcrumbs.intial";
import { FaFile, FaFolder } from "react-icons/fa";

const Breadcrumbs = () => {
  const { items, selectedFolderId, setSelectedFolder } = useWorkSpaceStore();

  const breadcrumbs = getBreadcrumbs(items, selectedFolderId);

  return (
    <div className="breadcrumbs mb-6 mt-6 text-sm">
      <ul className="text-gray-600">
        {breadcrumbs.map((item, index) => {
          const isLast =
            index === breadcrumbs.length - 1;

          return (
            <li key={item.id}>
              {isLast ? (
                <span className="inline-flex items-center gap-2 font-medium text-black">
                  {item.type === "folder" ? (
                    <FaFolder className="text-amber-500" />
                    ) : (
                    <FaFile className="text-gray-500" />
                  )}
                  {item.name}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    setSelectedFolder(item.id)
                  }
                  className="inline-flex cursor-pointer items-center gap-2 hover:text-blue-600"
                >
                  <FaFolder className="text-amber-500" />
                  {item.name}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;