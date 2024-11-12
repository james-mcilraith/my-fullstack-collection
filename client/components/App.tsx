import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addTree, fetchAllTrees } from '../apis/treesapi'
import { TreeData } from '../../models/trees'
import { ChangeEvent, FormEvent, useState } from 'react'

function App() {
  const [formState, setFormState] = useState({
    name: '',
  })

  const { data, isPending, isError } = useQuery({
    queryKey: ['trees'],
    queryFn: () => fetchAllTrees(),
  })

  const queryClient = useQueryClient()
  const addTreeMutation = useMutation({
    mutationFn: (tree: TreeData) => addTree(tree),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['trees'] })
    },
  })

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    console.log('adding', formState.name)
    addTreeMutation.mutate({
      name: formState.name,
      age: formState.age,
      species: formState.species,
      location: formState.location,
      url: formState.url,
    })
  }

  const handleChange = (
    evt: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = evt.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  if (isPending) {
    return <p>Loading trees...</p>
  }

  if (isError) {
    return <p>No trees...</p>
  }

  return (
    <>
      <header className="header">
        <h1>Celebrity trees!</h1>
      </header>
      <section className="main">
        {data.map((tree) => {
          return <li key={tree.id}>{tree.name}</li>
        })}
        <h2>Add Tree</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" value={formState.name} onChange={handleChange} />
          <button type="submit">Add Tree</button>
        </form>
      </section>
    </>
  )
}

export default App
