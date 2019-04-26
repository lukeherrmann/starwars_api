class People extends React.Component {
    state = { people: [], press: false };
  
    componentDidMount() {
      this.setState({ press: false})
      axios.get(`https://swapi.co/api/people`).then(res => {
        res.data.results.map(person => {
          const personInfo = person;
          axios.get(`${person.homeworld}`).then(res1 => {
            this.setState({
              people: [
                { ...personInfo, worldInfo: res1.data },
                ...this.state.people
              ]
            });
          });
        });
      });
    }
  
    handleClick = (person) => {
      const press = this.state.press
      this.setState({ press: !press})
      if (press === true)
        return <Planets person={person} />
    }
  
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
                            Home Planet: {person.worldInfo.name}
                          </Feed.Summary>
                          <Feed.Summary>Gender: {person.gender}</Feed.Summary>
                          <Feed.Summary>
                            Hair Color: {person.hair_color}
                          </Feed.Summary>
                        </Feed>
                      </Card.Content>
                      <Card.Content extra>
                        <Button
                        color="blue"
                          onClick={ () => this.handleClick(person) }
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
  