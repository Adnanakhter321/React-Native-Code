import Store from './Store'
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={Store}>
      <div>
     <p>
       hello world
     </p>
   </div>
    </Provider>
   
  );
}

export default App;
  