"use strict";
class Department {
    constructor(n, id) {
        this.employees = [];
        this.name = n;
        this.id = id;
    }
    addEmployee(name) {
        //this.id = 'e' this cab not possible. read only can not change after initilization
        this.employees.push(name);
    }
    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    //static method
    static createEmployee(name) {
        return { name };
    }
}
// static property
Department.fiscalYear = 2021;
class ITDepartment extends Department {
    constructor(id, admins) {
        super('IT', id);
        this.admins = admins;
    }
    describe() {
        console.log('IT department ID:-' + this.id);
    }
}
class AccountingDepartment extends Department {
    //singletons pattern means only one instance can be created from the class. class can be instensiate only once
    constructor(id, reports) {
        super('Accounting', id);
        this.reports = reports;
        this.recentReport = reports[0];
    }
    get mostRecentReport() {
        if (this.recentReport) {
            return this.recentReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass a valid value');
        }
        this.recentReport = value;
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return AccountingDepartment.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    addReport(text) {
        this.reports.push(text);
        this.recentReport = text;
    }
    showReport() {
        console.log(this.reports);
    }
    describe() {
        console.log('Accounting department ID:-' + this.id);
    }
}
console.log(Department.fiscalYear, Department.createEmployee('Mubeen'));
const IT = new ITDepartment('d1', ['Mubeen', 'Nishat']);
IT.describe();
IT.addEmployee('Mubeen');
IT.printEmployees();
console.log(IT);
const accounting = AccountingDepartment.getInstance();
accounting.addReport('Something went wrong!');
accounting.showReport();
accounting.mostRecentReport = 'Year end report';
console.log(accounting.mostRecentReport);
accounting.describe();
//const d = new Department("", "")//can not instinsiate abstract class 
