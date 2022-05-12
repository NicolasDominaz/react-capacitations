import Line from '../components/SoccerField/Line';
import SoccerField from '../components/SoccerField/SoccerField';
import Player from '../components/SoccerField/Player';
import Title from '../components/Title/Title';
import Back from '../components/Back/Back';


function SoccerFieldPage() {

    const players = [
      {
        number: 1,
        name: 'Ivancito',
        type: 'goalkeeper',
        description: 'El unooooooo'
      },
      {
        number: 3,
        name: 'Joni',
        type: 'defender',
        description: 'Impecable!'
      },
      {
        number: 2,
        name: 'Eze',
        type: 'defender',
        description: 'Franquito solooooo'
      },
      {
        number: 7,
        name: 'Nico',
        type: 'defender',
        description: ''
      },
      {
        number: 3,
        name: 'Turko',
        type: 'midfielder',
        description: ''
      },
      {
        number: 22,
        name: 'Fer',
        type: 'midfielder',
        description: ''
      },
      {
        number: 33,
        name: 'Keki',
        type: 'midfielder',
        description: ''
      },
      {
        number: 10,
        name: 'Tati',
        type: 'midfielder',
        description: ''
      },
      {
        number: 17,
        name: 'Chapa',
        type: 'forward',
        description: ''
      },
      {
        number: 8,
        name: 'Franki',
        type: 'forward',
        description: ''
      },
      {
        number: 66,
        name: 'Jorge Luis',
        type: 'forward',
        description: ''
      },
    ]

    const goalkeepers = players.filter((item) => item.type === 'goalkeeper')
    const defenders = players.filter((item) => item.type === 'defender')
    const midfielders = players.filter((item) => item.type === 'midfielder')
    const forwards = players.filter((item) => item.type === 'forward')

    console.log('players', players)
    console.log('goalkeepers', goalkeepers)
    console.log('defenders', defenders)
    console.log('midfielder', midfielders)
    console.log('forward', forwards)

    return (
      <div>
        <Title>
          Soccer Field
        </Title>
        <Back />
        <SoccerField>
          <Line>
            {
              goalkeepers.map((item) => {
                return (
                  <Player number={item.number} type={item.type} description={item.description}>
                    {item.name}
                  </Player>
                )
              })
            }
          </Line>
          <Line>
            {
              defenders.map((item) => {
                return (
                  <Player number={item.number} type={item.type} description={item.description}>
                    {item.name}
                  </Player>
                )
              })
            }
          </Line>
          <Line>
            {
              midfielders.map((item) => {
                return (
                  <Player number={item.number} type={item.type} description={item.description}>
                    {item.name}
                  </Player>
                )
              })
            }
          </Line>
          <Line>
            {
              forwards.map((item) => {
                return (
                  <Player number={item.number} type={item.type} description={item.description}>
                    {item.name}
                  </Player>
                )
              })
            }
          </Line>
        </SoccerField>
      </div>

    );
}
  
export default SoccerFieldPage;
  