import { Artist } from "./artists";
import { Author } from "./author";
import { Character } from "./character";

export interface Caricature {
  _id: string;
  image: string;
  authorName: Author;
  artistName: Artist;
  characterName: Character;
  description: string;
  favourite: boolean;
}
