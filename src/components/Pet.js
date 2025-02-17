import React from 'react'

class Pet extends React.Component {

  constructor(props) {
    super(props)
    this.state = ({
      gender: '',
      adopted: this.props.pet.isAdopted
    })
  }

  handleAdopt = (event) => {
    this.setState({
      adopted: true
    })
  }

  displayMOrF = () => {
    console.log('running')
    if (this.props.pet.gender === 'male') {
      console.log('male')
      this.setState({
        gender: '♀'
      })
    }
    else {
      console.log('female')
      this.setState({
        gender: '♂'
      })

    }
  }

  render() {
    
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender}
            {this.props.pet.name}
            
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}kg</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={event => this.handleAdopt(event)}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
