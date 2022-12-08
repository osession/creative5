import logo from './logo.svg';
import './App.css';
import ImageOne from './components/ImageOne.js';
import ImageTwo from './components/ImageTwo.js';
import ImageThree from './components/ImageThree.js';
import TextBox from './components/TextBox.js';



function App() {
  return (
    <div className="App">
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
    </div>
  );
}

export default App;
