// const initialState = {
//     user : null,
//     parents : null,
//     testResult : {},
//     results : null
// }

// const parentReducer = (state=initialState , action) => {
//     switch (action.type){
//         case 'LOGIN':
//             return {
//                 ...state,
//                 user : action.user,
                
//             }
//         case 'REGISTER':
//             return {
//                 ...state,
//                  user : action.payload,
//             }
//         case 'TEST_RESULT' : 
//             return {
//                 ...state,
//                 results : state.results.concat(action.payload),
//                 testResult : action.payload,

//             }
//         case 'USER_RESULTS' :
//             return {
//                 ...state,
//                 results : action.payload
//             }
//         case 'LOGOUT':
//             return {
//                 ...state,
//                 results : null,
//                 testResult : {}
//             }
//         default :
//             return state
//     }
// }

// export default parentReducer