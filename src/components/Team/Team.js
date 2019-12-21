import React from 'react';

import authData from '../../helpers/data/authData';
import playersData from '../../helpers/data/playersData';
import Players from '../Players/Players';
import PlayerForm from '../PlayerForm/PlayerForm';

class Team extends React.Component {
  state = {
    players: [],
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

  componentDidMount() {
    const uid = authData.getUid();
    this.getPlayersData(uid);
  }

  render() {
    const { players } = this.state;
    return (
      <div>
        <PlayerForm addPlayer={this.addPlayer}/>
        <div className="d-flex flex-wrap container">
          <div className="row">
            { players.map((player) => <Players key={player.id} player={player}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
