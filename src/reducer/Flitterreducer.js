const Flitterrreducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);

      let maxPrice = Math.max(...priceArr);
   
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "GRIED_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "List_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "SORT_VALUE":
      // let userSortVlue = document.getElementById('sort');
      // let sort_value=  userSortVlue.options[userSortVlue.selectedIndex].value

      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempData =[...action.payload]

      const { filter_products, sorting_value } = state;
      let tempData = [...filter_products];

      // if(state.sorting_value === 'a-z') {
      //   newSortData = tempData.sort((a,b)=>
      //     a.name.localeCompare(b.name)
      //   );
      // }

      // if(state.sorting_value==='z-a'){
      //   newSortData = tempData.sort((a,b)=>
      //     b.name.localeCompare(a.name)
      //   );
      // }

      // if(state.sorting_value==='lowest'){

      //   const SortingProducts = (a,b)=>{
      //    return a.price - b.price;
      //   }

      //   newSortData = tempData.sort(SortingProducts)
      // }

      // if(state.sorting_value==='highest'){

      //   const SortingProducts = (a,b)=>{
      //    return b.price - a.price;
      //   }

      //   newSortData = tempData.sort(SortingProducts)
      // }

      const SortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
      };

      newSortData = tempData.sort(SortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FLITER_PRODUCTS":
      let { all_products } = state;

      let tempProducts = [...all_products];

      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempProducts = tempProducts.filter((curElm) => {
          return curElm.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempProducts = tempProducts.filter(
          (curElem) => curElem.category === category
        );
      }

      if (company !== "all") {
        tempProducts = tempProducts.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }

      if (color !== "all") {
        tempProducts = tempProducts.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }

      if (price === 0) {
        tempProducts = tempProducts.filter((curElem) => curElem.price == price);
      } else {
        tempProducts = tempProducts.filter((curElem) => curElem.price <= price);
      }

      return {
        ...state,
        filter_products: tempProducts,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };

    default:
      return state;
  }
};

export default Flitterrreducer;
