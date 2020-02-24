
const reducer = (state, action) => {

    switch(action.type){
        case 'SET_FAVORITE':
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }

        case 'LOGIN_REQUEST':
                return {
                    ...state,
                 user : action.payload,
            }

        case 'LOGOUT_REQUEST':
                return {
                    ...state,
                 user : action.payload,
            }

        case 'REGISTER_REQUEST':
                return {
                ...state,
                 user : action.payload,
        }

        case 'CASE_VIDEO_SOURCE':
            return {
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload)) 
                || state.originals.find(item => item.id === Number(action.payload))
                || []
            }

        case 'GET_VIDEO_SEARCH':
            if (action.payload === '' || !action.payload) return { ...state, search: [] };
                return {
                  ...state,
            search: state.trends.concat(state.originals).filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase())),
        };
        
        default: 
            return state;
    }
}

export default reducer;