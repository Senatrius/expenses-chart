export const Tooltip = ({
  bottom,
  left,
  value,
  visible
}: {
  bottom: number;
  left: number;
  value: number;
  visible: boolean;
}) => {
  return (
    <div
      style={{ top: bottom - 8 + 'px', left: left + 'px' }}
      className={`${
        visible ? 'block' : 'hidden'
      } absolute -translate-x-1/2 -translate-y-full rounded-md bg-text py-1 px-2 text-card-chart-m text-component md:text-card-trend-m`}>
      ${value}
    </div>
  );
};
