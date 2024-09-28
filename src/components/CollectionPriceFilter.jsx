import React from "react";

const CollectionPriceFilter = ({ price, handlePriceClick}) => {
 
  return (
    <div
      className="text-[16px] m-3 hover:border-l-2 hover:border-l-black hover:ml-4 transition-all duration-100"
      onClick={() => handlePriceClick(price)}
    >
      {price}
    </div>
  );
};

export default CollectionPriceFilter;
