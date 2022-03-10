import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Navbar/>
      <Weather/>
    </div>
  );
}

export default App;
