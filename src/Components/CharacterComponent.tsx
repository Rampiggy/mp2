import "../Styles/character.css";
import leftArrow from "../Assets/left-arrow.svg";
import rightArrow from "../Assets/right-arrow.svg";
import { Link, useLoaderData, useLocation } from "react-router-dom";
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

	const showLeftArrow: boolean = index - 1 >= 0;
	const showRightArrow: boolean = index + 1 <= filteredCharacters.length - 1;

	return (
		<>
			<header>
				<h1>{currCharacter.character.name}</h1>
			</header>

			<main className="character">
				<section className="character-top">
					{showLeftArrow ? (
						<Link
							to={`../characters/${filteredCharacters[index - 1].character.mal_id}`}
							state={[search, filteredCharacters, index - 1]}
						>
							<img
								className="arrow"
								src={leftArrow}
								alt="A left arrow to go to the previous One Piece character"
								width="50"
							></img>
						</Link>
					) : (
						<div className="arrow-filler"></div>
					)}
					<img
						className="character-image"
						src={currCharacter.character.images.jpg.image_url}
						alt="Image of the current One Piece character selected"
						width="200"
						height="311.11"
					></img>
					{showRightArrow ? (
						<Link
							to={`../characters/${filteredCharacters[index + 1].character.mal_id}`}
							state={[search, filteredCharacters, index + 1]}
						>
							<img
								className="arrow"
								src={rightArrow}
								alt="A right arrow to go to the next One Piece character"
								width="50"
							></img>
						</Link>
					) : (
						<div className="arrow-filler"></div>
					)}
				</section>
				<section className="character-bottom">
					<p>
						Source:<br></br>
						<a
							href={currCharacter.character.url}
							rel="noreferrer"
							target="_blank"
						>
							MAL
						</a>
					</p>
					<p>
						Role:<br></br>
						{currCharacter.role}
					</p>
					<ul className="voice-actors">
						Voice Actors:
						{currCharacter.voice_actors.map((voiceActor, index) => (
							<li key={index}>
								{voiceActor.language} &ndash;{" "}
								{voiceActor.person.name}
							</li>
						))}
					</ul>
				</section>
			</main>

			<footer>
				<span>Search: {search}</span>
				<span>
					Row {index} / {filteredCharacters.length}
				</span>
			</footer>
		</>
	);
}
