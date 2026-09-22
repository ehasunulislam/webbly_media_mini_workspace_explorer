import LeftSideBar from "./LeftSideBar";
import RightSidebar from "./RightSidebar";

const WorkSpace = () => {

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto flex min-h-[calc(100vh-48px)] max-w-7xl overflow-hidden rounded-2xl border bg-white shadow-sm">
        <LeftSideBar />
        <RightSidebar />
      </div>
    </main>
  );
};

export default WorkSpace;