import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Cards from "../Cards";
import GET_CHARACTERS from "../../hooks/useFindCharacters";
import useCharacter from "../../hooks/useFindCharacters";
//https://medium.com/@jialhe85/testing-tips-for-apolloclient-with-react-b58373eebb96

test("testing", async () => {
  const mock = [
    {
      request: {
        query: GET_CHARACTERS,
      },
      result: {
        data: {
          characters: {
            results: [
              {
                id: 1,
                name: "Rick Sanchez Tester",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                species: "Human",
                status: "Alive",
                gender: "Male",
                origin: {
                  name: "Earth (C-137)",
                },
              },
            ],
          },
        },
      },
    },
  ];
  render(
    <MockedProvider
      mock={mock}
      addTypename={false}
      cache={
        new InMemoryCache({
          possibleTypes,
        })
      }
    >
      <Cards />
    </MockedProvider>
  );
});
