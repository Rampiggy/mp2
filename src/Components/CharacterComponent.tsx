//import type { CharacterResponse } from "../Models/CharactersResponse";

import { useLoaderData, useLocation } from "react-router-dom";
import type { CharacterResponse } from "../Models/CharactersResponse";

export default function CharacterComponent() {
	const loaderData: { currentCharacter: CharacterResponse } = useLoaderData();
	const currCharacter: CharacterResponse = loaderData.currentCharacter;

	let search: string = "";
	let filteredCharacters: CharacterResponse[] = [currCharacter];
	let index: number = 0;

	const location = useLocation();
	if (location.state != null) {
		search = location.state[0];
		filteredCharacters = location.state[1];
		index = location.state[2];
	}

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
