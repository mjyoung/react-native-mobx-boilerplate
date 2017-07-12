import { observable, action } from 'mobx';

class Store {
  @observable item = 'This is an item.';

  @action setItem(data) {
    this.item = data;
  }
}
export default Store;
