import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';
import playerShape from '../../helpers/propz/playerShape';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
    editMode: PropTypes.bool,
    playerToEdit: playerShape.playerShape,
    updatePlayer: PropTypes.func,
  }

  state = {
    playerName: '',
    playerImageUrl: '',
    playerPosition: '',
  }

  componentDidMount() {
    const { editMode, playerToEdit } = this.props;
    if (editMode) {
      this.setState({ playerName: playerToEdit.name, playerImageUrl: playerToEdit.imageUrl, playerPosition: playerToEdit.position });
    }
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.playerToEdit.id !== this.props.playerToEdit.id) && this.props.editMode) {
      this.setState({ playerName: this.props.playerToEdit.name, playerImageUrl: this.props.playerToEdit.imageUrl, playerPosition: this.props.playerToEdit.position });
    }
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

  updatePlayerEvent = (e) => {
    e.preventDefault();
    const { updatePlayer, playerToEdit } = this.props;
    const updatedPlayer = {
      name: this.state.playerName,
      imageUrl: this.state.playerImageUrl,
      position: this.state.playerPosition,
      uid: playerToEdit.uid,
    };
    updatePlayer(playerToEdit.id, updatedPlayer);
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
    const { editMode } = this.props;
    return (
      <div>
        <form className='PlayerForm col-6 offset-3'>
          <div className="form-group">
            <label htmlFor="playerName">Player's Name:</label>
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
            <label htmlFor="playerImageUrl">Player Image URL:</label>
            <input
              type="text"
              className="form-control"
              id="playerImageUrl"
              value={playerImageUrl}
              onChange={this.imageUrlChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="playerPosition">Player's Position:</label>
            <input
              type="text"
              className="form-control"
              id="playerPosition"
              value={playerPosition}
              onChange={this.positionChange}
              />
          </div>
          <div>
            {
              (!editMode) ? (<button className="btn btn-primary" onClick={this.addPlayerEvent}>Add Player</button>)
                : (<button className="btn btn-secondary" onClick={this.updatePlayerEvent}>Update Player</button>)
            }
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
