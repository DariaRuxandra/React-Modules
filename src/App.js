import './App.css';
import './global.scss'
import Media_and_content from './Components/Organisms/Media-and-content/Media-and-content'
import Content from './Components/Molecules/Content/Content';
import './Components/Molecules/Media/Media.scss'
import Navbar from './Navbar/NavbarComp'
import Component1 from './Navbar/Pages/Component1'
import Component2 from './Navbar/Pages/Component2'

function App() {

  
    // return(
    //   <>
    let component
    console.log(window.location);

    switch(window.location.pathname){
      case "/":
        component = <Component1 />
        break
        case"/component1":
        component = <Component1 />
        break
        case"/component2":
        component = <Component2 />
        break   
    }
   

     return(
      <> 
        <Navbar/>
        {component}
      </>
     );
    
    
  
}

export default App;
