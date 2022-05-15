export interface MovieAPIRes {
  Search: SearchAPIRes[]
  totalResults: string
  Response: string
}

export interface SearchAPIRes {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface MovieListProps {
  movieDesc: SearchAPIRes
}

export interface ModalOpenProps extends MovieListProps {
  HandleOpenModal: () => void
}

export interface DragAndDropIndex extends MovieListProps {
  index: number
}
