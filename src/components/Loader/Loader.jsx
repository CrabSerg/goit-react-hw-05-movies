import { RotatingLines } from 'react-loader-spinner';
import { Spiner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spiner>
      <RotatingLines
        strokeColor="yellow"
        strokeWidth="5"
        animationDuration="0.75"
        width="120"
        visible={true}
      />
    </Spiner>
  );
};
