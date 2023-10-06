
 abstract class  Department{

    // static property
    static fiscalYear = 2021

    name:string
    readonly id: string 
    private employees : string[] = []

    constructor(n:string, id:string){
        this.name = n;
        this.id = id
    }

    //the child class must have to implement the abstract method
    abstract describe(this:Department) : void

    addEmployee(name: string){
        //this.id = 'e' this cab not possible. read only can not change after initilization
        this.employees.push(name)
    }

    printEmployees(this:Department){
        console.log(this.employees.length);
        console.log(this.employees);
    }

    //static method
    static createEmployee(name:string){
        return{name}
    }
}

class ITDepartment extends Department{
    admins : string[]
    constructor(id:string, admins:string[]){
        super('IT', id)
        this.admins = admins
    }
    describe(){
        console.log('IT department ID:-'+this.id);
        
    }
}

class AccountingDepartment extends Department{

    private recentReport : string
    private static instance:  AccountingDepartment

    get mostRecentReport(){
        if(this.recentReport){
            return this.recentReport
        }
        throw new Error('No report found')
    }

    set mostRecentReport(value:string){
        if(!value){
            throw new Error('Please pass a valid value')
        }
        this.recentReport = value
    }
    
    //singletons pattern means only one instance can be created from the class. class can be instensiate only once
    private constructor(id:string, private reports:string[]){
        super('Accounting', id)
        this.recentReport = reports[0]
    }

    static getInstance(){
        if(AccountingDepartment.instance){
            return AccountingDepartment.instance
        }
        this.instance = new AccountingDepartment('d2', [])
        return this.instance
    }

    addReport(this:AccountingDepartment, text:string){
        this.reports.push(text)
        this.recentReport = text
    }
    showReport(this:AccountingDepartment){
        console.log(this.reports);
        
    }
    describe(){
        console.log('Accounting department ID:-'+this.id);
        
    }
}

console.log(Department.fiscalYear, Department.createEmployee('Mubeen'));


const IT = new ITDepartment('d1', ['Mubeen', 'Nishat'])
IT.describe()
IT.addEmployee('Mubeen')
IT.printEmployees()
console.log(IT);

const accounting = AccountingDepartment.getInstance()
accounting.addReport('Something went wrong!')
accounting.showReport()
accounting.mostRecentReport = 'Year end report';
console.log(accounting.mostRecentReport);
accounting.describe()

//const d = new Department("", "")//can not instinsiate abstract class 

