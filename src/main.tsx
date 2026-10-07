import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharacterComponent from "./Components/CharacterComponent.tsx";
import type { CharacterResponse } from "./Models/CharactersResponse.ts";
import CharactersComponent from "./Components/CharactersComponent.tsx";
import { TEST_CHARACTERS_RESPONSE_LARGE } from "./TestData/TestCharactersResponseLarge.ts";

//const response = await axios.get(
//https://api.tenrai.org/v1/anime/21/characters",
//);
//const characterResponse: CharactersResponse = response.data;
const charactersResponses: CharacterResponse[] =
	TEST_CHARACTERS_RESPONSE_LARGE.data;

const router = createBrowserRouter(
	[
		{
			index: true,
			loader: () => {
				return { characterResponses: charactersResponses };
			},
			Component: CharactersComponent,
		},
		{
			path: "/characters/:characterId",
			loader: ({ params }) => {
				const currCharacter = charactersResponses.find(
					(c) => c.character.mal_id === Number(params.characterId),
				);
				return { currentCharacter: currCharacter };
			},
			Component: CharacterComponent,
		},
	],
	{ basename: import.meta.env.BASE_URL },
);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
