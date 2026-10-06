import { Link } from "react-router-dom";
import type {
	CharacterResponse,
	CharactersResponse,
} from "../Models/CharactersResponse";

export default function CharactersComponent({
	charactersResponse,
	search,
}: {
	charactersResponse: CharactersResponse;
	search: string;
}) {
	const filteredCharacters: CharacterResponse[] =
		charactersResponse.data.filter((characterResponse) =>
			characterResponse.character.name
				.toLowerCase()
				.includes(search.toString().toLowerCase()),
		);

	return (
		<>
			<ol>
				{filteredCharacters.map((characterResponse) => (
					<li key={characterResponse.character.mal_id}>
						<Link
							to={`characters/${characterResponse.character.mal_id}`}
						>
							{characterResponse.character.name}
						</Link>
					</li>
				))}
			</ol>
			<footer>
				<p>Rows returned: {filteredCharacters.length}</p>
			</footer>
		</>
	);
}
