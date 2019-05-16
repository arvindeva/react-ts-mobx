import { observable, action, computed } from 'mobx';
import axios from 'axios';

export interface IMobxStore {
  name: string;
  greeting: string;
  setName(name: string): void;
  getDitto(): void;
}

export class MobxStore implements IMobxStore {
  @observable name = 'Hehe';

  @computed
  public get greeting(): string {
    return `Ummm... ${this.name}`;
  }

  @action.bound
  public setName(name: string): void {
    this.name = name;
  }

  @action
  public getDitto(): void {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => console.log(response.data.results))
      .catch(error => console.log(error));
  }
}
