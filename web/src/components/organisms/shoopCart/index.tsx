import { useRecoilState } from 'recoil';
import { Button, Icon } from '../../';
import selectorFavorites from '../../../services/recoil/movies/favorites';

import type { Movie } from '../../../services/themoviedb';
import type { FavoritesProps } from '../../../services/recoil/movies/favorites';

const ShoppingCart = () => {
  const [favorites, setFavorites] = useRecoilState<FavoritesProps[]>(selectorFavorites);

  const removeItem = (id: Movie['id']) => {
    const newCart = favorites.filter((item: FavoritesProps) => item.id !== id);
    setFavorites(newCart);
  };

  return (
    <div className={`absolute top-0 right-0 m-4 rounded-lg w-72 drop-shadow-2xl bg-gray ${favorites.length === 0 ? 'hidden' : 'block'}`}>
      <ul className="flex flex-col">
        {favorites.map(({ id, title }: FavoritesProps) => (
          <li key={id} className="justify-between w-full p-0 align-middle border-b">
            <Button onClick={() => removeItem(id)} className="hover:text-ocre">
              <Icon name="trash" size="xs" />
            </Button>
            {title}
          </li>
        ))}
      </ul>
      <Button onClick={() => setFavorites([])} $primary>Remove All</Button>
    </div>
  );
};

export default ShoppingCart;