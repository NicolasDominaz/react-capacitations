import './SoccerField.css';


function Rectangulo(props) {
  
    const { children } = props

    return (
      <div className="rectangulogrande">
       {children}
     </div> 
    );
  }
  
  export default Rectangulo;
  