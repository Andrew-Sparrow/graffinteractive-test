import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { getFilteredShips } from '../../store/ships/selectors';

import { ShipList } from '../ship-list/ship-list';
import './paginated-items.scss';


const ITEMS_PER_PAGE = 5;

const PaginatedItems = () => {

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  const items = useSelector(getFilteredShips);

  useEffect(() => {
    const endOffset = itemOffset + ITEMS_PER_PAGE;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / ITEMS_PER_PAGE));
  }, [itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * (ITEMS_PER_PAGE % items.length);
    setItemOffset(newOffset);
  };

  return (
    <>
      <ShipList currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
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
    </>
  );
};

export { PaginatedItems };
