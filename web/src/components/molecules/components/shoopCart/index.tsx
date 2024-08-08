import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Button, Icon, Modal } from '../../..';
import selectorFavorites from '../../../../services/recoil/movies/favorites';

import type { Movie } from '../../../../services/themoviedb';
import type { FavoritesProps } from '../../../../services/recoil/movies/favorites';

type Props = {
  className?: string;
};

const ShoppingCart = ({ className }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [favorites, setFavorites] = useRecoilState<FavoritesProps[]>(selectorFavorites);

  const visibility = () => favorites.length >= 1 && setIsVisible(!isVisible);
  const removeItem = (id: Movie['id']) => {
    const newCart = favorites.filter((item: FavoritesProps) => item.id !== id);
    setFavorites(newCart);
  };

  return (<div className={`flex flex-col border ${className}`}>
    <Button onClick={visibility}>
      <Icon name="cart" size="sm" type={favorites.length >= 1 ? 's' : ''} />
    </Button>
    <Modal className={`mt-10 -mr-36 ${isVisible ? 'block' : 'hidden'} bg-blue`}>
      <ul className="flex flex-col">
        {favorites.map(({ id, title }: FavoritesProps) => (
          <li key={id} className="justify-between w-full p-0 align-middle border-b">
            <Button onClick={() => removeItem(id)}>
              <Icon name="trash" size="xs" />
            </Button>
            {title}
          </li>
        ))}
      </ul>
      <Button onClick={() => setFavorites([])} $primary>Remove All</Button>
    </Modal>
  </div>)

};

export default ShoppingCart;