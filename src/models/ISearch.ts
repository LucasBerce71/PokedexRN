import IPokemon from "./IPokemon";

export interface ISearchContextData {
    isSearching: boolean;
    handleToggleSearch: () => void;
    searchValue: string;
    setSearchValue: (value: string) => void;
    handleSearchPokemon: (pokemonName: string) => Promise<IPokemon | undefined>;
}