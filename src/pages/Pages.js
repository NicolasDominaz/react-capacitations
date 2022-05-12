import './SoccerField.css';


function Line(props) {
  
    const { children } = props

    return (
      <div className="line">
       {children}
     </div> 
    );
  }
  
  export default Line;