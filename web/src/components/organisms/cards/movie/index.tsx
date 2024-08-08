import { dateFormat } from "../../../../utils/_format";
import { Button, Icon, Link } from "../../../";
import { Movie } from "../../../../services/themoviedb";

type CardMovieProps = Movie & {
  primaryAction?: (ev?: any) => void;
};
const CardMovie = ({
  id,
  title,
  poster_path,
  release_date,
  primaryAction,
}: CardMovieProps) => {
  const release = dateFormat(release_date);
  const link = `/movie/${id}-${title.replace(/ /g, "-").toLowerCase()}`;

  return (
    <li className="m-4 transition-shadow duration-300 ease-in-out rounded-md shadow-md group/item bg-slate-300 hover:shadow-xl hover:shadow-red-500">
      <Button
        data-role="tooltip"
        className="z-30 w-full rounded-bl-md rounded-tr-md"
        aria-label="Add Favorites"
        onClick={primaryAction}
      >
        <Icon name="image-add" size="sm" />
      </Button>
      <div className="h-auto rounded-md w-44">
        <Link to={link} title={title}>
          <img
            loading="lazy"
            src={`https://media.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
            srcSet={`https://media.themoviedb.org/t/p/w220_and_h330_face${poster_path} 1x, https://media.themoviedb.org/t/p/w440_and_h660_face${poster_path} 2x`}
            alt={title}
          />
        </Link>
      </div>
      <div className="text-center">
        <h2>
          <Link to={link} title={title}>
            {title}
          </Link>
        </h2>
        <p>{release}</p>
      </div>
    </li>
  );
};

export default CardMovie;
