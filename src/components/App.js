import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  updateFilter = (type) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      }
    })
  }

  fetchPets = () => {
    let searchQuery = '';
    switch (this.state.filters.type) {
      case 'cat':
        searchQuery = '?type=cat'
        break;

      case 'dog':
        searchQuery = '?type=dog'
        break;

      case 'micropig':
        searchQuery = '?type=micropig'
        break;

      default:
        break;
    }

    fetch('/api/pets' + searchQuery)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          pets: data
        }))
  }

  handleAdoptPet = (id) => {
    console.log(`ID is ${id}`)
  }

  render() {
    return (
      <div className="ui container">

        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>

        <div className="ui container">
          <div className="ui grid">

            <div className="four wide column">
              <Filters
                onChangeType={this.updateFilter}
                onFindPetsClick={this.fetchPets} />
            </div>

            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={this.handleAdoptPet}
                pets={this.state.pets} />
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App
