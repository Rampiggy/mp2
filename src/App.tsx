import { BrowserRouter } from "react-router-dom";
//import axios from "axios";
import { TEST_CHARACTERS_RESPONSE } from "./Models/TestCharactersResponse";
import { useState } from "react";
import type {
	CharacterResponse,
	CharactersResponse,
} from "./Models/CharactersResponse";

//const response = await axios.get(
//	"https://api.tenrai.org/v1/anime/21/characters",
//);
//const characterResponse: CharactersResponse = response.data;
const characterResponse: CharactersResponse = TEST_CHARACTERS_RESPONSE;

export default function App() {
	const [search, setSearch] = useState("");
	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<h1>One Piece Characters &lt;strawhat svg&gt;</h1>
			<input
				type="search"
				placeholder="Search character..."
				onChange={(e) => setSearch(e.target.value)}
				name="character-name"
			></input>

			<CharactersComponent search={search}></CharactersComponent>
		</BrowserRouter>
	);
}

function CharactersComponent({ search }: { search: string }) {
	const filteredCharacters: CharacterResponse[] =
		characterResponse.data.filter((characterResponse) =>
			characterResponse.character.name
				.toLowerCase()
				.includes(search.toString().toLowerCase()),
		);

	return (
		<>
			<ol>
				{filteredCharacters.map((characterResponse) => (
					<li key={characterResponse.character.mal_id}>
						{characterResponse.character.name}
					</li>
				))}
			</ol>
			<footer>
				<p>Rows returned: {filteredCharacters.length}</p>
			</footer>
		</>
	);
}
