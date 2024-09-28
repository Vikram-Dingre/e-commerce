import React, { useEffect, useState, createContext, useReducer } from "react";

export let shopContext = createContext([]);

function reducer(currItems, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [action.payload, ...currItems];

    case "DELETE_ITEM":
      return currItems.filter((item) => {
        return item.id !== action.payload.id;
      });

    default:
      return currItems;
  }
}

const ShopContextProvider = ({ children }) => {
  let [cartItems, dispatchCartItems] = useReducer(reducer, []);
  const [products, setProducts] = useState([]);
  const [selectedTab, setSelectedTab] = useState("home");
  const [inputValue, setInputValue] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [isDuplicate,setIsDuplicate] = useState(false)
  const [isAdded,setIsAdded] = useState(false)


  // console.log(cartItems);

  function fetchData() {
    // console.log("inside fetchdata");
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log([data]);
          data.products.map(item =>{
             let globalQuantity = item?.quantity ? item?.quantity : 1
            item.quantity=globalQuantity
              // console.log(item)
          })
          setProducts(data.products)
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleChange(value) {
    setInputValue(value);
    console.log(inputValue);
  }

  function addToCart(id, thumbnail, title, price, quantity ,description , category) {
    const actionObj = {
      type: "ADD_TO_CART",
      payload: {
        id,
        thumbnail,
        title,
        price,
        quantity,
        description,
        category
      }
    };

    // console.log(actionObj);

    if (cartItems.length) {
      let filtered = cartItems.filter((item) => {
        if (item.id === id) {
          return item;
        }
      });
      if (filtered.length) {
        console.log("item is already in your cart...");
        setIsDuplicate(true)
        // console.log(isDuplicate);
        
        // cartItems.map((item) => {
        //   if (item.id === id) {
        //     item.quantity++;

        //   }
        // });

        // products.map(item=>{
        //   if (item.id === id) {
        //     item.quantity++;
        //   }
        // })
        //it will give error because the quantity is not avilable in product->product
        
        /*
         OR
         
        instead of incrementing quantity here , i can also prevent the re-adding of the CartItem 
        (show notification
 -->--> Ooops!!! Item is Already Exist in your cart
        )

        //manage the state 

        //if item is exists then change the state to true

        //then show the notification 

        //notification can close by clicking on the cross icon or the body of page(clicking outside of the notification)
          

        //based on this state manage the cursor of the product button (if exists -> cursor-not-allowed)
         
         */
      } else {
        setIsDuplicate(false)
        dispatchCartItems(actionObj);
      }
    } else dispatchCartItems(actionObj);
  }

  function handleDelete(id) {
    console.log(id);

    dispatchCartItems({
      type: "DELETE_ITEM",
      payload: {
        id,
      },
    });
  }

  return (
    <div>
      <shopContext.Provider
        value={{
          products,
          selectedTab,
          setSelectedTab,
          inputValue,
          setInputValue,
          handleChange,
          addToCart,
          cartItems,
          totalPrice,
          setTotalPrice,
          handleDelete,
          isDuplicate,
          setIsDuplicate,
         isAdded,
         setIsAdded
        }}
      >
        {children}
      </shopContext.Provider>
    </div>
  );
};

export default ShopContextProvider;
