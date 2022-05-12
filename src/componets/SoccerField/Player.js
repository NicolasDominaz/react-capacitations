import './SoccerField.css';


function Player(props) {
  
    const { children, number, type  } = props

    return (
      <div className={`player ${type}`}>
       <span>{children} </span>
       <span>({number}) </span>
       
       
     </div> 
    );
  }
  
  export default Player;