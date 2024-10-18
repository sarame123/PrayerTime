import logo from './logo.svg';
import './App.css';
import Prayer from './Prayer';
import { HashRouter } from 'react-router-dom';



function App() {
  return (

     <HashRouter base="/">
      <Prayer/>
 </HashRouter>
  );
}

export default App;
