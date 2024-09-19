# Signup Form with Validation using React and Formik

This project implements a responsive signup form using React, Formik for form management, and Yup for validation. The form collects user details such as name, email, password, and password confirmation.

## Features

- Responsive design
- Client-side form validation
- User-friendly error messages
- Reset form functionality upon submission

## Tech Stack

- **React**: A JavaScript library for building user interfaces
- **Formik**: A library for managing forms in React
- **Yup**: A JavaScript schema builder for value parsing and validation
- **Tailwind CSS**: A utility-first CSS framework for styling

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (version 12 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/signup-form.git
   cd signup-form
   ```

#### Usage

Fill in the fields with your name, email, password, and confirm your password.
The form provides real-time validation and displays error messages for invalid inputs.
On successful submission, the form values will be logged to the console, and the form will reset.

#### Validation Rules

Name: Required, 2-25 characters long
Email: Required, must be a valid email format
Password: Required, 8-20 characters long, must include:
At least one uppercase letter
At least one lowercase letter
At least one number
At least one special character
Confirm Password: Required, must match the password

#### Assets

The project includes a user image located in the assets directory. Ensure that the image file is available at the specified path.

#### Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and create a pull request.

#### License

This project is licensed under the MIT License.

Acknowledgments
Formik for form handling
Yup for validation
Tailwind CSS for styling
Feel free to modify and use this template for your own projects!
