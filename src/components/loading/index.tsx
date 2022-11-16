import { Container } from './style';
import LoadingIcon from '../../assets/svgs/loading.svg';

const Loading = () => {
  return (
    <Container>
      <img src={LoadingIcon} alt="Loading.." />
    </Container>
  );
};
export default Loading;
