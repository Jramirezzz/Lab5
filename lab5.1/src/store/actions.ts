import getapi from "../services/data";
import { GetStarWarsAction,StarWarsAction } from "../types/store";

export const getCharacter = async (): Promise<GetStarWarsAction> => {
    const war = await getapi();
    return{
        action: StarWarsAction.GET,
        payload: war
    }
}