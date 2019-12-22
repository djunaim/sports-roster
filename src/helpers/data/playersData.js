import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlayersByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const playersObj = result.data;
      const players = [];
      if (playersObj !== null) {
        Object.keys(playersObj).forEach((fbId) => {
          const newPlayer = playersObj[fbId];
          newPlayer.id = fbId;
          players.push(newPlayer);
        });
      }
      resolve(players);
    })
    .catch((error) => reject(error));
});

const addPlayers = (playerInfo) => axios.post(`${baseUrl}/players.json`, playerInfo);

const deletePlayers = (playerId) => axios.delete(`${baseUrl}/players/${playerId}.json`);

const updatePlayers = (playerId, newPlayerInfo) => axios.put(`${baseUrl}/players/${playerId}.json`, newPlayerInfo);

export default {
  getPlayersByUid,
  addPlayers,
  deletePlayers,
  updatePlayers,
};
