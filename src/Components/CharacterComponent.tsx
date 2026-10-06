//import type { CharacterResponse } from "../Models/CharactersResponse";

import { useLoaderData, useLocation } from "react-router-dom";
import type { CharacterResponse } from "../Models/CharactersResponse";

export default function CharacterComponent() {
	const loaderData: { characterId: string } = useLoaderData();

	const location = useLocation();

	const search: string = location.state[0];
	const filteredCharacters: CharacterResponse[] = location.state[1];
	const index: number = location.state[2];

	const currCharacter: CharacterResponse = filteredCharacters[index];

	console.log(currCharacter);

	return (
		<>
			<h1>{currCharacter.character.name}</h1>

			<img src={currCharacter.character.images.jpg.image_url}></img>

			<footer>
				<span>Search: {search}</span>
				<span>Rows returned: {filteredCharacters.length}</span>
			</footer>
		</>
	);
}
