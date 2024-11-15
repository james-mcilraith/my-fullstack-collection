// components/TreeCard.tsx
import React from 'react'
import { Tree } from '../../models/trees'

interface TreeCardProps {
  tree: Tree
}

const TreeCard: React.FunctionComponent<TreeCardProps> = ({ tree }) => {
  return (
    <div className="tree-card">
      <h2>{tree.name}</h2>
      <img src={tree.treeUrl} alt={tree.name} />
    </div>
  )
}

export default TreeCard
