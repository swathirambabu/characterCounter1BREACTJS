import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'

class App extends Component {
  state = {
    searchInput: '',
    wordList: [],
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddItems = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const addItems = {
      id: uuidv4(),
      searchItem: searchInput,
    }
    this.setState(prevState => ({wordList: [...prevState.wordList, addItems]}))
  }

  render() {
    const {searchInput, wordList} = this.state
    return (
      <div className="main-container">
        <div className="container1">
          <h1 className="main-heading">Count the characters like a Boss...</h1>

          <div className="container">
            {wordList.length > 0 ? (
              <ul className="list-container">
                {wordList.map(each => (
                  <li key={each.id}>
                    <p key={each.id} className="list-item">
                      {each.item}:{each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="image"
              />
            )}
          </div>
        </div>

        <div className="container2">
          <h1 className="heading">Character Counter</h1>
          <div>
            <form onSubmit={this.onAddItems}>
              <div className="input-container">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter the Characters here"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
                <button
                  type="button"
                  className="button"
                  onClick={this.onAddItems}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
