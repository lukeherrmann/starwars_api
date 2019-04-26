import React from "react";
import axios from "axios"

const PeopleContext = React.createContext();

export const PeopleConsumer = PeopleContext.Consumer;

class PeopleProvider extends React.Component {
  state = {
    people: []
  };





componentDidMount(){
    let i = 1
    for (i = 1; i <= 88; i++){
        axios.get(`https://swapi.co/api/people/${i}/`)
            .then( res => {
                let personPlanet = res.data.homeworld
                axios.get(`${personPlanet}`)
                    .then( res1 => {
                        let id = Math.floor(Math.random() * 500);    
                        this.setState({ people: [{ id: id, ...res.data, planetInfo: { ...res1.data }}, ...this.state.people ]  })
                    })
            })
    }
}


  render() {
    return (
      <PeopleContext.Provider people={this.state}>
        {this.props.children}
      </PeopleContext.Provider>
    );
  }
}

export default PeopleProvider;
