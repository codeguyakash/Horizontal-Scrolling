
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Screen from './components/Screen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Screen />} />
      </Routes>
    </Router>
  );
}

export default App;
