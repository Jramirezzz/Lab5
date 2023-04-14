import { Star } from "./data";
export type Observed = ({ render:() => void} & HTMLElement);

export type AppState ={
    character: interStar[]
}

export enum StarWarsAction {
    "GET" = "GET",
}

export interface GetStarWarsAction{
    action:StarWarsAction.GET,
    payload: interStar[]
}

export type Actions = GetStarWarsAction;