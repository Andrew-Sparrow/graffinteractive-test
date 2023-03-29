import styles from './app.module.scss';
import { Ship } from '../ship/ship';
import { Filters } from '../filters/filters';


function App() {
  return (
    <div className={styles.app}>
      <h1>SpaceX Ships</h1>
      <main className='main'>
        <Filters />
        {[1, 2].map((item, index) => <Ship key={index}/>)}
      </main>
    </div>
  );
}

export default App;
