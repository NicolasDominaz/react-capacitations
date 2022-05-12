import { useState } from 'react';
import './SoccerField.css';

function Player(props) {

    const { children, number, type, description } = props

    const [overme, setOverme] = useState(false)

    const handleMouseEnter = () => {
      setOverme(true)
    }

    const handleMouseLeave = () => {
      setOverme(false)
    }

    const handleClick = () => {
      alert(description)
    }

    return (
      <div className={`player ${type} ${overme && 'zoom'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
          <span>{children}</span>
          <span>({number})</span>
      </div>
    );
}

export default Player;
  