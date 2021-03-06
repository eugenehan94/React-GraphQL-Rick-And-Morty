import {useQuery, gql} from "@apollo/client/"

export const GET_CHARACTERS = gql`
query {
  characters{
    results {
      id
      name
      image
      species
      status
      gender
      origin {
        name
      }
    }
  }
}
`

export const useCharacter = () => {
    const {error, data, loading} = useQuery(GET_CHARACTERS);

    return {
        error,
        data,
        loading
    }
}