import {  createContext, useContext, useMemo, useState } from "react";

const initialState = {
    modal: false
}

const ModalContext = createContext(undefined);

export const ModalContextProvider = ({children})=>{
    const [modal, setModal] = useState(initialState.modal);

    const value = useMemo(
        () => ({
            modal,
            setModal
        }),
        [modal]
    );
    return(
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
};

const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalContextProvider');
    }
    return context;
};

export default useModal;