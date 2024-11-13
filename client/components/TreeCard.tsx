// components/TreeCard.tsx
import React from 'react'
import { Tree } from '../../models/trees'

interface TreeCardProps {
  tree: Tree
}

const TreeCard: React.FunctionComponent<TreeCardProps> = ({ tree }) => {
  return (
    <div className="tree-card">
      <h3>{tree.name}</h3>
      <img src={tree.treeUrl} alt={tree.name} />
    </div>
  )
}

export default TreeCard
