import React from 'react';
import PropTypes from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

class Players extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deleteSinglePlayer: PropTypes.func,
    setEditMode: PropTypes.func,
    setPlayerToEdit: PropTypes.func,
  }

  deleteSinglePlayerEvent = (e) => {
    e.preventDefault();
    const { deleteSinglePlayer, player } = this.props;
    deleteSinglePlayer(player.id);
  }

  setEditMode = (e) => {
    const { setEditMode, setPlayerToEdit, player } = this.props;
    e.preventDefault();
    setEditMode(true);
    setPlayerToEdit(player);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Player col-md-3">
        <div className="card">
          <img src={player.imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{player.name}</h5>
            <p className="card-text">{player.position}</p>
            <button className="btn btn-danger" onClick={this.deleteSinglePlayerEvent}>X</button>
            <button className="btn btn-secondary" onClick={this.setEditMode}>Edit Player</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Players;
