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

interface 

class Seller extends Person implements  {
  protected experience: number;
  protected salarysum: number;
}
