import { Actions, AppState, Observed,} from "../types/store";
import { reducer } from "./reducer";

export let appState: AppState ={
    character:[]
}

let observed: Observed[] =[];

export const dispatch =(action:Actions) =>{
    const clone = JSON.parse(JSON.stringify(appState))
    appState = reducer(action,clone);
    observed.forEach(s => s.render());
}

export const addObserved = (ref: Observed) => {observed = [...observed,ref]};
