import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchTreeById } from '../apis/treesapi'
import { Tree } from '../../models/trees'

const TreeDetails: React.FunctionComponent = () => {
  const [tree, setTree] = useState<Tree | null>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (id) {
      fetchTreeById(parseInt(id))
        .then((fetchedTree) => setTree(fetchedTree))
        .catch((error) => console.error('Error fetching tree:', error))
    }
  }, [id])

  if (!tree) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>{tree.name}</h2>
      <img src={tree.treeUrl} alt={tree.name} />
      <p>{tree.age}</p>
      <p>{tree.species}</p>
      <p>{tree.location}</p>
      <p>{tree.description}</p>
    </div>
  )
}

export default TreeDetails
