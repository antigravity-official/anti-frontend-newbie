import { ClipLoader } from 'react-spinners';

export const Loading = () => {
  return (
    <ClipLoader
      color="rgba(192, 135, 147, 1)"
      loading
      size={50}
      speedMultiplier={0.75}
    />
  );
};

export default Loading;
