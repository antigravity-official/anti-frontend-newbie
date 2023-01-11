import ViewModel from './viewModel/ViewModel';
import View from './view/View';
import Model from './model/Model';
import useGetData from './hooks/useGetData';

const App = () => {
  const euroData = useGetData();
  const model = new Model(euroData.data);
  const viewModel = new ViewModel(model);

  return <View viewModel={viewModel} />;
};

export default App;
