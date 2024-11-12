export interface TreeData {
  name: string
  age?: string
  species?: string
  location?: string
  url?: string
}

export interface Tree extends TreeData {
  id: number
}
