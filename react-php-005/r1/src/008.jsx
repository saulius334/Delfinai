import './App.css';
import Checkbox from './Components/008/Checkbox';
import CRUD from './Components/008/CRUD';
import Radio from './Components/008/Radio';
import Range from './Components/008/Range';
import Select from './Components/008/Select';
import Text from './Components/008/Text';



function App() {
   
  return (
    <div className="App">
        <header className="App-header">
        <h1>Formos</h1>
        <Text></Text>
        <Select></Select>
        <Checkbox></Checkbox>
        <Radio></Radio>
        <Range></Range>
        <CRUD></CRUD>
        </header>
    </div>
  );
}

export default App;
