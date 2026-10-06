import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharacterComponent from "./Components/CharacterComponent.tsx";
import { TEST_CHARACTERS_RESPONSE } from "./Models/TestCharactersResponse.ts";
import type { CharactersResponse } from "./Models/CharactersResponse.ts";
import CharactersComponent from "./Components/CharactersComponent.tsx";

//const response = await axios.get(
//	"https://api.tenrai.org/v1/anime/21/characters",
//);
//const characterResponse: CharactersResponse = response.data;

const router = createBrowserRouter(
	[
		{
			index: true,
			loader: () => {
				const charactersResponse: CharactersResponse =
					TEST_CHARACTERS_RESPONSE;
				return { charactersResponse: charactersResponse };
			},
			Component: CharactersComponent,
		},
		{
			path: "/characters/:characterId",
			loader: ({ params }) => {
				const characterId = params.characterId;
				return { characterId: characterId };
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
