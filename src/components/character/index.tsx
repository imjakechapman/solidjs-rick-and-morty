import { Component } from "solid-js";
import { TCharacter } from "../../types/character";

import styles from "./character.module.scss";

const Character: Component<{ character: TCharacter }> = ({ character }) => {
  return (
    <div class={styles.Character}>
      <img
        class={styles.CharacterAvatar}
        src={character.image}
        alt={`${character.name} avatar`}
      />
    </div>
  );
};

export { Character };
