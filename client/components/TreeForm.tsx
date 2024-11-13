import { useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'
import { addTree, updateTreeById } from '../apis/treesapi'
import { Tree, TreeData } from '../../models/trees'

interface TreeFormProps {
  tree?: Tree
}

const TreeForm: React.FC<TreeFormProps> = ({ tree }) => {
  const [name, setName] = useState<string>(tree ? tree.name : '')
  const [age, setAge] = useState<string | number | undefined>(
    tree ? tree.age : '',
  )
  const [species, setSpecies] = useState<string | undefined>(
    tree ? tree.species : '',
  )
  const [location, setLocation] = useState<string | undefined>(
    tree ? tree.location : '',
  )
  const [treeUrl, setTreeUrl] = useState<string | undefined>(
    tree ? tree.treeUrl : '',
  )
  const [description, setDescription] = useState<string | undefined>(
    tree ? tree.description : '',
  )

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
      if (tree) {
        const updatedTree: Tree = { ...treeData, id: tree.id }
        await updateTreeById(Number(tree.id), updatedTree)
      } else {
        await addTree(treeData)
      }
      navigate('/')
    } catch (error) {
      console.error('Error saving tree:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Tree Name"
        required
      />
      <input
        type="text"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Age"
      />
      <input
        type="text"
        value={species}
        onChange={(event) => setSpecies(event.target.value)}
        placeholder="Species"
      />
      <input
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Location"
      />
      <input
        type="url"
        value={treeUrl}
        onChange={(event) => setTreeUrl(event.target.value)}
        placeholder="Image URL"
      />
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
      />
      <button type="submit">{tree ? 'Update Tree' : 'Add Tree'}</button>
    </form>
  )
}

export default TreeForm
