import { Component } from 'react';
import './btn-add.css';

export default class AddElementBtn extends Component {
  constructor() {
    super();
    this.state = {
      label: '',
    };

    /**
     * Обновляет state.label значением из input
     */
    this.onLabelChange = (e) => {
      this.setState({ label: e.target.value });
    };

    /**
     * Добавляет элемент
     */
    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.onAdded(this.state.label);
      this.setState({ label: '' });
    };
  }
  render() {
    return (
      <form className="button d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="Whats needs to be done"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary float-end">
          Add Element
        </button>
      </form>
    );
  }
}
