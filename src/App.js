import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './componenti/MyNav/MyNav';


function App() {

  const navmenu=["Home","About","Browse"];
  
  return (
    <div className="App">
      <MyNav navmenu={navmenu}/>

    </div>
  );
}

export default App;
