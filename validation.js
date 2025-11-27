/**
 * Student Portal Signup System - Form Validation
 * This script handles all form validation logic for the signup form
 */

// Get form and form elements
const signupForm = document.getElementById('signupForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const phoneInput = document.getElementById('phone');
const successMessage = document.getElementById('successMessage');

// Get error message elements
const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const phoneError = document.getElementById('phoneError');

/**
 * Validate Full Name
 * @returns {boolean} - True if valid, false otherwise
 */
function validateFullName() {
    const fullName = fullNameInput.value.trim();
    const fullNameGroup = fullNameInput.parentElement;

    if (!fullName) {
        showError(fullNameInput, fullNameError, 'Full name is required');
        fullNameGroup.classList.add('error');
        return false;
    }

    if (fullName.length < 3) {
        showError(fullNameInput, fullNameError, 'Full name must be at least 3 characters');
        fullNameGroup.classList.add('error');
        return false;
    }

    clearError(fullNameInput, fullNameError);
    fullNameGroup.classList.remove('error');
    return true;
}

/**
 * Validate Email
 * Must contain @ and .
 * @returns {boolean} - True if valid, false otherwise
 */
function validateEmail() {
    const email = emailInput.value.trim();
    const emailGroup = emailInput.parentElement;
    
    // Check if email is empty
    if (!email) {
        showError(emailInput, emailError, 'Email is required');
        emailGroup.classList.add('error');
        return false;
    }

    // Check for @ symbol
    if (!email.includes('@')) {
        showError(emailInput, emailError, 'Email must contain @ symbol');
        emailGroup.classList.add('error');
        return false;
    }

    // Check for dot (.)
    if (!email.includes('.')) {
        showError(emailInput, emailError, 'Email must contain a domain (.)');
        emailGroup.classList.add('error');
        return false;
    }

    // Check for valid email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError(emailInput, emailError, 'Please enter a valid email format');
        emailGroup.classList.add('error');
        return false;
    }

    clearError(emailInput, emailError);
    emailGroup.classList.remove('error');
    return true;
}

/**
 * Validate Password
 * Must be at least 6 characters
 * @returns {boolean} - True if valid, false otherwise
 */
function validatePassword() {
    const password = passwordInput.value;
    const passwordGroup = passwordInput.parentElement;

    if (!password) {
        showError(passwordInput, passwordError, 'Password is required');
        passwordGroup.classList.add('error');
        return false;
    }

    if (password.length < 6) {
        showError(passwordInput, passwordError, 'Password must be at least 6 characters');
        passwordGroup.classList.add('error');
        return false;
    }

    clearError(passwordInput, passwordError);
    passwordGroup.classList.remove('error');
    return true;
}

/**
 * Validate Confirm Password
 * Must match the password field
 * @returns {boolean} - True if valid, false otherwise
 */
function validateConfirmPassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const confirmPasswordGroup = confirmPasswordInput.parentElement;

    if (!confirmPassword) {
        showError(confirmPasswordInput, confirmPasswordError, 'Please confirm your password');
        confirmPasswordGroup.classList.add('error');
        return false;
    }

    if (password !== confirmPassword) {
        showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match');
        confirmPasswordGroup.classList.add('error');
        return false;
    }

    clearError(confirmPasswordInput, confirmPasswordError);
    confirmPasswordGroup.classList.remove('error');
    return true;
}

/**
 * Validate Phone Number
 * Must contain only digits
 * @returns {boolean} - True if valid, false otherwise
 */
function validatePhone() {
    const phone = phoneInput.value.trim();
    const phoneGroup = phoneInput.parentElement;

    if (!phone) {
        showError(phoneInput, phoneError, 'Phone number is required');
        phoneGroup.classList.add('error');
        return false;
    }

    // Check if phone contains only digits using regex
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
        showError(phoneInput, phoneError, 'Phone number must contain only digits (0-9)');
        phoneGroup.classList.add('error');
        return false;
    }

    // Check minimum length (optional, typical phone numbers are 10+ digits)
    if (phone.length < 10) {
        showError(phoneInput, phoneError, 'Phone number must be at least 10 digits');
        phoneGroup.classList.add('error');
        return false;
    }

    clearError(phoneInput, phoneError);
    phoneGroup.classList.remove('error');
    return true;
}

/**
 * Display error message and style input
 * @param {HTMLElement} input - The input element
 * @param {HTMLElement} errorElement - The error message element
 * @param {string} message - The error message to display
 */
function showError(input, errorElement, message) {
    input.classList.add('error-input');
    input.classList.remove('success-input');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

/**
 * Clear error message and reset input styling
 * @param {HTMLElement} input - The input element
 * @param {HTMLElement} errorElement - The error message element
 */
function clearError(input, errorElement) {
    input.classList.remove('error-input');
    input.classList.add('success-input');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

/**
 * Validate entire form
 * @returns {boolean} - True if all fields are valid, false otherwise
 */
function validateForm() {
    // Validate all fields
    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isPhoneValid = validatePhone();

    // Return true only if all fields are valid
    return isFullNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isPhoneValid;
}

/**
 * Reset form to initial state
 */
function resetForm() {
    // Clear all inputs
    signupForm.reset();

    // Clear all error messages and styling
    const inputs = [fullNameInput, emailInput, passwordInput, confirmPasswordInput, phoneInput];
    const errors = [fullNameError, emailError, passwordError, confirmPasswordError, phoneError];

    inputs.forEach(input => {
        input.classList.remove('error-input', 'success-input');
        input.parentElement.classList.remove('error');
    });

    errors.forEach(error => {
        error.textContent = '';
        error.classList.remove('show');
    });

    // Hide success message
    successMessage.classList.remove('show');
}

/**
 * Show success message
 */
function showSuccessMessage() {
    successMessage.classList.add('show');

    // Auto-hide success message after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
}

// Add form submission event listener
signupForm.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Validate the form
    if (validateForm()) {
        // All validations passed
        console.log('Form is valid! Submitting...');
        console.log({
            fullName: fullNameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim()
        });

        // Show success message
        showSuccessMessage();

        // Reset form after 2 seconds
        setTimeout(() => {
            resetForm();
        }, 2000);
    } else {
        // Validation failed
        console.log('Form validation failed!');
    }
});

// Add real-time validation listeners for better UX
fullNameInput.addEventListener('blur', validateFullName);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);
confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
phoneInput.addEventListener('blur', validatePhone);

// Add real-time validation on input for confirm password to show match status
confirmPasswordInput.addEventListener('input', function() {
    if (this.value) {
        validateConfirmPassword();
    }
});

// Add real-time validation on input for password to check length
passwordInput.addEventListener('input', function() {
    if (this.value.length >= 6) {
        clearError(passwordInput, passwordError);
    }
});
