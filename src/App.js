import './App.css';
import NavBar from './components/NavBar'
import UserList from './components/UserList'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h3> clients info </h3>
     <UserList/>
    </div>
  );
}

export default App;
