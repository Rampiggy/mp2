//import type { CharacterResponse } from "../Models/CharactersResponse";

export default function CharacterComponent({
	//	characterResponse,
	//}: {
	//	characterResponse: CharacterResponse;
	//}) {
	characterId,
}: {
	characterId: string;
}) {
	return (
		<>
			<h1>{characterId}</h1>
		</>
	);
}
