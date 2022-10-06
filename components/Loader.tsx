import { GridLoader } from 'react-spinners';

export const Loader = () => {
  const color = '#b2b7ffcc';

  return (
    <div className="grid h-screen bg-secondary-100/10">
      <GridLoader
        speedMultiplier={0.8}
        color={color}
        className="animate-pulse m-auto"
      />
    </div>
  );
};
