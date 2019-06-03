import { observable, action, computed } from 'mobx';
import axios from 'axios';

export interface IMobxStore {
  name: string;
  greeting: string;
  isLoading: boolean;
  pokemonList: any[];
  setName(name: string): void;
  getDitto(): void;
}

export class MobxStore implements IMobxStore {
  @observable name = 'Hehe';
  @observable isLoading = false;
  @observable pokemonList = [];

  @computed
  public get greeting(): string {
    return `Ummm... ${this.name}`;
  }

  @action.bound
  public setName(name: string): void {
    this.name = name;
  }

  @action.bound
  public getDitto(): void {
    this.isLoading = true;
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => {
        this.isLoading = false;
        this.pokemonList = response.data.results;
        console.log(response.data.results);
      })
      .catch(error => {
        this.isLoading = false;
        console.log(error);
      });
  }
}
