const initialState = {
    currentUser: [],
    cnic:[],
    AcceptedFood:[]
}


const todoReducer = (state = initialState , action) => {
        switch(action.type) {
            case "ADD_CNIC":
                const{ data } = action.payload;
                return {
                    ...state,
                   cnic:[
                       ...state.cnic,
                       data
                   ]
                }
            case "ADD_ACCEPTED_FOOD":
                const{ data3 } = action.payload;
                return {
                    ...state,
                    AcceptedFood:[
                       ...state.AcceptedFood,
                       data3
                   ]
                }
            case "ADD_CURRENT_USER":
                const{ data2 } = action.payload;
                return {
                    ...state,
                    currentUser:[
                       data2
                   ]
                }
            default : return state;
        }
}

export default todoReducer;