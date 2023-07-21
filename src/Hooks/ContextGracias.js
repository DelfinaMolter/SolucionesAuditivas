import {  createContext, useContext, useMemo, useState } from "react";

const initialState = {
    gracias: false
}

const ModalContext = createContext(undefined);

export const ModalGraciasContextProvider = ({children})=>{
    const [gracias, setGracias] = useState(initialState.gracias);

    const value = useMemo(
        () => ({
            gracias,
            setGracias
        }),
        [gracias]
    );
    return(
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
};

const useGracias = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalGraciasContextProvider');
    }
    return context;
};

export default useGracias;