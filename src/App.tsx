import Keypad from './components/Keypad/Keypad.tsx';
import './App.css';
import Display from './components/Display/Display.tsx';

const App = () => {
  return (
    <div>
      <div className="app-container">
        <Display />
        <Keypad />
      </div>
    </div>
  );
};

export default App;