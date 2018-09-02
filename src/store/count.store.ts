import { observable, action } from 'mobx';


export default class CountStore {
    @observable
    amount = 1;

    @action.bound
    add() {
        this.amount++;
    }
}