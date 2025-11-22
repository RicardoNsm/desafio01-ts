import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (balance: number): void => {
    if(this.validateStatus()){

      this.setBalance(balance)

      console.log('voce pegou um emprestimo de R$ ' + balance)

    }else{
    console.log('Conta inválida, não foi possivel pegar o emprestimo')
    }
  }
}
