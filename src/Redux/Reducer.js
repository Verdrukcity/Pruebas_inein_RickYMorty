import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    charactersInfo:{},
    character:{}
}

const reducerSlice = createSlice({
    name:"rickNMorty",
    initialState: initialState,
    reducers:{
            info(state, actions){
                state.charactersInfo = actions.payload
                return state
            },
            getCharacterInfo(state, actions){
                const info =state.charactersInfo.results.find(e=> e.id === actions.payload );
                state.character = info
                return state
            }
        }
    }
)
export const {info, getCharacterInfo} = reducerSlice.actions
 export default reducerSlice.reducer