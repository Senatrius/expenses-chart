export interface IObject {
  label: string | number;
  value: number;
}

export const csvToJson = (data: string) => {
  const jsonArray = [];

  const rows = data.replaceAll('\r', '').split('\n');

  for (let i = 1; i < rows.length - 1; i++) {
    const rowObject: IObject = {} as IObject;

    const [rowDate, rowValue] = rows[i].split(',');

    rowObject['label'] = rowDate;
    rowObject['value'] = parseFloat(rowValue);

    jsonArray.push(rowObject);
  }

  return jsonArray;
};
