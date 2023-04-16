export default function Card(props) {
    return (
      <>
          <div className="card">
            <div className="image">
            {props.image}
            </div>
            <div className="quote">
                {props.text}
            </div>
            
              
          </div>
      </>
    )
  }