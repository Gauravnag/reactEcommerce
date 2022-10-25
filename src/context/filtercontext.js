import { createContext, useContext, useEffect, useReducer } from "react";
import {useProductContext} from "./productcontext";
import filterReducer from "../reducer/filterReducer"

const FilterContext = createContext();

const initialState = {
    filter_product: [],
    all_product: [],
    grid_view: true,
    sort_value: "lowest",
}

export const FilterProviderContext = ({children}) => {
    const {products} = useProductContext();
    // console.log("Filter Context ", products)

    const [state, dispatch] = useReducer(filterReducer, initialState);

    //Set Grid View on Click
    const setGridView = () => {
        dispatch({ type: "SET_GRID_VIEW" })
    }

    // Set List View on Click
    const setListView = () => {
        dispatch({ type: "SET_LIST_VIEW" })
    }

    // Sorting Lowest, Higest, a-z, z-a products OR to sort product
    useEffect(() => {
        // dispatch({ type: "SORTING_PRODUCTS", payload: products });
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [state.sort_value])

    // Sorting Function
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "SET_SORT_VALUE", payload: userValue })
    }

    // to load all products for grid & list view
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    return (
    <FilterContext.Provider value={{...state, setGridView, setListView, sorting }}>
        {children}
    </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}