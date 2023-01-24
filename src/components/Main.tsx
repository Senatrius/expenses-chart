import { Chart } from './Chart';
import chartData from '../data.json';
import { Divider } from './Divider';
import { Summary } from './Summary';
import { useDropzone } from 'react-dropzone';

export const Main = ({ customMode }: { customMode: boolean }) => {
  const onDrop = (acceptedFiles: any) => {
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv']
    }
  });

  return (
    <main className='w-full rounded-lg bg-component p-5 md:mb-6 md:py-7 md:px-8'>
      {!customMode && (
        <>
          <h2 className='mb-4 text-card-title-m text-text md:mb-2 md:text-card-title-d'>
            Spending - Last 7 days
          </h2>
          <Chart data={chartData} />
          <Divider />
          <Summary />
        </>
      )}
      {customMode && (
        <div
          className='m-0 flex h-[9.375rem] w-full items-center justify-center rounded-md border-2 border-dashed border-label p-3 text-center md:h-[15rem]'
          {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className='text-card-chart-m text-label md:text-card-chart-d'>
              Drop the files here ...
            </p>
          ) : (
            <p className='text-card-chart-m text-label md:text-card-chart-d'>
              Drag 'n' drop some files here, or click to select files. Accepted
              file format: [*.csv]
            </p>
          )}
        </div>
      )}
    </main>
  );
};
