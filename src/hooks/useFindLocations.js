import {useQuery, gql} from "@apollo/client";

const GET_LOCATIONS = gql`
query {
    locations{
        results{
            id
            name
            dimension
            type
        }
    }
}
`
export const useFindLocations =() => {
    const {error, data, loading} = useQuery(GET_LOCATIONS);

    return {
        error,
        data,
        loading
    }
}