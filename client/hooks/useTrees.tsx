import { useState, useCallback } from 'react'
import { Tree } from '../../models/trees'
import { fetchAllTrees } from '../apis/treesapi'

export const useTrees = () => {
  const [trees, setTrees] = useState<Tree[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchTrees = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const fetchedTrees = await fetchAllTrees()
      setTrees(fetchedTrees)
    } catch (error) {
      setError(error instanceof Error ? error : new Error('Unknown error'))
    } finally {
      setLoading(false)
    }
  }, [])

  return { trees, loading, error, fetchTrees }
}
