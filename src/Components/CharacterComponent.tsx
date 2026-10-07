import "../Styles/character.css";
import leftArrow from "../Assets/left-arrow.svg";
import rightArrow from "../Assets/right-arrow.svg";
import { useLoaderData, useLocation } from "react-router-dom";
import type { CharacterResponse } from "../Models/CharactersResponse";

export default function CharacterComponent() {
	const loaderData: { currentCharacter: CharacterResponse } = useLoaderData();
	const currCharacter: CharacterResponse = loaderData.currentCharacter;

	let search: string = "";
	let filteredCharacters: CharacterResponse[] = [currCharacter];
	let index: number = 0;

	const location = useLocation();
	if (location.state != null) {
		search = location.state[0];
		filteredCharacters = location.state[1];
		index = location.state[2];
	}

	return (
		<>
			<header>
				<h1>{currCharacter.character.name}</h1>
			</header>

			<main className="character">
				<section className="character-top">
					<img
						src={leftArrow}
						alt="A left arrow to go to the previous One Piece character"
						width="50"
					></img>
					<img
						className="character-image"
						src={currCharacter.character.images.jpg.image_url}
						alt="Image of the current One Piece character selected"
					></img>
					<img
						src={rightArrow}
						alt="A right arrow to go to the next One Piece character"
						width="50"
					></img>
				</section>
				<section className="character-bottom">
					<ul className="character-bottom-container">
						<li>
							Source:{" "}
							<a href={currCharacter.character.url}>MAL</a>
						</li>
						<br></br>
						<li>Role: {currCharacter.role}</li>
						<br></br>
						<li>
							Voice Actors:
							<ul className="voice-actors">
								{currCharacter.voice_actors.map(
									(voiceActor, index) => (
										<li key={index}>
											{voiceActor.language} &ndash;{" "}
											{voiceActor.person.name}
										</li>
									),
								)}
							</ul>
						</li>
					</ul>
				</section>
			</main>

			<footer>
				<span>Search: {search}</span>
				<span>Rows returned: {filteredCharacters.length}</span>
			</footer>
		</>
	);
}
