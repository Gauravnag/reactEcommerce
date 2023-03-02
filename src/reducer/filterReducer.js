import { getValue } from "@testing-library/user-event/dist/utils"

const filterReducer = (state, action) => {
    switch(action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curr) => {
                return curr.price;
            })
            
            // 1st Way
            // let maxPrice = Math.max.apply(null, priceArr);
            // console.log(maxPrice);

            // 2 Way
            // let maxPrice = priceArr.reduce((initialVal, currVal) => {
            //     return Math.max(initialVal, currVal)
            // }, 0)
            // console.log(maxPrice)

            // 3 Way
            let maxPrice = Math.max(...priceArr);

            return {
                // [...] =  Here it write as we don't want to change the original data. This will create the duplicate copy
                ...state,
                filter_product: [...action.payload],
                all_product: [...action.payload],
                filters: {
                    ...state.filters,
                    maxPrice,
                    price: maxPrice,
                }
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

        case "UPDATE_FILTER_VALUE":
            const {name, value} = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        case "FILTER_PRODUCTS":
            let {all_product} = state;
            let tempFilterProduct = [...all_product];
            const {text, category, company, color, price} = state.filters;

            if(text) {
                tempFilterProduct = tempFilterProduct.filter((curr) => {
                    return curr.name.toLowerCase().includes(text);
                })
            }

            if(category !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curr) => {
                    return curr.category === category;
                })
            }

            if(company !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curr) => {
                    return curr.company.toLowerCase() === company.toLowerCase();
                })
            }

            if(color !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curr) => {
                    return curr.colors.includes(color);
                })
            }

            if(price === 0) {
                tempFilterProduct = tempFilterProduct.filter((curr) => {
                    return curr.price === price;
                });
            } else {
                tempFilterProduct = tempFilterProduct.filter((curr) => {
                    return curr.price <= price;
                });
            }

            return {
                ...state,
                filter_product: tempFilterProduct,
                }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.minPrice,
                }
            }
        
        default: 
            return state;
    }
}
export default filterReducer;