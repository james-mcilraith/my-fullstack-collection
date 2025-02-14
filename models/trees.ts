export interface TreeData {
  name: string
  age?: string | number
  species?: string
  location?: string
  treeUrl?: string
  description?: string
}

export interface Tree extends TreeData {
  id: number | string
}
