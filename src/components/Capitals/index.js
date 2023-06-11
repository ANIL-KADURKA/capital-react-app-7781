import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    country: countryAndCapitalsList[0].country,
  }

  onChangeCapital = event => {
    const hello = event.target.value
    const hello2 = countryAndCapitalsList.find(Each => Each.id === hello)
    this.setState({
      country: hello2.country,
    })
  }

  render() {
    const {country} = this.state
    return (
      <div className="capitals-app">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>

          <div className="dropbox">
            <select className="capital-select" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capital-select" className="hello">
              is Capital of which country?
            </label>
          </div>
          <p className="para">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
