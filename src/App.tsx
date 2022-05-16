import { Component, createResource, lazy } from "solid-js";
import {
  Router,
  Routes,
  Route,
  NavLink,
  RouteDataFunc,
  useSearchParams,
} from "solid-app-router";
import { Container, HStack, Anchor } from "@hope-ui/solid";

// Lazy Load Routes
const Home = lazy(() => import("./pages"));
const Characters = lazy(() => import("./pages/characters"));
const Character = lazy(() => import("./pages/characters/[id]"));
const Episodes = lazy(() => import("./pages/episodes"));
const Episode = lazy(() => import("./pages/episodes/[id]"));

// Assets
import logo from "./assets/images/rickandmorty-logo.svg";

// Fetchers
const fetchCharacter = async (id: string) => {
  return (
    await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  ).json();
};

const fetchCharacters = async (page: string) => {
  return (
    await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&limit=100`
    )
  ).json();
};

const fetchEpisodes = async () => {
  return (await fetch(`https://rickandmortyapi.com/api/episode`)).json();
};

const fetchEpisode = async (id: string) => {
  return (await fetch(`https://rickandmortyapi.com/api/episode/${id}`)).json();
};

const CharacterData: RouteDataFunc = ({ params }) => {
  const [character] = createResource(params.id, fetchCharacter);
  return character;
};

const CharactersData: RouteDataFunc = () => {
  const [params] = useSearchParams();
  const [characters] = createResource(() => params.page ?? 1, fetchCharacters);
  return characters;
};

const EpisodesData: RouteDataFunc = () => {
  const [params] = useSearchParams();
  const [episodes] = createResource(params.page, fetchEpisodes);
  return episodes;
};

const EpisodeData: RouteDataFunc = ({ params }) => {
  const [episode] = createResource(() => params.id, fetchEpisode);
  return episode;
};

const App: Component = () => {
  return (
    <Router>
      <Container paddingTop={30}>
        <HStack spacing="$5" marginBottom={30}>
          <img src={logo} alt="rick and morty portal logo" width="150" />
          <Anchor as={NavLink} href="/">
            Characters
          </Anchor>
          <Anchor as={NavLink} href="/episodes">
            Episodes
          </Anchor>
        </HStack>
        <Routes>
          <Route path="/" element={<Characters />} data={CharactersData} />
          <Route path="/episodes" element={<Episodes />} data={EpisodesData} />
          <Route
            path="/episodes/:id"
            element={<Episode />}
            data={EpisodeData}
          />
          {/* <Route path="*">
            <Navigate href="/" />
          </Route> */}
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
