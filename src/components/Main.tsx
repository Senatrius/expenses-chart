import { Chart } from './Chart';
import chartData from '../data.json';
import { Divider } from './Divider';
import { Summary } from './Summary';

export const Main = () => {
  return (
    <main className='w-full rounded-lg bg-component p-5 md:mb-6 md:py-7 md:px-8'>
      <h2 className='mb-4 text-card-title-m text-text md:mb-2 md:text-card-title-d'>
        Spending - Last 7 days
      </h2>
      <Chart data={chartData} />
      <Divider />
      <Summary />
    </main>
  );
};
