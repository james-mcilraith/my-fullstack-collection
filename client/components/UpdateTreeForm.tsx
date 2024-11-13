// UpdateTreeForm
import { useState, useEffect, FormEvent } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchTreeById, updateTreeById } from '../apis/treesapi'
import { Tree } from '../../models/trees'

const UpdateTreeForm: React.FunctionComponent = () => {
  const [tree, setTree] = useState<Tree | null>(null)
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string | number | undefined>('')
  const [species, setSpecies] = useState<string | undefined>('')
  const [location, setLocation] = useState<string | undefined>('')
  const [treeUrl, setTreeUrl] = useState<string | undefined>('')
  const [description, setDescription] = useState<string | undefined>('')

  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // Fetch tree data by ID to populate the form
  useEffect(() => {
    if (id) {
      fetchTreeById(parseInt(id))
        .then((fetchedTree) => {
          setTree(fetchedTree)
          setName(fetchedTree.name)
          setAge(fetchedTree.age)
          setSpecies(fetchedTree.species)
          setLocation(fetchedTree.location)
          setTreeUrl(fetchedTree.treeUrl)
          setDescription(fetchedTree.description)
        })
        .catch((error) => console.error('Error fetching tree:', error))
    }
  }, [id])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (!tree) return

    const updatedTree: Tree = {
      id: tree.id,
      name,
      age,
      species,
      location,
      treeUrl,
      description,
    }

    try {
      await updateTreeById(Number(tree.id), updatedTree)
      navigate(`/`)
    } catch (error) {
      console.error('Error updating tree:', error)
    }
  }

  if (!tree) {
    return <p>Loading...</p>
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <label htmlFor="name">Tree Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Tree Name"
        required
        autoComplete="name"
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="text"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Age"
        autoComplete="on"
      />
      <label htmlFor="species">Species</label>
      <input
        id="species"
        name="species"
        type="text"
        value={species}
        onChange={(event) => setSpecies(event.target.value)}
        placeholder="Species"
        autoComplete="on"
      />
      <label htmlFor="location">Location</label>
      <input
        id="location"
        name="location"
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Location"
        autoComplete="on"
      />
      <label htmlFor="treeUrl">Image URL</label>
      <input
        id="treeUrl"
        name="treeUrl"
        type="url"
        value={treeUrl}
        onChange={(event) => setTreeUrl(event.target.value)}
        placeholder="Image URL"
        autoComplete="off"
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
        autoComplete="off"
      />
      <button type="submit">Update Tree</button>
    </form>
  )
}

export default UpdateTreeForm
