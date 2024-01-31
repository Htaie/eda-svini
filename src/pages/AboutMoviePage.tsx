import { Link, useParams } from 'react-router-dom';
import { MainBtn } from '../components/UI/buttons/MainBtn.tsx';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FilmInfo from '../components/MovieDetails/FilmInfo.tsx';
import DubbingActorsInfo from '../components/MovieDetails/DubbingActorsInfo.tsx';
import ActorsInfo from '../components/MovieDetails/ActorsInfo.tsx';
import { useEffect, useState } from 'react';
import { apiKey, apiUrl } from '../constants.ts';
import { CircularProgress } from '@mui/material';

const AboutMoviePage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${apiUrl}movie/${id}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'X-API-KEY': apiKey,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []);
  if (data.length === 0 || !data) {
    return (
      <div className="w-full h-full flex justify-center items-center bg-black">
        <CircularProgress sx={{ color: 'white' }} />
      </div>
    );
  }

  console.log(id);
  return (
    <div className="bg-black">
      <div className="container mx-auto text-white">
        <div className=" flex">
          <div>
            <img src={data.poster.url} alt="film image" className="w-[300px] h-[400px] mt-4 mb-4"></img>
          </div>
          <video src={data.videos.trailers[0]}></video>
          <div className="flex flex-col ml-[50px]">
            <h1 className="text-4xl font-bold mt-4 mb-[40px]">{data.name}</h1>
            <div className="mb-6">
              <MainBtn
                text="Посмотреть трейлер"
                to={''}
                onClick={() => {
                  console.log('Click');
                }}
              ></MainBtn>
              <MainBtn
                text={<MoreHorizIcon />}
                to={''}
                onClick={() => {
                  console.log('Click');
                }}
              ></MainBtn>
            </div>
            <h1 className="text-4xl font-bold">О фильме</h1>
            <FilmInfo data={data} />
          </div>
          <div className="mt-4 ml-[40px]">
            <p className="font-bold text-2xl">{data.rating.kp}</p>
            <p className="mb-2">Количество оценок</p>
            <MainBtn
              text={'Оценить фильм'}
              onClick={() => {
                console.log('Liked');
              }}
              style={{ marginBottom: '20px' }}
            />
            <div className="mb-[200px]">
              <Link to={''} className="transition-colors hover:text-red-500">
                Количество рецензий
              </Link>
            </div>
            <p className="font-bold">В главных ролях</p>
            <ActorsInfo />
            <Link to={''} className="text-red-500">
              Количество актеров
            </Link>
            <p className="font-bold mt-[30px]">Роли дублировали</p>
            <DubbingActorsInfo />
            <Link to={''} className="text-red-500">
              Количество актеров дубляжа
            </Link>
            <img
              src="https://m.the-flow.ru/uploads/images/origin/15/81/73/83/93/abc2e62.png"
              alt="nominations"
              className="w-[120px] h-[100px]"
            ></img>
          </div>
        </div>
        <p className=" mt-20" style={{ maxWidth: '800px' }}>
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default AboutMoviePage;
