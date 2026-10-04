import { BrowserRouter } from "react-router-dom";
//import axios from "axios";
//import type { OnePieceCharactersResponse } from "./Models/OnePieceCharactersResponse";
import { TEST_CHARACTERS_RESPONSE } from "./Models/TestCharactersResponse";
import { useState } from "react";

//const response = await axios.get(
//	"https://api.tenrai.org/v1/anime/21/characters",
//);
//const onePieceCharacters: OnePieceCharactersResponse = response.data;

export default function App() {
	const [search, setSearch] = useState("");
	console.log(search);

	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<h1>One Piece Characters &lt;strawhat svg&gt;</h1>
			<input
				type="search"
				placeholder="Search character..."
				onChange={(e) => setSearch(e.target.value)}
			></input>
			<CharactersComponent></CharactersComponent>
		</BrowserRouter>
	);
}

function CharactersComponent() {
	return (
		<ol>
			{TEST_CHARACTERS_RESPONSE.data.map((characterResponse) => (
				<li key={characterResponse.character.mal_id}>
					{characterResponse.character.name}
				</li>
			))}
		</ol>
	);
}
