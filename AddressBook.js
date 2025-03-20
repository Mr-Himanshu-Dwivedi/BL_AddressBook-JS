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

// Function to Add Contact
function addContact(contact) {
    try {
        addressBook.push(contact);
        console.log("Contact Added:", contact.toString());
        console.log();
    } catch (error) {
        console.error(error.message);
        console.log();
    }
}

// Function to Edit Contact
function editContact(name, updatedDetails) {
    let contact = addressBook.find(c => c.firstName === name);
    if (contact) {
        console.log("Editing Contact:", contact.toString());
        console.log();
        Object.assign(contact, updatedDetails);
        console.log("Contact Updated:", contact.toString());
        console.log();
    } else {
        console.log("Contact Not Found");
        console.log();
    }
}

// Function to Delete Contact
function deleteContact(name) {
    let index = addressBook.findIndex(c => c.firstName === name);
    if (index !== -1) {
        console.log("Deleting Contact:", addressBook[index].toString());
        console.log();
        addressBook.splice(index, 1);
        console.log("Contact Deleted Successfully");
        console.log();
    } else {
        console.log("Contact Not Found");
        console.log();
    }
}

// Function to Get Number of Contacts
function getContactCount() {
    let count = addressBook.reduce(count => count + 1, 0);
    console.log("Total Number of Contacts:", count);
    console.log();
}

// Adding Contacts
addContact(new Contact("Himanshu", "Dwivedi", "GLA UNIVERSITY", "Mathura", "UP", "281406", "1234567890", "Himanshu@gmail.com"));
addContact(new Contact("Hima", "Dwivedi", "UNIVERSITY", "Mathura", "UP", "281406", "1234567890", "Himanshu@gmail.com"));
addContact(new Contact("Anshu", "Dwivedi", "GLAU", "Mathura", "UP", "281406", "1234567890", "Himanshu@gmail.com"));
addContact(new Contact("Amit", "Sharma", "Delhi University", "Delhi", "DL", "110007", "9876543210", "amit.sharma@example.com"));

// Editing Contact
editContact("Himanshu", { address: "New GLA UNIVERSITY", city: "Agra", zip: "282001" });

// Deleting Contact
deleteContact("Himanshu");

// Display Total Contacts Count
getContactCount();

// Display All Contacts
console.log("Updated Address Book:");
addressBook.forEach(contact => console.log(contact.toString() + "\n"));
