import styles from './search-panel.module.css';
import cx from 'classnames';
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
        className={cx('form-control', 'search-input', styles['search-input'])}
        placeholder="search"
        onChange={this.onSearch}
        value={this.state.word}
      ></input>
    );
  }
}
