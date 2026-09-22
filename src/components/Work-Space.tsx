"use client"

import { useWorkSpaceStore } from "@/store/workspace-store"

const WorkSpace = () => {

  const { items } = useWorkSpaceStore();

  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}

export default WorkSpace
