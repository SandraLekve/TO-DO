import { useState } from "react";

const useLocalStorgae = <TState>(key: string, newState: TState)=> {
    //const [memState, setMemState]=useState<TState>(() => {})
    const stateString = window.localStorage.getItem(key)
    const state = stateString? JSON.parse(stateString): newState;
    
    const updateState = (state: TState) => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }
    return [state, updateState]
}

export default useLocalStorgae;