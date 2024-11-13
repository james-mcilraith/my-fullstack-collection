import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTrees } from '../hooks/useTrees'
import TreeCard from './TreeCard'

const TreeList = () => {
  const { trees, loading, error, fetchTrees } = useTrees()

  useEffect(() => {
    fetchTrees()
  }, [fetchTrees])

  if (loading) return <p>Loading...</p>

  if (error) {
    if (error instanceof Error) {
      return <p>Error: {error.message}</p>
    } else {
      return <p>An unknown error occurred.</p>
    }
  }

  return (
    <div className="tree-list">
      {trees.map((tree) => (
        <Link key={tree.id + tree.name} to={`/trees/${tree.id}`}>
          <TreeCard tree={tree} />
        </Link>
      ))}
    </div>
  )
}

export default TreeList
