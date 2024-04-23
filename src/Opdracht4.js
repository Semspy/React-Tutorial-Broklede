function App(){
    function NogGeenVerjaardagKnop(){
      function NogGeenVerjaadag(){
        alert("Helaas nog even wachten!");
      }
      return(<button onClick={NogGeenVerjaadag}>Klik als je nog niet jarig bent!</button>);
    }
  
    function GefeliciteerdMetJeVerjaardagKnop(){
      function GefeliciteerdMetJeVerjaardag(){
        alert("Gefeliciteerd met je verjaardag!");
      }
      return (<button onClick={GefeliciteerdMetJeVerjaardag}>Klik als je jarig bent!</button>);
    }
    return(
      <>
      <GefeliciteerdMetJeVerjaardagKnop/> 
      <br/>
      <NogGeenVerjaardagKnop/>
      </>
    );
  }
  
  
  export default App


  /*
  In index.js:
  import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
  </>
);
  */