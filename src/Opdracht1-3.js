function DocentInformatica(props){
    return <h1>Ik ben docent informatica en mijn favoriete taal is {props.Gegevens.FavoriteLanguage}! <br/>
    Ik ben {props.Dimensies.Height} centimeter lang en {props.Dimensies.Width} centimer breed.</h1>;
  }
  function InformaticaLeerling(props){
    return <h1>Ik ben een informaticaleerling, mijn leeftijd is {props.Gegevens.Age} en mijn favoriete taal is {props.Gegevens.FavoriteLanguage}! <br/>
    Ik ben {props.Dimensies.Height} centimeter lang en {props.Dimensies.Width} centimer breed.</h1>;
  }
  function WiskundeDocent(props){
    return <h1>Ik ben een wiskundedocent, mijn leeftijd is {props.Gegevens.Age} en mijn favoriete kleur is {props.Gegevens.Color}! <br/>
    Ik ben {props.Dimensies.Height} centimeter lang en {props.Dimensies.Width} centimer breed.</h1>;
  }
  
  function MensenVanBroklede(){
    const DocentInformaticaGegevens = { FavoriteLanguage: "Python" };
    const DocentInformaticaDimensies = { Height: 190, Width: 50 }
  
    const InformaticaLeerlingGegevens = { Age: "40", Color: "Blauw" };
    const InformaticaLeerlingDimensies = { Height: 180, Width: 46 }
  
    const WiskundeDocentGegevens = { Age: "17", FavoriteLanguage: "JavaScript" };
    const WiskundeDocentDimensies = { Height: 165, Width: 40 }
  
    return(
      <>
    <DocentInformatica Dimensies={DocentInformaticaDimensies} Gegevens={DocentInformaticaGegevens}/>
    <InformaticaLeerling Dimensies={InformaticaLeerlingDimensies} Gegevens={WiskundeDocentGegevens}/>
    <WiskundeDocent Dimensies={WiskundeDocentDimensies} Gegevens= {InformaticaLeerlingGegevens}/>
    </>
    );
  }
  export default MensenVanBroklede
  /* 
  In Index.js:
  Opdracht 1:
  
import DocentInformatica from './App';
import InformaticaLeerling from './InformaticaLeerling';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <DocentInformatica FavoriteLanguage="Python"/>
    <InformaticaLeerling FavoriteLanguage="JavaScript" Age="17"/>
  </>
);

Opdracht 2:
import MensenVanBroklede from '.App';

En in root.render():
<MensenVanBroklede />

Opdracht 2 en 3 hetzelfde in index.js
  
  */