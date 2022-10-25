import styled from "styled-components";
import { BsGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filtercontext";

const Sort = () => {
    const {grid_view, setGridView, setListView, filter_product, sorting} = useFilterContext();
    return(
        <Wrapper className="sort-section">
            {/* 1st column = Toggle active class betw List & Grid View */}
            <div className="sorting-list--grid">
                <button className={grid_view ? "sort-btn active" : "sort-btn" } onClick={setGridView} >
                    <BsGridFill className="icon" />
                </button>
                <button className={grid_view ? "sort-btn" : "sort-btn active" } onClick={setListView}>
                    <BsList className="icon" />
                </button>
            </div>
            {/* 2nd column = Showing Total NUmber of Products */}
            <div className="product-data">
                <p> {`${filter_product.length} Products Available`} </p>
            </div>
            {/* 3rd column */}
            <div className="sort-selection">
                <form>
                    <label htmlFor="sort"></label>
                    <select name="sort" id="sort" onChange={sorting}>
                        <option value="highest">Highest</option>
                        <option value="lowest">Lowest</option>
                        <option value="a-z">Price(a-z)</option>
                        <option value="z-a">Price(z-a)</option>
                    </select>
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;