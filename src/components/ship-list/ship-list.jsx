import React, { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';

import {
  getFilteredShips,
  getIsDataLoaded
} from '../../store/ships/selectors';
import { Ship } from '../ship/ship';
import { LoadingScreen } from '../loading-screen/loading-screen';
import styles from './ship-list.module.scss';
import { Pagination } from '../pagination/pagination';

const ITEMS_PER_PAGE = 5;


const ShipList = () => {
  const isDataLoaded = useSelector(getIsDataLoaded);
  const filteredShips = useSelector(getFilteredShips);

  let initialPageNumber = 1;

  const newItems = filteredShips;

  useEffect(() => {});

  const selectedItemsOnFirstPage = newItems?.slice(0, ITEMS_PER_PAGE);
  const pagesTotalAmount = Math.ceil(newItems?.length / ITEMS_PER_PAGE);

  let slicedItems = selectedItemsOnFirstPage;

  const init = (initialPageNumber = 1) => {
    return {
      pageNumber: initialPageNumber,
      slicedItems: slicedItems
    };
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changePageNumber':
        return { ...state, pageNumber: action.payload };
      case 'changeSlicedItems':
        return { ...state, slicedItems: action.payload };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialPageNumber = 1, init);

  const pageNumberClickHandler = (dataPagination) => {
    let offset = Math.ceil(dataPagination.selected * ITEMS_PER_PAGE);
    slicedItems = newItems.slice(offset, offset + ITEMS_PER_PAGE);
    dispatch({ type: 'changePageNumber', payload: dataPagination.selected });
    dispatch({ type: 'changeSlicedItems', payload: slicedItems });
  };

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  };

  return (
    <>
      <ul className={styles.list}>
        {
          state.slicedItems?.map((ship) =>
            <Ship
              key={ship.id}
              type={ship.type}
              name={ship.name}
              port={ship.home_port}
            />)
        }
      </ul>
      {/* comparison was added to don't show pagination if there are too little amount of items in list */}
      {newItems.length > ITEMS_PER_PAGE && <Pagination
        pageCount={pagesTotalAmount}
        onPageNumberClick={pageNumberClickHandler}
        forcePage={state.pageNumber}
      />}
    </>
  )
}

export { ShipList };
