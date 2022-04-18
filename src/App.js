import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';
import './css/index.css'
import Button from 'devextreme-react/button'
import MyCalendar from './Components/Calendar';

function App() {

  const handleClick = () => {
    console.log('Button Clicked')
  }

  return (
    <div className="App">
      <div

      >
        <h1>Scheduler App</h1>
        <MyCalendar />
        <Button 
          text="Click Me"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
