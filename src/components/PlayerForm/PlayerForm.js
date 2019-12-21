import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
  }

  state = {
    playerName: '',
    playerImageUrl: '',
    playerPosition: '',
  }

  addPlayerEvent = (e) => {
    e.preventDefault();
    const { addPlayer } = this.props;
    const newPlayer = {
      imageUrl: this.state.playerImageUrl,
      name: this.state.playerName,
      position: this.state.playerPosition,
      uid: authData.getUid(),
    };
    addPlayer(newPlayer);
    this.setState({ playerName: '', playerImageUrl: '', playerPosition: '' });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ playerImageUrl: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  render() {
    const { playerName, playerImageUrl, playerPosition } = this.state;
    return (
      <div>
        <form className='PlayerForm col-6 offset-3'>
          <div className="form-group">
            <label for="playerName">Player's Name:</label>
            <input
              type="text"
              className="form-control"
              id="playerName"
              placeholder="Enter name"
              value={playerName}
              onChange={this.nameChange}
              />
          </div>
          <div className="form-group">
            <label for="playerImageUrl">Player Image URL:</label>
            <input
              type="text"
              className="form-control"
              id="playerImageUrl"
              value={playerImageUrl}
              onChange={this.imageUrlChange}
              />
          </div>
          <div className="form-group">
            <label for="playerPosition">Player's Position:</label>
            <input
              type="text"
              className="form-control"
              id="playerPosition"
              value={playerPosition}
              onChange={this.positionChange}
              />
          </div>
          <div>
            <button className="btn btn-primary" onClick={this.addPlayerEvent}>Add Player</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
