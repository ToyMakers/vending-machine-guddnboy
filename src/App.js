import './App.css';
import VendingMachineContainer from './components/containers/VendingMachineContainer';
import WalletContainer from './components/containers/WalletContainer';

function App() {
  return (
    <div className='App'>
      <div className='containers'>
        <VendingMachineContainer />
        <WalletContainer />
      </div>
    </div>
  );
}

export default App;