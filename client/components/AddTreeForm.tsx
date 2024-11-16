import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { addTree } from '../apis/treesapi'
import { TreeData } from '../../models/trees'

const AddTreeForm: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string | number | undefined>('')
  const [species, setSpecies] = useState<string | undefined>('')
  const [location, setLocation] = useState<string | undefined>('')
  const [treeUrl, setTreeUrl] = useState<string | undefined>('')
  const [description, setDescription] = useState<string | undefined>('')

  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const treeData: TreeData = {
      name,
      age,
      species,
      location,
      treeUrl,
      description,
    }

    try {
      await addTree(treeData)
      navigate('/')
    } catch (error) {
      console.error('Error adding tree:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="name">Tree Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Tree Name"
        required
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="text"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Age"
      />
      <label htmlFor="species">Species</label>
      <input
        id="species"
        name="species"
        type="text"
        value={species}
        onChange={(event) => setSpecies(event.target.value)}
        placeholder="Species"
      />
      <label htmlFor="location">Location</label>
      <input
        id="location"
        name="location"
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Location"
      />
      <label htmlFor="treeUrl">Image URL</label>
      <input
        id="treeUrl"
        name="treeUrl"
        type="url"
        value={treeUrl}
        onChange={(event) => setTreeUrl(event.target.value)}
        placeholder="Image URL"
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Tree</button>
    </form>
  )
}

export default AddTreeForm
