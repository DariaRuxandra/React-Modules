import Media_and_content from '../../Components/Organisms/Media-and-content/Media-and-content'
import Content from '../../Components/Molecules/Content/Content';


export default function Component1(){
    return(
    <>
        <Media_and_content
    media={
      <img
      alt="placeholder"
      src={require('../../images/media1.png')}
      width="100%" 
      // width="538px" 
      // height="538px"
      className="media-image"
      />
    }
    content={ 
      <Content 
      quote="“Working with a company that has a global outlook and a progressive vision is liberating.”"
      name="Mike Funik"
      function="Business Development Manager - CLEVR "
      button="Lees het verhaal"
    />
    }
    />

    <Media_and_content
    reverse
        media={
        <img
        alt="placeholder"
        src={require('../../images/media2.png')}
        width="100%"
        className="media-image"
        />
        }
        content={ 
        <Content 
        quote="“Aaliquet rhoncus quam. Etiam eget dui in enim feugiat ultrices. Working with a company that has a global outlook and a progressive vision is liberating.”"
        name="Masja Bunton"
        function="Global Sales Manager - NautaDutilh  "
        button="Lees het verhaal"
        />
        }
        />
    </>
    );
}