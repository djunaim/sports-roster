import React from 'react';

import playerShape from '../../helpers/propz/playerShape';

class Players extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Player col-md-3">
        <div className="card">
          <img src={player.imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{player.className}</h5>
            <button className="btn btn-danger" onClick={() => {}}>X</button>
            <button className="btn btn-secondary" onClick={() => {}}>Edit Player</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Players;
