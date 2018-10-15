import React from 'react';
import Chance from 'chance'

const chance = new Chance()

const Person = ({ person }) => (
  <div>
    <img src="https://picsum.photos/200/300" alt="randomfoto" />
    <p id="naam">Name = {person.name}</p>
    <p>age = {person.age}</p>
    <p>city = {person.city}</p>
    <h5>email = {person.email}</h5>
  </div>
)


//https://chancejs.com/web/email.html

function randomPersoon() {
  return {
    name: chance.name(),
    age: chance.age({ type: 'adult' }),
    city: chance.city(),
    email: chance.email()
  }
}

const Persons = [randomPersoon()]
//console.log(Persons)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { person: randomPersoon() };
  }
  render() {
    return (
      <div>
        <Person person={this.state.person} />
        {/* map op Person*/}
        <button onClick={() => {
          //console.log("test")
          this.setState({
            person: randomPersoon()
          })
        }}>
          klik
        </button>
      </div>
    )

  }
}



export default App;