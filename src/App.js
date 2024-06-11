import './App.css';
import VendingMachineContainer from './components/containers/VendingMachineContainer';
import Machine from './components/Machine';
import Money from '.'

function App() {
  return (
    <div className='App'>
      <VendingMachineContainer />
      <Machine />
      <Money />

      </div>
  );
}

export default App;