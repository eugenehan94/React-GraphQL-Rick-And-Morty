import { useQuery, gql } from "@apollo/client";

const GET_LOCATION = gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      name
      residents {
        id
        name
        image
        species
        gender
        status
      }
    }
  }
`;
export const useFindLocation = (id) => {
  const { data, error, loading } = useQuery(GET_LOCATION, {
    variables: { id },
  });
  return { data, error, loading };
};
