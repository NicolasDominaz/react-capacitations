function RenderTools() {

  const positions = [
    {
      position: 1,
      country: 'Argentina',
      classified: true
    },
    {
      position: 2,
      country: 'Inglaterra',
      classified: true
    },
    {
      position: 3,
      country: 'Italia',
      classified: true
    },
    {
      position: 4,
      country: 'Brasil',
      classified: true
    },
    {
      position: 5,
      country: 'Alemania',
      classified: true
    },
    {
      position: 6,
      country: 'Paraguay',
      classified: true
    },
    {
      position: 7,
      country: 'Chile',
      classified: false
    },
  ]

  const referees = ['Pitana', 'Gianluca', 'Ceballos', 'Matorrantes']

  const show = true;

  return (
    <div>
        <h1>RenderTools</h1>

        <h2>MAP - FOR</h2>
        <h3>Soccer Position - Qatar 2022</h3>
        <ul>
          {
            positions.map((item) => {
              return item.classified && (
                 <li key={item.position}>{item.position} - {item.country}</li>
              )
            })
          }
        </ul>
        <h3>Referees: </h3>
        {
          referees.map((item, index) => {
            return (
              <span key={index}>{item}, </span>
            )
          })
        }

      <h2>IF</h2>

      { show && (
        <span>IS SHOWING!!!!</span>
      )}
      {
        show ? (
          <span>SHOWING IS TRUE</span>
        ) : (
          <span>SHOWING IS FALSE</span>
        )
      }
  
    </div>
  );
}

export default RenderTools;