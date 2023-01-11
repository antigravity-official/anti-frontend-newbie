import ViewModel from './viewModel/ViewModel';
import View from './view/View';

const App = () => {
  const viewModel = new ViewModel();
  return <View viewModel={viewModel} />;
};

export default App;
