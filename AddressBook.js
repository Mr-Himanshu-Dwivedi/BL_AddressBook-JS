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
    } catch (error) {
        console.error(error.message);
    }
}

// Adding Contacts
addContact(new Contact("Himanshu", "Dwivedi", "GLA UNIVERSITY", "Mathura", "UP", "281406", "1234567890", "Himanshu@gmail.com"));
addContact(new Contact("Amit", "Sharma", "Delhi University", "Delhi", "DL", "110007", "9876543210", "amit.sharma@example.com"));

// Display All Contacts
console.log("\nAddress Book:");
addressBook.forEach(contact => console.log(contact.toString()));
