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