import React, { useState, MouseEvent } from 'react';
import { Tooltip } from './Tooltip';


interface IChartData {
  label: string | number;
  value: number;
}

interface ITooltip {
  visible: boolean;
  xPos: number;
  yPos: number;
  value: number;
}

export const Chart = ({ data, step }: { data: IChartData[], step: number }) => {
  const [tooltip, setTooltip] = useState<ITooltip>({
    visible: false,
    xPos: 0,
    yPos: 0,
    value: 0
  });

  const chartSection = data.slice(0 + step, 7 + step);
  const highestValue = Math.max(...data.map(item => item.value));

  const showTooltip = (e: MouseEvent<HTMLDivElement>, col: IChartData) => {
    const t = e.target as HTMLDivElement;
    const barTop =
      t.getBoundingClientRect().top + document.documentElement.scrollTop;
    const barCenter = t.getBoundingClientRect().left + t.offsetWidth / 2;

    setTooltip(prev => ({
      ...prev,
      visible: true,
      xPos: barCenter,
      yPos: barTop,
      value: col.value
    }));
  };

  const hideTooltip = () => {
    setTooltip(prev => ({
      ...prev,
      visible: false
    }));
  };

  return (
    <div className='mt-12 flex w-full justify-between gap-3 md:gap-4'>
      <Tooltip
        bottom={tooltip.yPos}
        left={tooltip.xPos}
        value={tooltip.value}
        visible={tooltip.visible}
      />
      {chartSection.map((col, idx) => (
        <div
          key={idx}
          className='flex w-full flex-col items-center'>
          <div className='relative h-[9.375rem] w-full'>
            <div
              onMouseEnter={(e: MouseEvent<HTMLDivElement>) =>
                showTooltip(e, col)
              }
              onMouseLeave={hideTooltip}
              style={{ height: (col.value / highestValue) * 100 + '%' }}
              className={`absolute bottom-0 left-0 right-0 min-h-[.5rem] rounded-sm hover:cursor-pointer md:rounded-md ${
                col.value === highestValue
                  ? 'bg-primary-blue hover:bg-hover-blue'
                  : 'bg-primary-red hover:bg-hover-red'
              }`}></div>
          </div>
          <span className='md:card-chart-d mt-3 break-all text-card-chart-m text-label md:mt-2'>
            {col.label}
          </span>
        </div>
      ))}
    </div>
  );
};
