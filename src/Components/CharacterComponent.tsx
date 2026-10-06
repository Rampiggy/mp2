//import type { CharacterResponse } from "../Models/CharactersResponse";

import { useLoaderData } from "react-router-dom";

export default function CharacterComponent() {
	//	characterResponse,
	//}: {
	//	characterResponse: CharacterResponse;
	//}) {
	const data: { characterId: string } = useLoaderData();
	return (
		<>
			<h1>{data.characterId}</h1>
		</>
	);
}
