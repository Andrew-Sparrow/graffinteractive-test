import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { HandySvg } from 'handy-svg';

import styles from './details.module.scss';
import { fetchLaunchesList } from '../../store/api-actions';
import iconArrowLeftSVG from '../../img/icons/Arrow_Left.svg';
import { removeLaunches } from '../../store/actions';
import { getShips } from '../../store/ships/selectors';
import { getLaunches, getIsLaunchesLoading } from '../../store/launches/selectors';
import { getIsShipsLoading } from '../../store/ships/selectors';
import { LoadingScreen } from '../loading-screen/loading-screen';

const IconArrowLeft = ({ onClick }) => (
  <HandySvg
    className={styles.button}
    src={iconArrowLeftSVG}
    width="24"
    height="24"
    onClick={onClick}
  />
);


const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const ships = useSelector(getShips);
  const launchNames = useSelector(getLaunches);
  const isShipsLoading = useSelector(getIsShipsLoading);
  const isLaunchesLoading = useSelector(getIsLaunchesLoading);

  const ship = ships.find((item) => item.id === id);
  const launchIDs = ship?.launches;

  useEffect(() => {
    if (launchIDs) {
      dispatch(fetchLaunchesList(launchIDs));
    }

    return () => {
      dispatch(removeLaunches());
    }
  }, [isShipsLoading]);

  return (
    <div className={styles.app}>
      <div className={styles.detail}>
        <Link
          to="/"
          className={styles.detail__button}
          type='button'
          onClick={() => console.log('first')}
        >
          <IconArrowLeft />
          Вернуться
        </Link>
        {
          isShipsLoading
            ? < LoadingScreen />
            : <>
              <h2 className={styles.detail__title}>{ship?.name}</h2>
              <div className={styles.detail__properties}>
                <div className={styles.detail_box}>
                  <p className={styles.detail__info}><span className={styles.detail__name}>Тип</span>{ship?.type}</p>
                  <p className={styles.detail__info}><span className={styles.detail__name}>Вес</span>{ship?.mass_kg} кг</p>
                </div>
                <div className={styles.detail_box}>
                  <p className={styles.detail__info}><span className={styles.detail__name}>Порт</span>{ship?.home_port}</p>
                  <p className={styles.detail__info}><span className={styles.detail__name}>Год</span>{ship?.year_built}</p>
                </div>
              </div>
              <div className={styles.detail__missions}>
                <span className={styles.detail__name}>Миссии</span>
                <span className={styles.detail__launches}>
                  {
                    isLaunchesLoading
                      ? <LoadingScreen />
                      : launchNames?.map((item, index) => {
                        return index !== launchNames.length - 1 ? `${ item }, ` : `${ item }`
                      })
                  }
                </span>
              </div>
            </>
        }
      </div>
    </div>
  )
};

export { Details };
