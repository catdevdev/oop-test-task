// class Seller : Person, ISalSum
// {
//     protected int experience; //стаж
//     protected double salarysum; //зарплата
//     //
//     public event EventHandler AddSeller;
//     public int Experience
//     {
//         get { return experience; }
//         set { experience = value; }
//     }
//     public double Salarysum
//     {
//         get { return salarysum; }
//         set { salarysum = value; }
//     }
//     // расчет зарплаты продавца
//     double ISalSum.CalcSum()
//     {
//         salarysum = this.Salary + experience * 0.2;

//     if (AddSeller != null) AddSeller(this, null);
//         return salarysum;
//     }
// }
import { Person } from './Person'
import { ISalSum } from './ISalSum'
export class Seller extends Person implements ISalSum {
  protected experience: number
  protected salarysum: number

  // get set Experience
  get Experience(): number {
    return this.experience
  }
  set Experience(value: number) {
    this.experience = value
  }
  // get set Salarysum
  get Salarysum(): number {
    return this.salarysum
  }
  set Salarysum(value: number) {
    this.salarysum = value
  }

  CalcSum(): number {
    this.salarysum = this.Salary + this.experience * 0.2
    return this.salarysum
  }
}
