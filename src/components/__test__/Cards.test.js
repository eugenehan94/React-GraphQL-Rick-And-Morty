import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Cards from "../Cards";

test("testing",  async() => {
    const mock =[{

        request:{},
        result: {
            data: {
                characters: {
                    results: {
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
        }

    }]
  render(
    <MockedProvider>
      <Cards />
    </MockedProvider>
  );
});
