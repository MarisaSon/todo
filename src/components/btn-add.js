import { Component } from "react";
import "./btn-add.css";

export default class AddElementBtn extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="button">
        <button
          type="button"
          className="btn btn-outline-secondary float-end"
          onClick={() => this.props.onAdded("Hello")}
        >
          Add Element
        </button>
      </div>
    );
  }
}
