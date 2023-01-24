export const Summary = ({
  total,
  trend
}: {
  total: number;
  trend: number | string;
}) => {
  return (
    <div className='flex items-end justify-between'>
      <div>
        <p className='mb-2 text-card-label-m text-label md:text-card-label-d'>
          Total this month
        </p>
        <p className='text-card-value-m text-text md:text-card-value-d'>
          ${total}
        </p>
      </div>
      <div className='text-right'>
        <p className='text-card-trend-m text-text md:text-card-trend-d'>
          {trend}%
        </p>
        <p className='text-card-label-m text-label md:text-card-label-d'>
          from last month
        </p>
      </div>
    </div>
  );
};
