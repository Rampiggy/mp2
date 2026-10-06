//import axios from "axios";
import { TEST_CHARACTERS_RESPONSE } from "../Models/TestCharactersResponse";
import { useState } from "react";
import type { CharactersResponse } from "../Models/CharactersResponse";
import CharactersComponent from "./CharactersComponent";

//const response = await axios.get(
//	"https://api.tenrai.org/v1/anime/21/characters",
//);
//const characterResponse: CharactersResponse = response.data;
const charactersResponse: CharactersResponse = TEST_CHARACTERS_RESPONSE;

export default function App() {
	const [search, setSearch] = useState("");
	return (
		<>
			<h1>One Piece Characters &lt;strawhat svg&gt;</h1>

			<input
				type="search"
				placeholder="Search character..."
				onChange={(e) => setSearch(e.target.value)}
				name="character-name"
			></input>

			<CharactersComponent
				charactersResponse={charactersResponse}
				search={search}
			></CharactersComponent>
		</>
	);
}
