export class CounterService {
  toInactiveCount = 0;
  toActiveCount = 0;

  onToInactive() {
    this.toInactiveCount++;
  }
  onToActive() {
    this.toActiveCount++;
  }
}
