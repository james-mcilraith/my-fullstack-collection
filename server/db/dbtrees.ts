import { Tree, TreeData } from '../../models/trees'
import dbtrees from './connection'

// Read - All
export async function getAllTrees() {
  const trees = await dbtrees('trees').select(
    'id',
    'name',
    'age',
    'species',
    'location',
    'tree_url as treeUrl',
    'description',
  )
  console.log(trees)
  return trees as Tree[]
}

// Read - One
export async function getTreeById(id: number) {
  const tree = await dbtrees('trees')
    .where('id', id)
    .select(
      'id',
      'name',
      'age',
      'species',
      'location',
      'tree_url as treeUrl',
      'description',
    )
    .first()
  console.log(tree)
  return tree as Tree
}

// Create
export async function addTree(tree: TreeData) {
  const result = await dbtrees('trees').insert({
    name: tree.name,
    age: tree.age,
    species: tree.species,
    location: tree.location,
    tree_url: tree.location,
    description: tree.description,
  })
  console.log(result)
  return result as number[]
}

// Update
export async function updateTreeById(id: number, tree: Tree) {
  const result = await dbtrees('trees')
    .update({
      name: tree.name,
      age: tree.age,
      species: tree.species,
      location: tree.location,
      tree_url: tree.location,
      description: tree.description,
    })
    .where('id', id)
  console.log(result)
  return result as number
}

// Delete
export async function deleteTreeById(id: number) {
  const result = await dbtrees('trees').where('id', id).delete()
  console.log(result)
  return result as number
}
