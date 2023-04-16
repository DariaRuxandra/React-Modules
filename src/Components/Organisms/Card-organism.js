import React from 'react'
import Card from '../Molecules/Card/Card';
import './Card-organism.scss'



export default function Card_organism() {
  return (
    <>
      <div className="card-organism">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card 
            image={
               <img src={require('../../images/Image1.png')}  alt="image" />

            }
            text="Vestigingsplaats van kantoor" 
            subtext1= {<> 
                 <div>Algemeen: <a href="#">+31 6 12 34 56 78</a></div>
                 <div>Route: <a  href="#">Plan</a></div>
             </>} />  
          </div>

          <div className="col-md-4">
            <img src={require('../../images/Image2.png')} alt="image" />
            <Card text="Vestigingsplaats van kantoor" 
            subtext1= {<> 
              <div>Algemeen: <a href="#">+31 6 12 34 56 78</a></div>
              <div>Route: <a  href="#">Plan</a></div>
          </>} />  
          </div>

          <div className="col-md-4">
            <img src={require('../../images/Image3.png')} alt="image" />
            <Card text={<div class="title">Vestigingsplaats van kantoor</div>} 
            subtext1= {<> 
              <div>Algemeen: <a href="#">+31 6 12 34 56 78</a></div>
              <div>Route: <a  href="#">Plan</a></div>
              
          </>} />  
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={require('../../images/Image4.png')} alt="image" />
            <Card text="Marieke Penning de Vries"
            subtext1="Marketing Manager"
            subtext2="Aaliquet rhoncus quam. Etiam eget dui in enim feugiat ultrices. Vestibulum dolor donec consequat tempor. Aaliquet rhoncus quam. Etiam eget dui in enim feugiat ultrices. Vestibulum dolor donec consequat tempor. " />
          </div>

          <div className="col-md-4">
            <img src={require('../../images/Image5.png')} alt="image" />
            <Card text="Ymke Stegink" 
            subtext1="Online Marketeer" 
            subtext2="Aaliquet rhoncus quam. Etiam eget dui in enim feugiat ultrices. Vestibulum dolor donec consequat tempor. Aaliquet rhoncus quam. Etiam eget dui in enim feugiat ultrices. Vestibulum dolor donec consequat tempor. " />
          </div>

          <div className="col-md-4">
            <img src={require('../../images/Image6.png')} alt="image" />
            <Card text="Ron van Deun" 
            subtext1="Vennoot" 
            subtext2="Aaliquet rhoncus quam. Etiam eget dui in enim feugiat ultrices. Vestibulum dolor donec consequat tempor." />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <img src={require('../../images/Image7.png')} alt="image" />
            <Card text="James Blunt"
            subtext1="Marketing Manager"
            subtext2="Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.  " />
          </div>

          <div className="col-md-4">
            <img src={require('../../images/Image8.png')} alt="image" />
            <Card text="Ron van Deun" 
            subtext1="Vennoot" 
            subtext2="Aaliquet rhoncus quam. Etiam eget dui in enim feugiat ultrices. Vestibulum dolor donec consequat tempor. Aaliquet rhoncus quam. Etiam eget dui in enim feugiat ultrices. Vestibulum dolor donec consequat tempor. " />
          </div>

         
        </div>
      </div>
    </div> 
    
    </>
  );

   
}
