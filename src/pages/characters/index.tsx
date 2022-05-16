import { Resource, Show } from "solid-js";
import { useRouteData, useSearchParams } from "solid-app-router";
import { ICharactersResponse } from "../../types/character";
import { Button, HStack, SimpleGrid } from "@hope-ui/solid";
import { Character } from "../../components/character";

const Characters = () => {
  const [params, setParams] = useSearchParams();
  const characters = useRouteData<Resource<ICharactersResponse>>();

  // View Methods
  const hasPrev = () => {
    return characters()?.info.prev ? true : false;
  };

  const hasNext = () => {
    return characters()?.info.next ? true : false;
  };

  const handlePrev = () => {
    setParams({ page: (parseInt(params.page ?? 1, 10) - 1).toString() });
  };

  const handleNext = () => {
    setParams({ page: (parseInt(params.page ?? 1, 10) + 1).toString() });
  };

  // Render Helpers
  const renderCharacters = () => {
    return (
      <SimpleGrid columns={5} rowGap="$5" columnGap="$5">
        {characters().results.map((character: any) => (
          <Character character={character} />
        ))}
      </SimpleGrid>
    );
  };

  const renderPagination = () => {
    return (
      <HStack marginTop="$5" paddingBottom="$5" spacing="$5">
        <Button disabled={!hasPrev()} onClick={handlePrev}>
          Prev page
        </Button>
        <Button disabled={!hasNext()} onClick={handleNext}>
          Next page
        </Button>
      </HStack>
    );
  };

  return (
    <>
      <Show when={characters.loading}>
        <p>Loading...</p>
      </Show>
      <Show when={characters()}>
        {renderCharacters()}
        {renderPagination()}
      </Show>
      <Show when={!characters.loading && !characters()}>
        <p>No characters</p>
      </Show>
    </>
  );
};

export { Characters };
export default Characters;
