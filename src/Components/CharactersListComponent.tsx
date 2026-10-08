import "../Styles/characters.css";
import { Link, useLoaderData } from "react-router-dom";
import type { CharacterResponse } from "../Models/CharactersResponse";
import { useState } from "react";

export default function CharactersListComponent() {
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
			<header>
				<nav>
					<a className="current-nav">List</a>
					<Link to="/" state={[search]}>
						Gallery
					</Link>
				</nav>
				<h1>One Piece Characters</h1>
			</header>

			<main className="characters">
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
			</main>

			<footer>
				<span>Search: {search}</span>
				<span>Rows returned: {filteredCharacters.length}</span>
			</footer>
		</>
	);
}
