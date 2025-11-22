import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PrimeAccount } from './class/PrimeAccount' 

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(5000);
console.log(companyAccount.getName());
companyAccount.deposit(500);
companyAccount.withdraw(2000);
companyAccount.getBalance();
console.log(companyAccount);

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'joão', 10)
peopleAccount.deposit(600);
peopleAccount.withdraw(200);
peopleAccount.getBalance();
console.log(peopleAccount.getName());
console.log(peopleAccount);

const primeaccount: PrimeAccount = new PrimeAccount('ricardo', 4321)
primeaccount.deposit(100);
primeaccount.withdraw(50);
primeaccount.getBalance();
console.log(primeaccount.getName());
console.log(primeaccount);
