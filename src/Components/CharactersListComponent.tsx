import "../Styles/characters.css";
import { Link, useLoaderData } from "react-router-dom";
import type { CharacterResponse } from "../Models/CharactersResponse";
import { useState } from "react";

export default function CharactersListComponent() {
	const loaderData: { characterResponses: CharacterResponse[] } =
		useLoaderData();

	const [search, setSearch] = useState("");
	let filteredCharactersOriginal: CharacterResponse[] =
		loaderData.characterResponses.filter((characterResponse) =>
			characterResponse.character.name
				.toLowerCase()
				.includes(search.toString().toLowerCase()),
		);

	const [ordering, setOrdering] = useState(0);
	let filteredCharacters = filteredCharactersOriginal;
	if (ordering == 1) {
		filteredCharacters = filteredCharactersOriginal.toSorted((c1, c2) =>
			c1.character.name <= c2.character.name ? -1 : 1,
		);
	} else if (ordering == -1) {
		filteredCharacters = filteredCharactersOriginal.toSorted((c1, c2) =>
			c1.character.name >= c2.character.name ? -1 : 1,
		);
	}

	const [isMain, setIsMain] = useState(true);
	const [isSupporting, setIsSupporting] = useState(true);
	if (!isMain) {
		filteredCharacters = filteredCharacters.filter((c) => c.role != "Main");
	}
	if (!isSupporting) {
		filteredCharacters = filteredCharacters.filter(
			(c) => c.role != "Supporting",
		);
	}

	return (
		<>
			<header>
				<nav>
					<a className="current-nav">List</a>
					<Link to="/gallery" state={[search]}>
						Gallery
					</Link>
				</nav>

				<h1>One Piece Characters</h1>

				<div className="inputs">
					<div className="radios">
						<input
							type="radio"
							id="default"
							name="ordering"
							value="default"
							defaultChecked
							onChange={() => setOrdering(0)}
						/>
						<label htmlFor="default">Default</label>
						<input
							type="radio"
							id="ascending"
							name="ordering"
							value="ascending"
							onChange={() => setOrdering(1)}
						/>
						<label htmlFor="ascending">Ascending</label>
						<input
							type="radio"
							id="descending"
							name="ordering"
							value="ascending"
							onChange={() => setOrdering(-1)}
						/>
						<label htmlFor="descending">Descending</label>
					</div>

					<input
						type="search"
						placeholder="Search character..."
						onChange={(e) => setSearch(e.target.value)}
						name="character-name"
					></input>

					<div className="checkboxes">
						<input
							type="checkbox"
							id="main"
							name="main"
							defaultChecked
							onChange={() => setIsMain(!isMain)}
						/>
						<label htmlFor="main">Main</label>
						<input
							type="checkbox"
							id="supporting"
							name="supporting"
							defaultChecked
							onChange={() => setIsSupporting(!isSupporting)}
						/>
						<label htmlFor="supporting">Supporting</label>
					</div>
				</div>
			</header>

			<main className="characters">
				<ol>
					{filteredCharacters.map((characterResponse, index) => (
						<li key={characterResponse.character.mal_id}>
							<Link
								to={`/characters/${characterResponse.character.mal_id}`}
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
