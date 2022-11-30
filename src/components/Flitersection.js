import React from "react";
import styled from "styled-components";
import { useFliterContext } from "../Context/FliterContext";
import {FaCheck} from 'react-icons/fa'
import {Button} from'../styled/Button'
const Flitersection = () => {
  const {
    filters: { text, color , price, minPrice, maxPrice},
    updateFilterValue,
    all_products,
    clearFilter,
  } = useFliterContext();

  const getuniqData = (data, property) => {
    let newVal = data.map((currElm) => {
      return currElm[property];
    });

    if (property === "colors") {
      // return (newVal=['all',...new Set([].concat(...newVal))])

      // second way doing this thing

      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categaryData = getuniqData(all_products, "category");
  const companyData = getuniqData(all_products, "company");
  const colorsData = getuniqData(all_products, "colors");

  return (
    <Wrraper>
      <div className="flitter_search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="fliter_category">
        <h3>Category</h3>
        <div>
          {categaryData.map((currElm, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={currElm}
                onClick={updateFilterValue}
              >
                {currElm}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}
          >
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={updateFilterValue}>
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
       
      </div>


      <div className="fliter_price">
        <p>price={price}</p>

        <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue}/>
      </div>

      <div className="clear_fliter">
      <Button onClick={clearFilter}>{''}Clear Filter</Button>
      </div>
    </Wrraper>
  );
};

const Wrraper = styled.section``;

export default Flitersection;
