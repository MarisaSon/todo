import { Component } from 'react';

export default class ItemStatusFilter extends Component {
  constructor() {
    super();

    this.buttonsArr = [
      { name: 'All', label: 'All' },
      { name: 'Active', label: 'Active' },
      { name: 'Done', label: 'Done' },
    ];
  }

  render() {
    const buttons = this.buttonsArr.map((el) => {
      const isActive = this.props.status === el.name;
      const colorClass = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          type="button"
          className={`btn ${colorClass}`}
          key={el.name}
          onClick={() => this.props.onStatusChanged(el.name)}
        >
          {el.label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
