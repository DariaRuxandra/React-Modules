import './App.css';
import './global.scss'
import Media_and_content from './Components/Organisms/Media-and-content/Media-and-content'
import Content from './Components/Molecules/Content/Content';
import './Components/Molecules/Media/Media.scss'
import Navbar from './Navbar/NavbarComp'
import Component1 from './Navbar/Pages/Component1'
import Component2 from './Navbar/Pages/Component2'
import Component3 from './Navbar/Pages/Component3'
import Component4 from './Navbar/Pages/Component4';

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
        case"/component3":
        component = <Component3 />
        break  
        case"/component4":
        component = <Component4 />
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
