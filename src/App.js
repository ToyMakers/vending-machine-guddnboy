import './App.css';
import VendingMachineContainer from './components/containers/VendingMachineContainer';
import MoneyContainer from './components/containers/MoneyContainer';

function App() {
  return (
    <div className='App'>
      <div>
        <VendingMachineContainer />
        <MoneyContainer />
      </div>
    </div>
  );
}

export default App;