import { initial } from "lodash"
import { createStore } from "redux"


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'




//reducer
const initialState = {
    user : null,
    parents : null,
    testResult : {},
    results : []
}

function reducer (state=initialState , action) {
    switch (action.type){
        case 'LOGIN':
            return {
                ...state,
                user : action.user,
            }
        case 'REGISTER':
            return {
                ...state,
                 user : action.payload,
            }
        case 'TEST_RESULT' : 
            return {
                ...state,
                results : state.results.concat(action.payload),
                testResult : action.payload,
            }
        case 'USER_RESULTS' :
            return {
                ...state,
                results : action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                results : [],
            }
        default :
            return state
    }
}


//persist
const persistConfig = {
    key: 'root',
    storage,
  }
  
  
const persistedReducer = persistReducer(persistConfig, reducer)



  //actions
export const loginAction = (email,password) => ({
    type : 'LOGIN',
    payload : {email,password}
})
export const registerAction = (email,password) => ({
    type : 'REGISTER',
    payload : {email,password}
    })

export const quizResults = (testResult) => ({
    type : 'TEST_RESULT',
    payload : testResult
    })

export const userResults = (userResults) => ({
    type:'USER_RESULTS',
    payload:  userResults
    })
export const logout = () =>({
    type : 'LOGOUT'
    })




    export default () => {
        let store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        let persistor = persistStore(store)
        return { store, persistor }
      }