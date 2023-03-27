import './app.scss';
import { Ship } from '../ship/ship';


function App() {
  return (
    <div className="app">
      <h1>SpaceX Ships</h1>
      <button className='filters'>Фильтры</button>
      <aside>filters</aside>
      <main className='main'>
        {[1, 2].map((item) => <Ship />)}
      </main>
    </div>
  );
}

export default App;
