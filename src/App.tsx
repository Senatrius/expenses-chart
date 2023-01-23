import { Header } from './components/Header';
import { Main } from './components/Main';
import './index.css';

function App() {
  return (
    <div className='mx-auto flex min-h-full w-[91.5%] flex-col items-center justify-center py-[4.1875rem] md:w-[60%] lg:w-[45%] xl:w-[37.5%]'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
