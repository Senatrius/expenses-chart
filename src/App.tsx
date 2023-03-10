import { useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import './index.css';

function App() {
  const [customMode, setCustomMode] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [dataLength, setDataLength] = useState<number>(0);

  return (
    <div className='mx-auto flex min-h-full w-[91.5%] flex-col items-center justify-center py-[4.1875rem] md:w-[60%] lg:w-[45%] xl:w-[37.5%]'>
      <button
        onClick={() => setCustomMode(!customMode)}
        className='mb-2 self-end rounded-sm bg-primary-red py-1 px-2 text-header-label-m text-background md:mb-4 md:text-header-label-d'>
        {customMode ? 'Switch to Demo Mode' : 'Switch to Custom Mode'}
      </button>
      <Header
        customMode={customMode}
        step={step}
        setStep={setStep}
        dataLength={dataLength}
      />
      <Main
        setStep={setStep}
        customMode={customMode}
        dataLength={dataLength}
        setDataLength={setDataLength}
        step={step}
      />
    </div>
  );
}

export default App;
