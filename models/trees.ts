export interface TreeData {
  name: string
  age?: string
  species?: string
  loaction?: string
  url?: string
}

export interface Tree extends TreeData {
  id: number
}
