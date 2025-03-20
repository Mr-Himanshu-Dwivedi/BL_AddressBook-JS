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

// Example with Valid Contact
try {
    let contact = new Contact("Himanshu", "Dwivedi", "GLA UNIVERSITY", "Mathura", "UP", "281406", "1234567890", "Himanshu@gmail.com");
    console.log(contact.toString());
} catch (error) {
    console.error(error.message);
}

// Example with Invalid Contact
try {
    let invalidContact = new Contact("hi", "Dw", "GLA", "Ma", "U", "123", "98765", "invalid.email");
    console.log(invalidContact.toString());
} catch (error) {
    console.error(error.message);
}
