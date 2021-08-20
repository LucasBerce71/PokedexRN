export type IDefaultEvolution = {
    name: string;
    url: string;
    min_level: string;
    image: string;
};

export type IBaseForm = {
    name: string;
    image: string;
}

export type IEvolutionChain = {
    base_form: IBaseForm;
    first_evolution: IDefaultEvolution;
    second_evolution: IDefaultEvolution;
}

export default IEvolutionChain;