import logo from './logo.svg';
import './App.css';
import MyNav from './componenti/MyNav/MyNav';
import MyFooter from './componenti/Footer/MyFooter';
import AllTheBooks from './componenti/AllTheBooks/AllTheBooks';
import Welcome from './componenti/Welcome/Welcome';
import { useState } from 'react';


function App() {

  const navmenu=["Home","About","Browse"];
  const fotMenu=[
    ['Link 1','Link 2'],
    ['Chi Siamo','About us','Contatti'],
    ['Privacy Police','Cookis','Terms','Copyright']]
  const [keySearch,setKeySearch]=useState("")
  
  return (
    <div className="App">
      <Welcome username="EpicBuyer"/>
      <MyNav navmenu={navmenu} keySearch={keySearch} setKeySearch={setKeySearch}/>
      <AllTheBooks keySearch={keySearch}/>
      <MyFooter menuFooter={fotMenu} />

    </div>
  );
}

export default App;
