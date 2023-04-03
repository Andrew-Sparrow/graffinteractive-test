import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Main } from '../main/main';
import { Details } from "../details/details";
import { AppRoute } from '../../const';
import { NotFound } from '../not-found/not-found';
import { useDispatch } from 'react-redux';
import { setItemsAction } from "../../store/actions";

function App() {
  // const dispatch = useDispatch();

  // if (!localStorage.getItem('books')) {
  //   localStorage.setItem('books', JSON.stringify(books));
  //   dispatch(setItemsAction(books))
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MAIN} element={<Main />} />
        <Route path={AppRoute.DETAILS} element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
