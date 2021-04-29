import logo from './logo.svg';
import './App.css';
import { UserForm } from './components/user-form/UserForm';

function App() {
  state = {
    step: 1
  }

  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;
