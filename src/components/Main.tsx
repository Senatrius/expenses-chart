import { Chart } from './Chart';
import { Divider } from './Divider';
import { Summary } from './Summary';
import { useDropzone } from 'react-dropzone';
import { csvToJson, IObject } from '../helpers/csv-to-json';
import { SetStateAction, useState } from 'react';
import demo from '../demo.json';

export const Main = ({
  customMode,
  step,
  setStep,
  setDataLength,
  dataLength
}: {
  customMode: boolean;
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>
  setDataLength: React.Dispatch<SetStateAction<number>>;
  dataLength: number;
}) => {
  const [fileContents, setFileContents] = useState<IObject[] | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [totalValue, setTotalValue] = useState<number>(0);

  const onDrop = (acceptedFiles: any) => {
    setFileName(acceptedFiles[0].name);
    const reader = new FileReader();

    if (acceptedFiles) {
      reader.readAsText(acceptedFiles[0]);
    }

    reader.onload = async () => {
      const result = reader.result as string;

      if (result) {
        const jsonData = await csvToJson(result);
        const totalValue = jsonData.reduce(
          (total, obj) => total + obj.value,
          0
        );

        setFileContents(jsonData);
        setStep(0);
        setDataLength(jsonData.length);
        setTotalValue(parseFloat(totalValue.toFixed(2)));
      }
    };
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv']
    }
  });

  return (
    <main className='w-full rounded-lg bg-component p-5 md:mb-6 md:py-7 md:px-8'>
      {!customMode ? (
        <>
          <h2 className='mb-4 text-card-title-m text-text md:mb-2 md:text-card-title-d'>
            Spending - Last 7 days
          </h2>
          <Chart
            data={demo}
            step={0}
          />
          <Divider />
          <Summary
            total={478.33}
            trend={2.4}
          />
        </>
      ) : !fileContents ? (
        <div
          className='m-0 flex min-h-[9.375rem] w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-label p-3 text-center md:min-h-[15rem]'
          {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className='text-card-chart-m text-label md:text-card-chart-d'>
              Drop the files here ...
            </p>
          ) : (
            <p className='text-card-chart-m text-label md:text-card-chart-d'>
              Drag and drop a file here, or click to select a file manually.
              <br />
              Accepted file format: [*.csv]
              <br />
              Accepted file structure: [label(str) ,value(num)]
            </p>
          )}
        </div>
      ) : (
        <>
          <h2 className='mb-4 flex items-center justify-between text-card-title-m text-text md:mb-2 md:text-card-title-d'>
            {fileName.replace('.csv', '').toUpperCase()}{' '}
            <p className='text-card-label-m text-label md:text-card-label-d'>
              {`${step} to ${step + 6}`}
              <span className='text-text'>{` / ${dataLength}`}</span>
            </p>
          </h2>
          <Chart
            data={fileContents}
            step={step}
          />
          <Divider />
          <Summary
            total={totalValue}
            trend='¯\_(ツ)_/¯ '
          />
        </>
      )}
    </main>
  );
};
