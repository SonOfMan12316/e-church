import React, { useState } from "react";
import { Arrowback, Folder, Settings, Star, StarOutline } from "./icons";

interface HeaderProps {
  title: string;
  onBack: () => void;
  onToggleFav: () => void;
  onToggleSetting: () => void;
}
const ls = localStorage;
const favs: string[] = JSON.parse(ls.getItem("favourites") || "[]");

const Header: React.FC<HeaderProps> = ({
  title,
  onBack,
  onToggleFav,
  onToggleSetting,
}) => {
  const [favourites, setFavourites] = useState(favs);

  const addFavourite = () => {
    const newFavourites = [...favourites, title];
    setFavourites(newFavourites);
    ls.setItem("favourites", JSON.stringify(newFavourites));
  };

  const removeFavourite = () => {
    const newFavourites = [...favourites];
    const index = newFavourites.indexOf(title);
    newFavourites.splice(index, 1);
    setFavourites(newFavourites);
    ls.setItem("favourites", JSON.stringify(newFavourites));
  };

  return (
    <div className="header">
      {title === "Weather Chronicle" ? (
        <Settings
          titleAccess="Settings"
          className="left-icon icon"
          onClick={onToggleSetting}
        />
      ) : (
        <Arrowback className="left-icon icon" onClick={onBack} />
      )}
      <div>
        <p className="header-title">{title}</p>
      </div>
      {title === "Weather Chronicle" ? (
        <Folder
          titleAccess="Favourite Cities"
          className="right-icon icon"
          onClick={onToggleFav}
        />
      ) : favourites.some((name) => name === title) ? (
        <StarOutline
          titleAccess="Remove from favourites"
          className="right-icon active icon"
          onClick={removeFavourite}
        />
      ) : (
        <Star
          titleAccess="Add to favourites"
          className="right-icon icon"
          onClick={addFavourite}
        />
      )}
    </div>
  );
};

export default Header;
