import { createContext, useContext, useReducer } from "react"

const inicialState={
    data:{
        name:'',
        email:'',
        address:'',
        phone:'',
        msg:''
    },
    error:{
        name:false,
        email:false,
        address:true,
        phone:false,
        msg: false
    }
}

const contextReducer = (state, action)=>{
    switch(action.type){
        case 'contact':
            return{
                ...state,
                data: { ...state.data, ...action.payload }
            }
        case 'error':
            return{
                ...state,
                error: { ...state.error, ...action.payload }
            }
        case 'reset':
            return inicialState
        default:
            return state
    }
}

export const ContextForm = createContext([])

export const ContextProvider = ({children})=>{
    const [store,dispatch] = useReducer(contextReducer, inicialState)
    return(
        <ContextForm.Provider value={[store,dispatch]}>
            {children}
        </ContextForm.Provider>
    )
}

export const useStore =()=>useContext(ContextForm)[0]
export const useDispatch =()=>useContext(ContextForm)[1]