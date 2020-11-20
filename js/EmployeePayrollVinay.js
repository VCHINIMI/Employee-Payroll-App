class EmployeePayrollData{

    constructor(...params) {
        this.name = params[0];
      this.salary = params[1];
      this.gender = params[2];
      this.startDate = params[3];
      this.department = params[4];
    }

    get name() {
        return this._name ;
    }
    set name(name) {
        const nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name)){
            this._name = name;
        }
        else {
            throw "Name is Incorrect !";
        }
    }
    get salary() {
        return this._salary;
    }
    set salary(salary){
        const salaryRegex = RegExp('^[1-9]{1}[0-9]{1,}$') ;
        if(salaryRegex.test(salary)){
            this._salary = salary ;
        }
        else
            throw "Salary is Incorrect"
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        if (gender != undefined) {
            let genderRegex = RegExp('^(Male|Female)$');
            if (genderRegex.test(gender)) {
                this._gender = gender;
            } else {
                throw "Gender incorrect";
            }
        }
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if(startDate <= Date.now()){
            this._startDate = startDate ; 
        }
    }

    
}