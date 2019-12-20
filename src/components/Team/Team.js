import React from 'react';

import authData from '../../helpers/data/authData';
import playersData from '../../helpers/data/playersData';
import Players from '../Players/Players';

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

  componentDidMount() {
    const uid = authData.getUid();
    this.getPlayersData(uid);
  }

  render() {
    const { players } = this.state;
    return (
      <div className="d-flex flex-wrap container">
        <div className="row">
          { players.map((player) => <Players key={player.id} player={player}/>)}
        </div>
      </div>
    );
  }
}

export default Team;
