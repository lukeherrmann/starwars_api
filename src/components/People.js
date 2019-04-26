import React from "react";
import axios from "axios";
import {  Redirect } from "react-router-dom";
import { Card, Grid, Button, Feed } from "semantic-ui-react";

class People extends React.Component {
  state = { people: [], press: false };

 
componentDidMount(){
  let i = 1
  for (i = 1; i <= 88; i++){
      axios.get(`https://swapi.co/api/people/${i}/`)
          .then( res => {
              let personPlanet = res.data.homeworld
              axios.get(`${personPlanet}`)
                  .then( res1 => {
                      let id = Math.floor(Math.random() * 10000);    
                      this.setState({ people: [{ id: id, ...res.data, planetInfo: { ...res1.data }}, ...this.state.people ]  })
                  })
          })
  }
}

// handleClick = (person) => {
//   const press = this.state.press
//   this.setState({ press: !press })
//   if (press === true)
//     <Redirect person={person} to={`/planets/${person.id}/`} />
// }


  render() {
    return (
      <div
        style={{ marginTop: "100px", marginLeft: "40px", marginRight: "40px" }}
      >
        <Grid columns={5}>
          <Grid.Row>
            {this.state.people.map(person => {
              return (
                <Grid.Column style={{ padding: "10px" }}>
                  <Card inverted color="blue" key={person.name}>
                    <Card.Content header={person.name} />
                    <Card.Content>
                      <Feed>
                        <Feed.Summary>
                          Home Planet: {person.planetInfo.name}
                        </Feed.Summary>
                        <Feed.Summary>Gender: {person.id}</Feed.Summary>
                        <Feed.Summary>
                          Hair Color: {person.hair_color}
                        </Feed.Summary>
                      </Feed>
                    </Card.Content>
                    <Card.Content extra>
                      <Button
                      //  onClick={ () => this.handleClick(person)}
                      >
                        See Home Planet
                      </Button>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default People;