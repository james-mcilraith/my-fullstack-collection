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
    'url',
  )
  console.log(trees)
  return trees as Tree[]
}

// Read - One
export async function getTreesById(id: number) {
  const tree = await dbtrees('trees')
    .where('id', id)
    .select('id', 'name', 'age', 'species', 'location', 'url')
    .first()
  console.log(tree)
  return tree as Tree
}

// Create
export async function addtree(tree: TreeData) {
  const result = await dbtrees('trees').insert({
    name: tree.name,
    age: tree.age,
    species: tree.species,
    location: tree.location,
    url: tree.location,
  })
  // console.log(trees)
  return result as number[]
}

export async function updatetreeById(id: number, tree: Tree) {
  const result = await dbtrees('trees')
    .update({
      name: tree.name,
      age: tree.age,
      species: tree.species,
      location: tree.location,
      url: tree.location,
    })
    .where('id', id)
  console.log(result)
  return result as number
}

// Delete
export async function deletetreeById(id: number) {
  const result = await dbtrees('trees').where('id', id).delete()
  console.log(result)
  return result as number
}
