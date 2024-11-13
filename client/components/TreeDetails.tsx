import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchTreeById, deleteTreeById } from '../apis/treesapi'
import { Tree } from '../../models/trees'

const TreeDetails: React.FunctionComponent = () => {
  const [tree, setTree] = useState<Tree | null>(null)
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // Fetch tree details by ID
  useEffect(() => {
    if (id) {
      fetchTreeById(parseInt(id))
        .then((fetchedTree) => setTree(fetchedTree))
        .catch((error) => console.error('Error fetching tree:', error))
    }
  }, [id])

  // Handle delete tree
  const handleDelete = async () => {
    if (id) {
      try {
        await deleteTreeById(parseInt(id))
        navigate('/')
      } catch (error) {
        console.error('Error deleting tree:', error)
        alert('Failed to delete tree. Please try again later.')
      }
    }
  }

  // Handle navigate to edit page
  const handleEdit = () => {
    if (id) {
      navigate(`/edit/${id}`)
    }
  }

  if (!tree) {
    return <p>Loading...</p>
  }

  return (
    <div className="tree-details">
      <h2>{tree.name}</h2>
      <img
        src={tree.treeUrl || '../images/sadtree.jpeg'}
        alt={tree.name || 'Tree image'}
      />
      <p>
        <strong>Age:</strong> {tree.age}
      </p>
      <p>
        <strong>Species:</strong> {tree.species}
      </p>
      <p>
        <strong>Location:</strong> {tree.location}
      </p>
      <p>
        <strong>Description:</strong> {tree.description}
      </p>

      <div className="buttons">
        <button onClick={handleEdit}>Edit Tree</button>
        <button onClick={handleDelete}>Delete Tree</button>
      </div>
    </div>
  )
}

export default TreeDetails
