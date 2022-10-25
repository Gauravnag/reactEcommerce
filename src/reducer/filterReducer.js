
const filterReducer = (state, action) => {
    switch(action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                // [...] =  Here it write as we don't want to change the original data. This will create the duplicate copy
                ...state,
                filter_product: [...action.payload],
                all_product: [...action.payload],
            }

        case "SET_GRID_VIEW":
            return{
                ...state,
                grid_view: true,
            }

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            }

        // To Get Data from DropDown Menu
        case "SET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let user_value = userSortValue.options[userSortValue.selectedIndex].value;
            // console.log(user_value);
            return {
                ...state,
                // sort_value: user_value,
                sort_value: action.payload,
            }

        // To Sort the Product based on value selected Dropdown Menu
        case "SORTING_PRODUCTS":
            let newSortData;
            // let tempSortProduct = [...action.payload];
                // OR
            let { filter_product } = state;
            let tempSortProduct = [...filter_product]

            // if(state.sort_value === "a-z") {
            //     newSortData = tempSortProduct.sort((a,b) => {
            //         return a.name.localeCompare(b.name);
            //     })
            // }

            // if(state.sort_value === "z-a") {
            //     newSortData = tempSortProduct.sort((a,b) => {
            //         return b.name.localeCompare(a.name);
            //     })
            // }

            // if(state.sort_value === "lowest") {
            //     const sortingProducts = (a,b) => {
            //         return a.price - b.price;
            //     }
            //     newSortData = tempSortProduct.sort(sortingProducts);
            // }

            // if(state.sort_value === "highest") {
            //     const sortingProducts = (a,b) => {
            //         return b.price - a.price;
            //     }
            //     newSortData = tempSortProduct.sort(sortingProducts);
            // }

            // SHORTHAND Function for above (if condition)
            const sortingProducts = (a,b) => {
                if(state.sort_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }
                if(state.sort_value === "z-a") {
                    return b.name.localeCompare(a.name);
                }
                if(state.sort_value === "lowest") {
                    return a.price - b.price; 
                }
                if(state.sort_value === "highest") {
                    return b.price - a.price;
                }
            }

            newSortData = tempSortProduct.sort(sortingProducts);

            return {
                ...state,
                filter_product: newSortData,
            }
        
        default: 
            return state;
    }
}
export default filterReducer;