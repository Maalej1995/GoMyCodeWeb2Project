export const basketReducer = (state = [], action) => {
    switch (action.type) {
        case "DELETE":
            return state.filter((item) => item.id !== action.payload.id)
        case "ADD":
            return [...state, action.payload.manufacturer]
        default:
            return state
    }
}