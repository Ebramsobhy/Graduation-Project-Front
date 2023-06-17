import { Artist } from "./artists";
import { Author } from "./author";

export interface Character {
    _id: string;
    name: string;
    image: string;
    author: Author; // Assuming you only need the author's ID
    artist: Artist; // Assuming you only need the artist's ID
  }
  