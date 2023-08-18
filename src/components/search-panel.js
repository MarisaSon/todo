import './search-panel.css';
import { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
    this.state = { word: '' };

    /**
     * Обновляет стейт и вызывает внешнюю функцию onSearch 
     */
    this.onSearch = (e) => {
      const word = e.target.value;
      this.setState({ word: word });
      this.props.onSearch(word);
    };
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="search"
        onChange={this.onSearch}
        value={this.state.word}
      ></input>
    );
  }
}
