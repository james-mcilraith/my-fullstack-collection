import express from 'express'

import * as dbtrees from '../db/dbtrees'
import { Tree, TreeData } from '../../models/trees'

const router = express.Router()
export default router

// GET api/v1/trees/
router.get('/', async (req, res) => {
  try {
    const trees = await dbtrees.getAllTrees()
    res.json(trees)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

// GET api/v1/tress/:id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const tree = await dbtrees.getTreeById(Number(id))
    res.json(tree)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

// POST api/v1/trees
router.post('/', async (req, res) => {
  try {
    const newTree = req.body as TreeData
    const id = await dbtrees.addTree(newTree)
    res.json({ ...newTree, id: id[0] })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

// PATCH api/v1/trees/:id
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updatedTree = req.body as Tree
    await dbtrees.updateTreeById(Number(id), updatedTree)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

// DELETE api/v1/birds/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await dbtrees.deleteTreeById(Number(id))
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})
