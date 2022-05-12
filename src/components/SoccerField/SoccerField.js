import './SoccerField.css';

function SoccerField(props) {

    const { children } = props

    return (
      <div className="soccerField">
          {children}
      </div>
    );
}

export default SoccerField;
  