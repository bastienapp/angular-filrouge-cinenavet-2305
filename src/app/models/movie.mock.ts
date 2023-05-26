import { Movie } from "./movie.model";

const bronze3 = new Movie(
  'tt0445800',
  'Les bronzés 3: amis pour la vie',
  'Patrice Leconte',
  'https://m.media-amazon.com/images/M/MV5BN2QwN2IwMWEtNDA4OS00NGRjLWEzMGEtNzAwMjU5MjUzZTlmXkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_FMjpg_UX600_.jpg',
  4.0)

const hitman = new Movie(
  'tt1040019',
  'Hitman le Cobra',
  'Godfrey Ho',
  'https://m.media-amazon.com/images/M/MV5BNDY2NTgwMTMtNTVkMy00MGY3LWJiMjEtNzljNTA1Mjg2ZjRjXkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_FMjpg_UY502_.jpg',
  2.6,
  true)

// TODO pourquoi readonly ne marche pas
export const MOVIE_LIST: Movie[] = [
  bronze3,
  hitman
]
