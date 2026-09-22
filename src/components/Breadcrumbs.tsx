import { useWorkSpaceStore } from "@/store/workspace-store";
import { getBreadcrumbs } from "@/helper/breadcrumbs.intial";

const Breadcrumbs = () => {
  const { items, selectedFolderId, setSelectedFolder } = useWorkSpaceStore();

  const breadcrumbs = getBreadcrumbs(items, selectedFolderId);

  return (
    <div className="breadcrumbs mb-6 mt-6 text-sm">
      <ul className="text-gray-600">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li key={item.id}>
              {isLast ? (
                <span>{item.name}</span>
              ) : (
                <button
                  type="button"
                  onClick={() => setSelectedFolder(item.id)}
                >
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