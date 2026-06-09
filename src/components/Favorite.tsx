import type { FavoriteType } from "@/types";
import "./Favorite.css";
type Props = {
  favorite: FavoriteType;
  onClick: VoidFunction;
  onRemove: VoidFunction;
};

const Favorite = ({ favorite, onClick, onRemove }: Props) => {
  const { url, title } = favorite;

  return (
    <div className="favorite-item">
      <img src={url} alt={title} className="favorites-img" onClick={onClick} />
      <button className="remove-btn" onClick={onRemove}>
        Remover
      </button>
    </div>
  );
};

export default Favorite;
