import "../Styles/gallery.css";
import { Link, useLoaderData } from "react-router-dom";
import type { CharacterResponse } from "../Models/CharactersResponse";
import { useState } from "react";

export default function GalleryComponent() {
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
					<Link to="/" state={[search]}>
						List
					</Link>
					<a className="current-nav">Gallery</a>
				</nav>
				<h1>One Piece Characters</h1>
			</header>

			<main className="gallery">
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
								to={`/characters/${characterResponse.character.mal_id}`}
								state={[search, filteredCharacters, index]}
							>
								<img
									src={
										characterResponse.character.images.webp
											.image_url
									}
									alt="Image of a One Piece character"
									width="110"
									height="171.09"
								/>
								<p>{characterResponse.character.name}</p>
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
