export interface CharactersResponse {
    data: CharacterResponse[];
}

export interface CharacterResponse {
    character:    Character;
    role:         Role;
    favorites:    number;
    voice_actors: VoiceActor[];
}

export interface Character {
    mal_id: number;
    url:    string;
    images: CharacterImages;
    name:   string;
}

export interface CharacterImages {
    jpg:  Jpg;
    webp: Webp;
}

export interface Jpg {
    image_url: string;
}

export interface Webp {
    image_url:       string;
    small_image_url: string;
}

export type Role = "Main" | "Supporting";

export interface VoiceActor {
    person:   Person;
    language: Language;
}

export type Language = "Japanese" | "English" | "Italian" | "German" | "French" | "Portuguese (BR)" | "Spanish" | "Korean" | "Mandarin" | "Hebrew";

export interface Person {
    mal_id:    number;
    url:       string;
    images:    PersonImages;
    name:      string;
    favorites: number;
}

export interface PersonImages {
    jpg: Jpg;
}