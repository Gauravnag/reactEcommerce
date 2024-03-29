import styled from "styled-components";
import { useFilterContext } from "../context/filtercontext";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../Helper/FormatPrice";
import { Button } from "../styles/Button";

const FilterSection  = () => {
  const {filters: {text, category, color, price, minPrice, maxPrice}, 
          updateFilterValue, 
          all_product,
          clearFilters,
        } = useFilterContext();

  // We need unique Data
  const getUniqueData = (data, property) => {
    let newVal = data.map((curr) => {
      return curr[property];
    });

    if(property === "colors") {
      // return newVal = ["All", ...new Set([].concat(...newVal))];
      newVal = newVal.flat();
    }
    
    return (newVal = ["all", ...new Set(newVal)]);
  }

  // We need unique Data- Create unique function
  const categoryOnlyData = getUniqueData(all_product, "category");
  const companyOnlyData = getUniqueData(all_product, "company");
  const colorsData = getUniqueData(all_product, "colors");

    return(
        <Wrapper>
            <div className="filter-search">
              <form onSubmit={(e) => e.preventDefault() }>
                <input 
                  type="text" 
                  name="text"
                  value={text} 
                  onChange={updateFilterValue} 
                  placeholder="SEARCH"
                />
              </form>
            </div>

            <div className="filter-category">
              <h3><b>Category</b></h3>
              <div>
                {categoryOnlyData.map((curr, index) => {
                  return <button 
                            type="button" 
                            key={index}
                            name="category"
                            value={curr}
                            onClick={updateFilterValue}
                            className={curr === category ? "active" : ""}
                            >
                          {curr}
                        </button>
                })}
              </div>
            </div>

            <div className="filter-company">
                <h3><b>Company</b></h3>
                <form action="#">
                  <select 
                    name="company" 
                    id="company" 
                    className="filter-company--select" 
                    onClick={updateFilterValue}>
                      {
                        companyOnlyData.map((curr, index) => {
                          return <option 
                                    key={index} 
                                    name="company"
                                    value={curr}
                                    >
                              {curr}
                          </option>
                        })
                      }
                  </select>
                </form>
            </div>

            <div className="filter-colors colors">
                <h3><b>Colors</b></h3>
                <div className="filter-colors-style">
                  {
                    colorsData.map((curColor, index) => {
                      if(curColor === "all") {
                        return <button 
                                type="button"
                                key={index}
                                className="color-all--style"
                                value={curColor}
                                name="color"
                                onClick={updateFilterValue}
                                > 
                                  All 
                                </button>
                      }
                      return <button 
                                type="button"
                                key={index}
                                className={ color === curColor ? "active btnStyle" : "btnStyle" }
                                style={{ backgroundColor: curColor }}
                                value={curColor}
                                name="color"
                                onClick={updateFilterValue}
                                > 
                                  { color === curColor ? <FaCheck className="checkStyle" /> : null } 
                                </button>
                    })
                  }
                </div>
            </div>

          <div className="filter_price">
            <h3><b>Price</b></h3>
            <p> <FormatPrice myprice={price} /> </p>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={updateFilterValue}
             />
          </div>

          <div className="filter-clear">
            <Button className="btn" onClick={clearFilters}>Clear Filter</Button>
          </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;