export const cnicData = (data) => {
    return {
        type: 'ADD_CNIC',
        payload: {
            data: data,
        }
    }
}
export const currentUser = (data) => {
    return {
        type: 'ADD_CURRENT_USER',
        payload: {
            data2: data,
        }
    }
}
export const AcceptedFood = (data) => {
    return {
        type: 'ADD_ACCEPTED_FOOD',
        payload: {
            data3: data,
        }
    }
}