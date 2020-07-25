import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {

  state = {
    queries: [],
  }

  removeCharacter = (index) => {
    const {characters} = this.state;

    this.setState({
      characters: characters.filter((character,i) => {
        return i !== index
      })
    })
  }

  handleSubmit = (queryTerm) => {
    this.queryWiki(queryTerm)
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  queryWiki(queryTerm) {
    var url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${queryTerm}&format=json&origin=*`

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          queries: [...this.state.queries,result]
        })
      })
  }

  render() {
    const {queries} = this.state;

    /*return (
      <div className="container">
        <h1> React Tutorial</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )*/

    const result = queries.map((entry, index) => {
      console.log(entry)
      return <li key={index}>{entry}</li>
    })

    return (
      <div className="container">
        <ul>{result}</ul>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App
