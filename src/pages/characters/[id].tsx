import { Resource, Show } from "solid-js";
import { useRouteData } from "solid-app-router";
import { TCharacter } from "../../types/character";

const Character = () => {
  let character = useRouteData<Resource<TCharacter>>();

  return (
    <Show when={character()}>
      <img
        src={character().image}
        width="150"
        alt={`${character().name} avatar`}
      />
      <ul>
        <li>id: {character().id}</li>
        <li>name: {character().name}</li>
        <li>gender: {character().gender}</li>
        <li>status: {character().status}</li>
      </ul>
    </Show>
  );
};

export { Character };
export default Character;
