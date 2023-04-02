import GameSaving from './GameSaving';
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      read().then((data) => {
        json(data).then((value) => resolve(
          new GameSaving(
            JSON.parse(value).id,
            JSON.parse(value).created,
            JSON.parse(value).userInfo,
          ),
        ));
      });
    });
  }
}
