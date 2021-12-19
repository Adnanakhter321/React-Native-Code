import Store from './Store'
import { Provider } from 'react-redux';
import Routes from './configs/Routes';
function App() {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
   
  );
}

export default App;
  