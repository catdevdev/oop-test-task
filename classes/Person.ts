// class Person
// {
//     protected string name;
//     protected string fio;
//     protected int salary; //оклад
//     public string Name
//     {
//     get { return name; }
//     set { name = value; }
//     }
//     public string Fio
//     {
//     get { return fio; }
//     set { fio = value; }
//     }
//     public int Salary
//     {
//     get { return salary; }
//     set { salary = value; }
//     }
// }

export class Person {
  protected name: string
  protected fio: string
  protected salary: number

  // get set Name
  get Name(): string {
    return this.name
  }
  set Name(value: string) {
    this.name = value
  }
  // get set Fio
  get Fio(): string {
    return this.fio
  }
  set Fio(value: string) {
    this.fio = value
  }
  // get set Fio
  get Salary(): number {
    return this.salary
  }
  set Salary(value: number) {
    this.salary = value
  }
}
