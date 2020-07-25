import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    queryTerm: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const {queryTerm} = event.target

    this.setState({
      queryTerm: event.target.value
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state.queryTerm)
    this.setState(this.initialState)
  }

  render() {
    const { queryTerm } = this.state;

    return (
      <form>
        <label htmlFor="queryTerm">Query (no space)</label>
        <input
          type="text"
          name="queryTerm"
          id="queryTerm"
          value={queryTerm}
          onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
