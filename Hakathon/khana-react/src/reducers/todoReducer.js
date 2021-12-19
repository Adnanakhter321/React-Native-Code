const initialState = {
    foodrequests:[],
}


const todoReducer = (state = initialState , action) => {
        switch(action.type) {
            case "ADD_FOOD_REQUEST":
                const{ data } = action.payload;
                return {
                    ...state,
                    foodrequests:[
                    ...state.foodrequests,
                    data
                    ]
                }
            default : return state;
        }
}

export default todoReducer;