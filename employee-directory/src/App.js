import React from 'react';
import './App.css';
import Header from './components/header/header';
import Card from './components/card/card';
import API from './utils/API';

class App extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    API.getRandomUser()
      .then(res => {
        this.setState({ employees: res.data.results })
      })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="header d-flex justify-content-between">
          <div>Photo</div>
          <div>Name</div>
          <div>Age</div>
          <div>E-mail</div>
          <div>Phone</div>
          <div>Address</div>
        </div>

        {
          this.state.employees.map((item) => (

            <Card
              picture={item.picture.large}
              title={item.name.title}
              first={item.name.first}
              last={item.name.last}
              age={item.dob.age}
              phone={item.cell}
              email={item.email}
              city={item.location.city}
              state={item.location.state}
              postcode={item.location.postcode}
            />
          ))
        }
      </div>
    )
  }
}

export default App;
