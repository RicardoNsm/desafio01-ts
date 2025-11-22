export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

 

  getName = (): string => {
    return this.name
  }

  deposit  (balance: number): void {
    if(this.validateStatus()){
      this.setBalance(this.balance + balance)
      console.log('voce depositou R$ ' + balance)
    }else{
      console.log('Conta inválida')
    } 
    }

  withdraw = (balance: number): void => {
    if(this.validateStatus() && this.balance >= balance){
      this.setBalance(this.balance - balance)
      console.log('voce sacou R$ ' + balance)
    }else{
      console.log('Saldo insuficiente ou conta inválida')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }
  protected setBalance = (balance: number): void => {
    this.balance = balance
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

}
