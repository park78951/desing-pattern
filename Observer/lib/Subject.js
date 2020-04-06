export default class Subject {
  observers = [];

  addObserver(observer) {
    return this.observers.push(observer);
  }

  removeObserver(observer) {
    const observerIdx = this.observers.findIndex(obs => obs === observer);

    if(observerIdx > -1) this.observers.splice(observerIdx, 1);
  }

  notify(data) {
    if(this.observers.length > 0) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
}