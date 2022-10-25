import { useFilterContext } from "../context/filtercontext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
    const {filter_product, grid_view} = useFilterContext();
    // console.log(filter_product);

    if(grid_view === true) {
        return <GridView products={filter_product} />
    } else {
        return <ListView products={filter_product} />
    }

    return(
        <div>
            ProductList
        </div>
    )
}
export default ProductList;