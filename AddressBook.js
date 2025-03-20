class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName) || !/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) 
            throw new Error("First and Last Name should start with a capital letter and have at least 3 characters.");

        if (!/^[A-Za-z0-9\s]{4,}$/.test(address) || !/^[A-Za-z\s]{4,}$/.test(city)) 
            throw new Error("Address and City must have at least 4 characters.");

        if (!/^[A-Za-z]{2,}$/.test(state)) 
            throw new Error("State must have at least 2 characters.");

        if (!/^\d{6}$/.test(zip)) 
            throw new Error("Zip should be a 6-digit number.");

        if (!/^\d{10}$/.test(phone)) 
            throw new Error("Phone number should be a 10-digit number.");

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) 
            throw new Error("Invalid email format.");

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, City: ${this.city}, State: ${this.state}, Zip: ${this.zip}, Phone: ${this.phone}, Email: ${this.email}`;
    }
}

// Address Book Array
let addressBook = [];

// Function to Check for Duplicate Contacts
function isDuplicate(contact) {
    return addressBook.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName);
}

// Function to Add Contact
function addContact(contact) {
    try {
        if (isDuplicate(contact)) {
            console.log("Duplicate Contact Found. Cannot Add:");
            console.log(contact.toString());
            console.log("---------------------------------------------------------------------------------");
            return;
        }
        addressBook.push(contact);
        console.log("Contact Added:", contact.toString());
        console.log();
    } catch (error) {
        console.error(error.message);
        console.log("---------------------------------------------------------------------------------");
    }
}

// Function to Edit Contact
function editContact(name, updatedDetails) {
    let contact = addressBook.find(c => c.firstName === name);
    if (contact) {
        console.log("Editing Contact:", contact.toString());
        console.log("---------------------------------------------------------------------------------");
        Object.assign(contact, updatedDetails);
        console.log("Contact Updated:", contact.toString());
        console.log("---------------------------------------------------------------------------------");
    } else {
        console.log("Contact Not Found");
        console.log("---------------------------------------------------------------------------------");
    }
}

// Function to Delete Contact
function deleteContact(name) {
    let index = addressBook.findIndex(c => c.firstName === name);
    if (index !== -1) {
        console.log("Deleting Contact:", addressBook[index].toString());
        console.log("---------------------------------------------------------------------------------");
        addressBook.splice(index, 1);
        console.log("Contact Deleted Successfully");
        console.log("---------------------------------------------------------------------------------");
    } else {
        console.log("Contact Not Found");
        console.log("---------------------------------------------------------------------------------");
    }
}

// Function to Get Number of Contacts
function getContactCount() {
    let count = addressBook.reduce(count => count + 1, 0);
    console.log("Total Number of Contacts:", count);
    console.log("---------------------------------------------------------------------------------");
}

// Function to Search Persons by City
function searchByCity(city) {
    let results = addressBook.filter(contact => contact.city === city);
    console.log(`Contacts in ${city}:`);
    results.forEach(contact => console.log(contact.toString()));
    console.log("---------------------------------------------------------------------------------");
}

// Function to Search Persons by State
function searchByState(state) {
    let results = addressBook.filter(contact => contact.state === state);
    console.log(`Contacts in ${state}:`);
    results.forEach(contact => console.log(contact.toString()));
    console.log("---------------------------------------------------------------------------------");
}

// Adding Contacts
addContact(new Contact("Himanshu", "Dwivedi", "GLA UNIVERSITY", "Mathura", "UP", "281406", "1234567890", "himanshu@gmail.com"));
addContact(new Contact("Hima", "Dwivedi", "UNIVERSITY", "Mathura", "UP", "281406", "1234567891", "hima@gmail.com"));
addContact(new Contact("Anshu", "Dwivedi", "GLAU", "Mathura", "UP", "281406", "1234567892", "anshu@gmail.com"));
addContact(new Contact("Amit", "Sharma", "Delhi University", "Delhi", "DL", "110007", "9876543210", "amit.sharma@example.com"));
addContact(new Contact("Rahul", "Verma", "Mumbai Street", "Mumbai", "MH", "400001", "9234567890", "rahul.verma@example.com"));
addContact(new Contact("Priya", "Singh", "Sector 5", "Noida", "UP", "201301", "9345678901", "priya.singh@example.com"));
addContact(new Contact("Neha", "Kapoor", "Park Avenue", "Pune", "MH", "411001", "9123456789", "neha.kapoor@example.com"));

// Adding Duplicate Contacts (Should be blocked)
addContact(new Contact("Himanshu", "Dwivedi", "GLA UNIVERSITY", "Mathura", "UP", "281406", "1234567890", "himanshu@gmail.com"));
addContact(new Contact("Amit", "Sharma", "Delhi University", "Delhi", "DL", "110007", "9876543210", "amit.sharma@example.com"));

// Editing Contact
editContact("Himanshu", { address: "New GLA UNIVERSITY", city: "Agra", zip: "282001" });

// Deleting Contact
deleteContact("Himanshu");

// Display Total Contacts Count
getContactCount();

// Search for Contacts in Mathura
searchByCity("Mathura");

// Search for Contacts in UP
searchByState("UP");

// Display All Contacts
console.log("Updated Address Book:");
addressBook.forEach(contact => console.log(contact.toString() + "\n"));
