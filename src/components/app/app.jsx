import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Main } from '../main/main';
import { Details } from "../details/details";
import { AppRoute } from '../../const';
import { NotFound } from '../not-found/not-found';

function App() {
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
