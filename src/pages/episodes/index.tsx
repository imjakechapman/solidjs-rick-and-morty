import { Link, useRouteData } from "solid-app-router";
import { Resource, Show } from "solid-js";
import { IEpisodesResponse } from "../../types/episode";

const Episodes = () => {
  const episodes = useRouteData<Resource<IEpisodesResponse>>();

  return (
    <Show when={episodes()}>
      <ul>
        {episodes().results.map((episode: any) => {
          return (
            <li>
              <Link href={`/episodes/${episode.id}`}>{episode.name}</Link>
            </li>
          );
        })}
      </ul>
    </Show>
  );
};

export { Episodes };
export default Episodes;
