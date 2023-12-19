import { EthProvider } from "./contexts/EthContext";

import ContractBtns from "./components/Demo/ContractBtns";

function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <ContractBtns/>
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
