import { EthProvider } from "./contexts/EthContext";

import ContractBtns from "./components/Demo/ContractBtns";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Navbar/>
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
