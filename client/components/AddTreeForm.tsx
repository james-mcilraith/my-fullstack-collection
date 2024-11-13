// AddTreeForm.tsx
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
      navigate('/') // Redirect to the main page after successful addition
    } catch (error) {
      console.error('Error adding tree:', error)
    }
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
      <button type="submit">Add Tree</button>
    </form>
  )
}

export default AddTreeForm

// import { useNavigate } from 'react-router-dom'
// import { useState, FormEvent } from 'react'
// import { addTree, updateTreeById } from '../apis/treesapi'
// import { Tree, TreeData } from '../../models/trees'

// interface TreeFormProps {
//   tree?: Tree
// }

// const TreeForm: React.FC<TreeFormProps> = ({ tree }) => {
//   const [name, setName] = useState<string>(tree ? tree.name : '')
//   const [age, setAge] = useState<string | number | undefined>(
//     tree ? tree.age : '',
//   )
//   const [species, setSpecies] = useState<string | undefined>(
//     tree ? tree.species : '',
//   )
//   const [location, setLocation] = useState<string | undefined>(
//     tree ? tree.location : '',
//   )
//   const [treeUrl, setTreeUrl] = useState<string | undefined>(
//     tree ? tree.treeUrl : '',
//   )
//   const [description, setDescription] = useState<string | undefined>(
//     tree ? tree.description : '',
//   )

//   const navigate = useNavigate()

//   const handleSubmit = async (event: FormEvent) => {
//     event.preventDefault()

//     const treeData: TreeData = {
//       name,
//       age,
//       species,
//       location,
//       treeUrl,
//       description,
//     }

//     try {
//       if (tree) {
//         const updatedTree: Tree = { ...treeData, id: tree.id }
//         await updateTreeById(Number(tree.id), updatedTree)
//       } else {
//         await addTree(treeData)
//       }
//       navigate('/')
//     } catch (error) {
//       console.error('Error saving tree:', error)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} autoComplete="on">
//       <label htmlFor="name">Tree Name</label>
//       <input
//         id="name"
//         name="name"
//         type="text"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//         placeholder="Tree Name"
//         required
//         autoComplete="name"
//       />
//       <label htmlFor="age">Age</label>
//       <input
//         id="age"
//         name="age"
//         type="text"
//         value={age}
//         onChange={(event) => setAge(event.target.value)}
//         placeholder="Age"
//         autoComplete="on"
//       />
//       <label htmlFor="species">Species</label>
//       <input
//         id="species"
//         name="species"
//         type="text"
//         value={species}
//         onChange={(event) => setSpecies(event.target.value)}
//         placeholder="Species"
//         autoComplete="on"
//       />
//       <label htmlFor="location">Location</label>
//       <input
//         id="location"
//         name="location"
//         type="text"
//         value={location}
//         onChange={(event) => setLocation(event.target.value)}
//         placeholder="Location"
//         autoComplete="on"
//       />
//       <label htmlFor="treeUrl">Image URL</label>
//       <input
//         id="treeUrl"
//         name="treeUrl"
//         type="url"
//         value={treeUrl}
//         onChange={(event) => setTreeUrl(event.target.value)}
//         placeholder="Image URL"
//         autoComplete="off"
//       />
//       <label htmlFor="description">Description</label>
//       <input
//         id="description"
//         name="description"
//         type="text"
//         value={description}
//         onChange={(event) => setDescription(event.target.value)}
//         placeholder="Description"
//         autoComplete="off"
//       />
//       <button type="submit">{tree ? 'Update Tree' : 'Add Tree'}</button>
//     </form>
//   )
// }

// export default TreeForm
