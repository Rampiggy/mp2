//import type { CharacterResponse } from "../Models/CharactersResponse";

import { useLoaderData } from "react-router-dom";

export default function CharacterComponent() {
	//	characterResponse,
	//}: {
	//	characterResponse: CharacterResponse;
	//}) {
	const loaderData: { characterId: string } = useLoaderData();
	return (
		<>
			<h1>{loaderData.characterId}</h1>
		</>
	);
}
