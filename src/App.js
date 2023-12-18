
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Screen from './components/Screen';
import DrawPad from "./components/DrawPad";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Screen />} />
        <Route path='/drawingpad' element={<DrawPad />} />
      </Routes>
    </Router>
  );
}
export default App;
