import React, {Component} from "react";

class DynamicTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      music: []
    };
  }


  handleClick() {
    var music = this.state.music;

    music.push(this.state.message);

    this.setState({
      music: music,
    });
  }

  handleItemChanged(i, event) {
    var music = this.state.music;
    music[i] = event.target.value;

    this.setState({
      music: music,
    });
  }

  handleItemDeleted(i) {
    var music = this.state.music;

    music.splice(i, 1);

    this.setState({
      music: music,
    });
  }

  renderRows() {
    var context = this;

    return this.state.music.map(function (o, i) {
      return (
        <tr key={"item-" + i}>
          <td>
            <input
              type="text"
              value={o}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td>
            <button onClick={context.handleItemDeleted.bind(context, i)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table className="">
          <thead>
            <tr>
              <th>music</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
        <hr />
        <input
          type="text"
          value={this.state.message}
          onChange={this.updateMessage.bind(this)}
        />
        <button onClick={this.handleClick.bind(this)}>Add Item</button>
      </div>
    );
  }
}

export default DynamicTable;