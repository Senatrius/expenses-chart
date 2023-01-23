interface IChartData {
  day: string;
  amount: number;
}

export const Chart = ({ data }: { data: IChartData[] }) => {
  const highestAmount = Math.max(...data.map(item => item.amount));

  return (
    <div className='mt-12 flex w-full items-end justify-between gap-3 md:gap-4'>
      {data.map((col, idx) => (
        <div
          key={idx}
          className='group flex w-full flex-col items-center'>
          <div className='relative h-[9.375rem] w-full'>
            <div
              style={{ height: (col.amount / highestAmount) * 100 + '%' }}
              className={`absolute bottom-0 left-0 right-0 rounded-sm md:rounded-md ${
                col.amount === highestAmount
                  ? 'bg-primary-blue group-hover:bg-hover-blue'
                  : 'bg-primary-red group-hover:bg-hover-red'
              }`}></div>
          </div>
          <span className='md:card-chart-d mt-3 text-card-chart-m text-label md:mt-2'>
            {col.day}
          </span>
        </div>
      ))}
    </div>
  );
};
