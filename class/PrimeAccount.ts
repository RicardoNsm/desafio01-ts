import { DioAccount } from "./DioAccount";

export class PrimeAccount extends DioAccount {
    
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit (balance: number): void {
    if(this.validateStatus()){
       
        super.deposit(balance + 10)

    }else{
    
    }
  }
}