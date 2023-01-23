export const Main = () => {
  return (
    <main className='w-full rounded-lg bg-component p-5 md:mb-6 md:py-7 md:px-8'>
      <h2 className='mb-4 text-card-title-m text-text md:mb-2 md:text-card-title-d'>
        Spending - Last 7 days
      </h2>
      <div className='my-6 h-1 w-full bg-gradient-to-b from-background to-component md:my-9'></div>
      <div className='flex items-end justify-between'>
        <div>
          <p className='mb-2 text-card-label-m text-label md:text-card-label-d'>
            Total this month
          </p>
          <p className='text-card-value-m text-text md:text-card-value-d'>
            $478.33
          </p>
        </div>
        <div className='text-right'>
          <p className='text-card-trend-m text-text md:text-card-trend-d'>
            2.4%
          </p>
          <p className='text-card-label-m text-label md:text-card-label-d'>
            from last month
          </p>
        </div>
      </div>
    </main>
  );
};
