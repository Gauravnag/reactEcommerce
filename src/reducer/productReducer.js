
const productReducer = (state, action) => {

    switch(action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "API_ERROR":
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        case "SET_API_DATA":
            const featureData = action.payload.filter((curElem) => {
                return curElem.featured === true
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData,
            }
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            }
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
            }
        case "SET_SINGLE_ERROR": 
            return {
                ...state,
                isSingleLoading: false,
            }
        default:
            return state;
    }

    return state;
}

export default productReducer;