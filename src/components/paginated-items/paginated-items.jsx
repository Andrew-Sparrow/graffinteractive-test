import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { getFilteredShips } from '../../store/ships/selectors';

import { ShipList } from '../ship-list/ship-list';
import './paginated-items.scss';


const ITEMS_PER_PAGE = 5;

const PaginatedItems = () => {

  const items = useSelector(getFilteredShips);

  const [currentItemsOnPage, setCurrentItemsOnPage] = useState(items);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setCurrentItemsOnPage(items);
    const endOffset = itemOffset + ITEMS_PER_PAGE;
    setCurrentItemsOnPage(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / ITEMS_PER_PAGE));
  }, [items, itemOffset]);


  const handlePageClick = (event) => {
    const newOffset = event.selected * (ITEMS_PER_PAGE % items.length);
    setItemOffset(newOffset);
  };

  return (
    <>
      <ShipList currentItems={currentItemsOnPage} />
      {items.length > ITEMS_PER_PAGE &&
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      }
    </>
  );
};

export { PaginatedItems };
