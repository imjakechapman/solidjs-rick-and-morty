import { Resource, Show } from "solid-js";
import { useRouteData } from "solid-app-router";
import { TEpisode } from "../../types/episode";

const Episode = () => {
  let episode = useRouteData<Resource<TEpisode>>();

  return (
    <Show when={episode()}>
      <ul>
        <li>id: {episode().id}</li>
        <li>code: {episode().episode}</li>
        <li>aired on: {episode().air_date}</li>
        <li>name: {episode().name}</li>
      </ul>
    </Show>
  );
};

export { Episode };
export default Episode;
