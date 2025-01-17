import { RatingRounding, RatingScore } from '../shared/utils/textUtils';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  poster: string;
  rating?: number;
  name: string;
  seriesLength?: number;
}

const MovieCard = ({ id, poster, rating, name, seriesLength }: MovieCardProps) => {
  function declOfNum(value: number, words: any[]) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
  }
  return (
    <Link to={`/movie/${id}`}>
      <div className='relative w-[200px] h-[320px] rounded-lg border-1 border-white overflow-hidden '>
        <img src={poster} alt='film image' className='rounded-lg object-cover w-full h-[380px] mb-3 md:mb-0' />

        {rating && (
          <span
            className='px-3 py-2 rounded-xl text-white absolute left-2 top-2'
            style={{ backgroundColor: RatingScore(rating) }}
          >
            {RatingRounding(rating)}
          </span>
        )}
      </div>
      <div className='text-[#eae7dc]  leading-6 mt-1 font-semibold w-[190px]'>
        <p className='text-white line-clamp-2'>{name}</p>
        {seriesLength !== null && seriesLength !== undefined ? (
          <span className=' text-[#707070]  text-sm '>
            {seriesLength} {declOfNum(seriesLength, ['эпизод', 'эпизода', 'эпизодов'])}
          </span>
        ) : (
          <span className=' text-[#707070] text-sm '> Фильм</span>
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
