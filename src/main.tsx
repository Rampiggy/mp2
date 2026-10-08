import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharacterComponent from "./Components/CharacterComponent.tsx";
import type { CharacterResponse } from "./Models/CharactersResponse.ts";
import CharactersListComponent from "./Components/CharactersListComponent.tsx";
//import { FULL_CHARACTERS_RESPONSE_DATA } from "./HardcodedResponseData/FullCharactersResponseData.ts";
import GalleryComponent from "./Components/GalleryComponent.tsx";
import axios from "axios";

const response = await axios.get(
	"https://api.tenrai.org/v1/anime/21/characters",
);
const characterResponses: CharacterResponse[] = response.data.data;
//const characterResponses: CharacterResponse[] =
//	FULL_CHARACTERS_RESPONSE_DATA.data;

const router = createBrowserRouter(
	[
		{
			index: true,
			loader: () => {
				return { characterResponses: characterResponses };
			},
			Component: CharactersListComponent,
		},
		{
			path: "/gallery",
			loader: () => {
				return { characterResponses: characterResponses };
			},
			Component: GalleryComponent,
		},
		{
			path: "/characters/:characterId",
			loader: ({ params }) => {
				const currCharacter = characterResponses.find(
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
