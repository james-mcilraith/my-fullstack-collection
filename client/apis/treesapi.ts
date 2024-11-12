import request from 'superagent'
import { Tree, TreeData } from '../../models/trees'

export async function fetchAllTrees() {
  const result = await request.get(`/api/v1/trees/`)
  console.log(result)
  return result.body as Tree[]
}

export async function addTree(tree: TreeData) {
  const result = await request.post(`/api/v1/trees/`).send(tree)
  console.log(result)
  return result.body as Tree
}

export async function fetchTreeById(id: number): Promise<Tree> {
  try {
    const result = await request.get(`/api/v1/trees/${id}`)
    console.log(result)
    return result.body as Tree
  } catch (error) {
    console.error('Error fetching tree data:', error)
    throw new Error('Failed to fetch tree data')
  }
}

export async function updateTreeById(id: number, tree: Tree) {
  const result = await request.patch(`/api/v1/trees/${id}`).send(tree)
  console.log(result.statusCode)
}

export async function deleteTreeById(id: number) {
  const result = await request.delete(`/api/v1/trees/${id}`)
  console.log(result.statusCode)
}
