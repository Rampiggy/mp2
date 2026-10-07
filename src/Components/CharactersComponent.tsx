import { Link, useLoaderData } from "react-router-dom";
import type { CharacterResponse } from "../Models/CharactersResponse";
import { useState } from "react";

export default function CharactersComponent() {
	const loaderData: { characterResponses: CharacterResponse[] } =
		useLoaderData();

	const [search, setSearch] = useState("");

	const filteredCharacters: CharacterResponse[] =
		loaderData.characterResponses.filter((characterResponse) =>
			characterResponse.character.name
				.toLowerCase()
				.includes(search.toString().toLowerCase()),
		);

	return (
		<>
			<h1>One Piece Characters &lt;strawhat svg&gt;</h1>

			<input
				type="search"
				placeholder="Search character..."
				onChange={(e) => setSearch(e.target.value)}
				name="character-name"
			></input>

			<ol>
				{filteredCharacters.map((characterResponse, index) => (
					<li key={characterResponse.character.mal_id}>
						<Link
							to={`characters/${characterResponse.character.mal_id}`}
							state={[search, filteredCharacters, index]}
						>
							{characterResponse.character.name}
						</Link>
					</li>
				))}
			</ol>

			<footer>
				<span>Search: {search}</span>
				<span>Rows returned: {filteredCharacters.length}</span>
			</footer>
		</>
	);
}
