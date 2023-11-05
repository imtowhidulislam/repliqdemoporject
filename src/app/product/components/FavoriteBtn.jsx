import {useState} from "react";
import {HiOutlineHeart,HiHeart} from "react-icons/hi"

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
        className="grid w-8 h-8 rounded-full place-items-center backdrop-blur-sm "
      >
        {favorite ? (
          <HiHeart className="text-2xl text-denger" />
        ) : (
          <HiOutlineHeart className="text-2xl text-primary" />
        )}
      </button>
    </>
  );
};

export default FavoriteBtn;
