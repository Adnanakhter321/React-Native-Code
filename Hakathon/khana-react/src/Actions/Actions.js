export const FoodRequest = (data) => {
    return {
        type: 'ADD_FOOD_REQUEST',
        payload: {
            data: data,
        }
    }
}