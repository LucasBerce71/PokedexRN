export type IType = {
    name: string;
    url: string;
};

export type IStat = {
    base_stat: number;
    name: string;
    url: string;
};

export type IAbility = {
    name: string;
    url: string;
};

export type IEggGroup = {
    name: string;
    url: string;
};

export type IPokemon = {
    id: number;
    name: string;
    description: string;
    image: string;
    genera: string;
    pokedex_number: string;
    base_experience: number;
    types: Array<IType>;
    stats: Array<IStat>;
    height: number;
    weight: number;
    abilities: Array<IAbility>;
    gender_rate: number;
    egg_groups: Array<IEggGroup>;
};

export default IPokemon;