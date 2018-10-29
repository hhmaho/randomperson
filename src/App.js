import React from 'react';
import Chance from 'chance';

const chance = new Chance()

const Person = ({ person }) => (
  <div>
    <img src="https://picsum.photos/200/300" alt="randomfoto" />
    <h5>Name = {person.name}</h5>
    <h5>age = {person.age}</h5>
    <h5>City = {person.city}</h5>
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

//const Persons = [randomPersoon()]
//console.log(Persons)

// const Persons = randomPersoon.map((person) =>
//   <li>{person}</li>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { persons: [randomPersoon(), randomPersoon(), randomPersoon()] };
  }
  render() {
    return (
      <div>
        {this.state.persons.map((person) =>
          <Person person={person} />)}
        <button onClick={() => {
          //console.log("test")
          this.setState({
            persons: this.state.persons.concat(randomPersoon())
          })
        }}>
          klik
        </button>
      </div>
    )

  }
}



export default App;