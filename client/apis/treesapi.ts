import request from 'superagent'
import { Tree, TreeData } from '../../models/trees'

// Fetch all trees
export async function fetchAllTrees(): Promise<Tree[]> {
  try {
    const result = await request.get(`/api/v1/trees/`)
    return result.body as Tree[]
  } catch (error) {
    console.error('Error fetching trees:', error)
    throw new Error('Failed to fetch all trees')
  }
}

// Fetch a single tree by ID
export async function fetchTreeById(id: number): Promise<Tree> {
  try {
    const result = await request.get(`/api/v1/trees/${id}`)
    return result.body as Tree
  } catch (error) {
    console.error('Error fetching tree data:', error)
    throw new Error(`Failed to fetch tree with ID ${id}`)
  }
}

// Add a new tree
export async function addTree(tree: TreeData): Promise<Tree> {
  try {
    const result = await request.post(`/api/v1/trees/add`).send(tree)
    return result.body as Tree
  } catch (error) {
    console.error('Error adding tree:', error)
    throw new Error('Failed to add tree')
  }
}

// Update tree data by ID
export async function updateTreeById(id: number, tree: Tree): Promise<void> {
  try {
    const result = await request.patch(`/api/v1/trees/${id}`).send(tree)
    if (result.statusCode !== 200) {
      throw new Error(
        `Failed to update tree. Status code: ${result.statusCode}`,
      )
    }
    // Optionally, return the updated tree, if needed
  } catch (error) {
    console.error('Error updating tree:', error)
    throw new Error(`Failed to update tree with ID ${id}`)
  }
}

// Delete tree by ID
export async function deleteTreeById(id: number): Promise<void> {
  try {
    const result = await request.delete(`/api/v1/trees/${id}`)
    if (result.statusCode !== 200) {
      throw new Error(
        `Failed to delete tree. Status code: ${result.statusCode}`,
      )
    }
    // Optionally, handle additional logic after successful deletion (e.g., show confirmation)
  } catch (error) {
    console.error('Error deleting tree:', error)
    throw new Error(`Failed to delete tree with ID ${id}`)
  }
}
