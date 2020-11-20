class EmployeePayrollData {

    constructor(...params) {
      this.name = params[0];
      this.salary = params[1];
      this.gender = params[2];
      this.startDate = params[3];
      this.department = params[4];
    }

    //narayan
    get id() {
      return this._id ;
    }
    set id() {
      this._id = id ;
    }

    get name() {
      return this._name;
    }
    set name(name) {
      let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
      if (nameRegex.test(name))
        this._name = name;
      else throw "Name is incorrect!";
    }

    get profilePic() {
      return this._profilePic ;
    }
    set profilePic(profilePic) {
      this._profilePic = profilePic;
    }

    get department() {
      return this._department;
    }
    set department(department) {
      this._department = department;
    }

    get salary() {
      return this._salary;
    }
    set salary(salary) { //narayan
      this._salary = salary;
    }

    get gender() {
      return this._gender;
    }
    set gender(gender) { //narayan
      this._gender = gender ;
    }

    get startDate() {
      return this._startDate;
    }
    set startDate(startDate) {
      this._startDate = startDate;
    }

    get note() {
      return this._note ;
    }
    set note(note) {
      this._note = note ;
    }

    toString() {
      const options = { year: 'numeric', month: 'long', day:'numeric'};
      const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
      return "id= " + this.id + ", Name: " + this.name + ", Gender= "+this.gender + ", Profile Pic= " + this.profilePic + ", Department= " + this.department + " ,Salary= " + this.salary + ", Start Date= " + empDate + ", note= "+this.note;
    }    
}   