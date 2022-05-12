import { useState } from "react"

function Events() {

    const [clickCounter, setClickCounter] = useState(0)
    const [overme, setOverme] = useState(false)
    const [inputValue, setInputValue] = useState()

    const handleClick = () => {
      console.log('is clicking')
      setClickCounter(clickCounter + 1)
    }

    const handleMouseEnter = () => {
      setOverme(true)
      console.log('is mouse enter')
    }

    const handleMouseLeave = () => {
      setOverme(false)
      console.log('is mouse Leave')
    }

    const handleChange = (event) => {
      console.log('is changing')
      setInputValue(event.target.value)
    }

    const handleClickWithParam = (param) => {
      console.log('is clicking with params', param)
    }

    const handleFocus = () => {
      console.log('is focus')
    }

    const handleBlur = () => {
      console.log('is blur')
    }

    return (
      <div >
          <h1>Events</h1>
          <h2>Click</h2>
          <button onClick={handleClick}>Click me!</button>
          &nbsp;
          {clickCounter}

          <h2>MouseEnter y MouseLeave</h2>
          <b onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={overme ? 'red' : 'green'}>Hover me</b>
          &nbsp;
          {overme ? (
            <span>OVERME IS TRUE</span>
          ) : (
            <span>OVERME IS FALSE</span>
          )}

          <h2>OnChange</h2>
          <input type="text" name="changeme" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          &nbsp;
          {inputValue}

          <h2>Click with params</h2>
          <button onClick={() => handleClickWithParam('this is the params!')}>Pass a param!</button>
          &nbsp;
      </div>
    );
}
export default Events;