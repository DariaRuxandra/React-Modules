import logo from './logo.svg';
import './App.css';
import Card_organism from './Components/Organisms/Card-organism';
import './global.scss'
import Media_and_content from './Components/Organisms/Media-and-content/Media-and-content'
import Content from './Components/Molecules/Content/Content';


function App() {
  return (
    <>
   
    

    <Media_and_content
    media={
      <img
      alt="placeholder"
      src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1667659813/cld-sample-2.jpg"
      width="100%"
      />
    }
    content={ 
      <Content 
      quote="“Working with a company that has a global outlook and a progressive vision is liberating.”"
      name="Mike Funik"
      function="Business Development Manager - CLEVR "
      button="button"
    />
    }
    />
    
    
    <Card_organism />

    </>
  );

  
}

export default App;
