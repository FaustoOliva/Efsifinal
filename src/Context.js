import React, { useContext } from "react";

export const initialState = {
    producto: []       //array de platos del menu
};

export const ActionTypes = {                         //SETS
    SetProducto: 'SET_PRODUCTO',
    SetEliminar: 'SET_ELIMINAR'
};

export const reducer = (state = {}, action) => {
    switch (action.type) {
    case ActionTypes.SetProducto:
        return ({
            ...state,
            producto: [...state.producto, action.value],
        });
    case ActionTypes.SetEliminar:
        return ({
            ...state,
            producto: state.producto.filter((item) => item.id !== action.value),  //elimina el plato del array de platos
        });
default:
    return state;
    
}
};

export const initialContext = {
    contextState: initialState,
    setContextState: () => {},
};

const Cont = React.createContext(initialContext);


export function ContextProvider({children, initial = initialState}) {
    const [state, dispatch] = React.useReducer(reducer, initial);


    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{contextState, setContextState }}>{children}</Cont.Provider>   // devuelve el provider para que se pueda usar en el resto de la app
}

export const useContextState = () => useContext(Cont);