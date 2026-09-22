"use client"

import { useWorkSpaceStore } from "@/store/workspace-store"
import { FaFolder } from "react-icons/fa";

const WorkSpace = () => {

  const { items } = useWorkSpaceStore();

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="max-auto flex min-h-[calc(100vh-48px)] max-w-7xl overflow-hidden rounded-2xl border bg-white shadow-sm">

        {/* sidebar  */}
        <aside className="w-72 border-r p-5">
            <h1 className="text-xl font-bold text-black">
                Workspace
            </h1>

            <section className="mt-6">
                {items.map((folder) => (
                    <div key={folder.id} className="py-2">
                        <FaFolder className="text-amber-500" />
                    </div>
                ))}
            </section>
        </aside>
      </div>
    </main>
  )
}

export default WorkSpace
