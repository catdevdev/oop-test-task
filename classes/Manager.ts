import { ISalSum } from './ISalSum'

// class Manager : Seller, ISalSum
// {
//     int subordinate; //количество подчиненных
//     public static bool f = false;
//     public int Subordinate
//     {
//         get { return subordinate; }
//         set { subordinate = value; }
//     }
//     double ISalSum.CalcSum()//расчет зарплаты менеджера
//     {
//         Salarysum = this.Salary + this.Experience * 0.2 + subordinate * 0.2;
//         return Salarysum;
//     }
//     //
//     public void DoEvent(object sender, EventArgs e)
//     {
//         salarysum = salary + experience * 0.2 + subordinate * 0.2;//0.2
//     }
// }
import { Seller } from './Seller'
export class Manager extends Seller implements ISalSum {
  subordinate: number
  public static f: boolean
  // get set Subordinate
  get Subordinate(): number {
    return this.subordinate
  }
  set Subordinate(value: number) {
    this.subordinate = value
  }
  CalcSum(): number {
    this.Subordinate =
      this.Salary + this.Experience * 0.2 + this.subordinate * 0.2
    return this.Subordinate
  }
  DoEvent(): void {
    console.log(this.Salary)
    this.salarysum =
      this.salary + this.experience * 0.2 + this.subordinate * 0.2
  }
}
