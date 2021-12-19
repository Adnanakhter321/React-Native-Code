const initialState = {
    currentUser: [],
    cnic:[],
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
            case "ADD_CURRENT_USER":
                const{ data2 } = action.payload;
                console.log(data2, 'hi');
                return {
                    ...state,
                    currentUser: [data2, data2.uid]
                }
            default : return state;
        }
}

export default todoReducer;