import { Pagination } from "./pagination";

export type TEpisode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export interface IEpisodesResponse {
  info: Pagination;
  results: TEpisode[];
}
