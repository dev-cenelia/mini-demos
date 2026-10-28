import { useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function LikeButton() {
  const [isLike, setIsLike] = useState<boolean>(false);
  const handleChangeToggle = () => {
    setIsLike((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleChangeToggle}>
        {isLike ? (
          <>
            <FavoriteIcon />
            좋아요
          </>
        ) : (
          <>
            <FavoriteBorderIcon />
            아직 좋아요를 누르지 않았습니다.
          </>
        )}
      </button>
    </div>
  );
}
