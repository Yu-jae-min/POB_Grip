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
