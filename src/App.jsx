import {
  Routes,
  Route,
  Link,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import CrossChainSwap from "./components/Cross-chain-swap/CrossChainSwap";
import Header from "./components/Header";
import Wallpaper from "./assets/wrapper.png";
import CrossTalk from "./components/CrossTalk/CrossTalk";

function App() {
  return (
    <Router>
      <Header />
      {/* Background gradient image */}
      <img
        src={Wallpaper}
        alt="wallpaper"
        className="fixed top-0 left-0 h-screen w-screen"
      />

      <Routes>
        <Route exact path="/" element={<Navigate to="/crosschainswap" />} />
        <Route exact path="crosschainswap" element={<CrossChainSwap />} />
        <Route exact path="crosstalk" element={<CrossTalk />} />
        {/* <Route exact path="tx/:id" element={Hero} />
        <Route exact path="calculate-fees" element={Hero} />
        <Route exact path="verify-transaction" element={Hero} />
        <Route path="*" component={PageNotFound} /> */}
      </Routes>
    </Router>
  );
}

export default App;
