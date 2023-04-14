import { Actions,AppState, StarWarsAction } from "../types/store";

export const reducer = (currentAction: Actions,currentState:AppState): AppState => {
    const {action, payload} = currentAction;
    console.log(action,payload);
    switch (action) {
        
        case StarWarsAction.GET:
            return{
                ...currentState,
                character:payload
            }
            default:
                return currentState;
    }
}