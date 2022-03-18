import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      status
      species
      gender
      image
      origin {
        name
        dimension
      }
      location {
        name
      }
      episode {
        name
      }
    }
  }
`;
export const useFindCharacter = (id) => {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });
  return {
    data,
    error,
    loading,
  };
};
