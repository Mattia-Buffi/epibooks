import logo from './logo.svg';
import './App.css';
import MyNav from './componenti/MyNav/MyNav';
import MyFooter from './componenti/Footer/MyFooter';
import AllTheBooks from './componenti/AllTheBooks/AllTheBooks';
import Welcome from './componenti/Welcome/Welcome';



function App() {

  const navmenu=["Home","About","Browse"];
  const fotMenu=[
    ['Link 1','Link 2'],
    ['Chi Siamo','About us','Contatti'],
    ['Privacy Police','Cookis','Terms','Copyright']]
  
  return (
    <div className="App">
      <Welcome username="EpicBuyer"/>
      <MyNav navmenu={navmenu}/>
      <AllTheBooks/>
      <MyFooter menuFooter={fotMenu} />

    </div>
  );
}

export default App;
