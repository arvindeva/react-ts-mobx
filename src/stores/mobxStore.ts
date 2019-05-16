import { observable, action, computed } from 'mobx';

export interface IMobxStore {
  name: string;
  greeting: string;
  setName(name: string): void;
}

export class MobxStore implements IMobxStore {
  @observable name = 'He';

  @computed
  public get greeting(): string {
    return `Ummm... ${this.name}`;
  }

  @action.bound
  public setName(name: string): void {
    this.name = name;
  }
}
