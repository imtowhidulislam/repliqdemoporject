import React,{useState} from "react";
import {HiShoppingCart,HiOutlineHeart,HiHeart} from "react-icons/hi"

const FavoriteBtn = () => {
    const [favorite, setFavorite] = useState(false);

    // !! Toggle Favorite..
    const handleFavorite = () => {
      setFavorite(!favorite);
    }
    
  
  return (
    <>
      <button
        onClick={handleFavorite}
        className="grid h-8 w-8 place-items-center rounded-full bg-[#65646485] backdrop-blur-sm"
      >
        {favorite ? (
          <HiHeart className="text-2xl text-denger" />
        ) : (
          <HiOutlineHeart className="text-2xl text-nutral3" />
        )}
      </button>
    </>
  );
};

export default FavoriteBtn;
