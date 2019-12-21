import React from 'react';

class PlayerForm extends React.Component {
  render() {
    return (
      <div>
        <form className='PlayerForm'>
          <div className="form-group">
            <label for="playerName">Player's Name:</label>
            <input type="text" className="form-control" id="playerName" placeholder="Enter name" value= {() => {}} onChange={() => {}} />
          </div>
          <div className="form-group">
            <label for="playerImageUrl">Player Image URL:</label>
            <input type="text" className="form-control" id="playerImageUrl" value={() => {}} onChange={() => {}} />
          </div>
          <div>
            <button className="btn btn-primary" onClick={() => {}}>Add Player</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
