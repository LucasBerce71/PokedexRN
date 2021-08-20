import React, {
    createContext,
    useCallback,
    useState,
    useContext,
    PropsWithChildren
} from "react";

import { Alert } from 'react-native';

import { api } from '../services/api';

import { ISearchContextData } from "../models/ISearch";
import { transformLowerCase } from "../utils/transformLowerCase";
import { IPokemon } from "../models";

const SearchContext = createContext<ISearchContextData>({} as ISearchContextData);

export const SearchProvider = ({ children }: PropsWithChildren<unknown>) => {
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');

    const handleToggleSearch = useCallback(() => {
        setIsSearching(!isSearching);
    }, [isSearching]);

    const handleSearchPokemon = useCallback(async (pokemonName: string) => {
        try {
            const { data: pokemon } = await api.get<IPokemon>(
                `pokemons/${transformLowerCase(pokemonName)}`,
            );

            return pokemon;
        } catch (error) {
            console.log(error);

            Alert.alert(
                'Fail to get Pokémon',
                `An error has ocurred when try to load this Pokémon,
                 check if you typed it's name correct!`,
            );
        }
    }, []);

    return (
        <SearchContext.Provider
            value={{
                isSearching,
                handleToggleSearch,
                searchValue,
                setSearchValue,
                handleSearchPokemon
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export function useSearch(): ISearchContextData {
    const context = useContext(SearchContext);

    return context;
}