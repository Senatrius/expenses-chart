export const Header = () => {
  return (
    <header className='group mb-4 flex w-full items-center justify-between gap-1 rounded-lg bg-primary-red p-5 text-component md:mb-6 md:py-7 md:px-8'>
      <div className='flex flex-col items-start'>
        <p className='text-header-label-m md:text-header-label-d'>My balance</p>
        <p className='text-header-value-m md:text-header-value-d'>$921.48</p>
      </div>
      <div className='mr-1 flex items-center gap-2 md:gap-0'>
        <button
          type='button'
          className='group/btn flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-component transition-transform duration-75 md:translate-x-1/2 md:focus:-translate-x-2 md:group-hover:-translate-x-2'>
          <svg
            className='group-focus/btn:inline md:hidden md:group-hover:inline'
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M9 18L0 9L9 0L10.6031 1.575L4.30312 7.875H18V10.125H4.30312L10.6031 16.425L9 18Z'
              fill='#FFFAF5'
            />
          </svg>
        </button>
        <button
          type='button'
          className='group/btn flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-text bg-text'>
          <svg
            className='group-focus/btn:inline md:hidden md:group-hover:inline'
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M9 -7.86805e-07L18 9L9 18L7.39687 16.425L13.6969 10.125L6.88454e-07 10.125L8.85156e-07 7.875L13.6969 7.875L7.39688 1.575L9 -7.86805e-07Z'
              fill='#FFFAF5'
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
