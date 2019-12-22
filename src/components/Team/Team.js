import React from 'react';

import authData from '../../helpers/data/authData';
import playersData from '../../helpers/data/playersData';
import Players from '../Players/Players';
import PlayerForm from '../PlayerForm/PlayerForm';

class Team extends React.Component {
  state = {
    players: [],
    playerToEdit: {},
    editMode: false,
    showPlayerForm: false,
  }

  getPlayersData = (uid) => {
    playersData.getPlayersByUid(uid)
      .then((players) => {
        this.setState({ players });
      })
      .catch((error) => console.error(error));
  }

  addPlayer = (newPlayer) => {
    const uid = authData.getUid();
    playersData.addPlayers(newPlayer)
      .then(() => {
        this.getPlayersData(uid);
      })
      .catch((error) => console.error(error));
  }

  deleteSinglePlayer = (playerId) => {
    const uid = authData.getUid();
    playersData.deletePlayers(playerId)
      .then(() => {
        this.getPlayersData(uid);
      })
      .catch((error) => console.error(error));
  }

  updatePlayer = (playerId, updatedPlayer) => {
    const uid = authData.getUid();
    playersData.updatePlayers(playerId, updatedPlayer)
      .then(() => {
        this.getPlayersData(uid);
        this.setState({ editMode: false, showPlayerForm: false });
      })
      .catch((error) => console.error(error));
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showPlayerForm: true });
  }

  setPlayerToEdit = (player) => {
    this.setState({ playerToEdit: player });
  }

  setShowPlayerForm = () => {
    this.setState({ showPlayerForm: true });
  }

  componentDidMount() {
    const uid = authData.getUid();
    this.getPlayersData(uid);
  }

  render() {
    const { players } = this.state;
    return (
      <div>
        <button onClick={this.setShowPlayerForm}>Add New Player</button>
        {
          this.state.showPlayerForm && <PlayerForm addPlayer={this.addPlayer} editMode={this.state.editMode} playerToEdit={this.state.playerToEdit} updatePlayer={this.updatePlayer} />
        }
        <div className="d-flex flex-wrap container">
          <div className="row">
            { players.map((player) => <Players key={player.id} player={player} deleteSinglePlayer={this.deleteSinglePlayer} setEditMode={this.setEditMode} setPlayerToEdit={this.setPlayerToEdit} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
