type func = (data?: any) => void

export class Event {
  eventArray: func[] = []

  add(func: func) {
    this.eventArray.push(func)
  }
  execute() {
    this.eventArray.map((func: func) => {
      func()
    })
  }
}
