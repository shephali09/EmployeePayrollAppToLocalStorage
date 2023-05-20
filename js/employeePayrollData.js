class EmployeePayrollData {
    //getter and setter method
    get id() {
        return this._id = id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect';
    }
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get department() {
        return this._deparment;
    }
    set department(department) {
        this._deparment = department;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        let currentDate = new Date();
        if (startDate > currentDate) {
            throw "start date is a future date";
        }
        var diff = Math.abs(currentDate.getTime - startDate.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30) {
            throw 'start date is beyond 30 days'
        }
        this._startDate = startDate;
    }

    //method
    toString(){
        const options={year:'numeric',month:'long',day:'numeric'};
        const empDate=!this._startDate ? "undefined" :
        this.startDate.toLocalDateString("en-US",options);
        return "id=" + this.id + ",name='" +this.name + ", gender='" + this.gender +
        ",profilePic='" + this.profilePic + ", department=" + this.department +
        ", salary=" + this.salary + ", startDate=" + empDate + ", note=" + this.note;
    }
}
const save = () => {
    try{
        let employeePayrollData = createEmployeePayroll(); 
    } catch(e){
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueByID('#name');
    } catch(e){
        setTextValue('.text-error',e);
        throw e;
    }

    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueByID('#salary');
    employeePayrollData.note = getInputValueByID('#notes');
    let date = getInputValueByID('#day')+" "+getInputValueByID('#month')+" "+getInputValueByID('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked)    selItems.push(item.value);
    });
    return selItems;
}

const getInputValueByID = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}