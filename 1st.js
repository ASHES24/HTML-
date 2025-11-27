/**
 * Student Portal Signup System - Quick Reference Guide
 * 
 * This project demonstrates a complete form validation system with:
 * - Real-time form validation
 * - Dynamic error messages
 * - User-friendly UI/UX
 * - Responsive design
 * 
 * FILES INCLUDED:
 * 1. signup.html - Main HTML form with styling
 * 2. validation.js - Form validation logic
 * 3. 1st.js - This reference guide
 * 
 * HOW TO RUN:
 * 1. Open signup.html in your web browser
 * 2. Fill in the form fields
 * 3. See real-time validation as you type
 * 4. Submit to see success message
 * 
 * VALIDATION RULES:
 * ==================
 * 
 * Full Name:
 * - Required field
 * - Minimum 3 characters
 * 
 * Email:
 * - Required field
 * - Must contain @ symbol
 * - Must contain . (dot) symbol
 * - Must match email format pattern
 * 
 * Password:
 * - Required field
 * - Minimum 6 characters
 * 
 * Confirm Password:
 * - Required field
 * - Must match password field exactly
 * 
 * Phone Number:
 * - Required field
 * - Must contain only digits (0-9)
 * - Minimum 10 digits
 * 
 * KEY FEATURES:
 * =============
 * 
 * 1. Real-time Validation:
 *    - Validates each field when user leaves it (blur event)
 *    - Provides instant feedback
 * 
 * 2. Dynamic Error Messages:
 *    - Shows specific error message for each validation failure
 *    - Uses DOM manipulation (innerText, classList)
 *    - Error messages appear/disappear dynamically
 * 
 * 3. Visual Feedback:
 *    - Error inputs get red border and light red background
 *    - Valid inputs get green border and light green background
 *    - Success message with checkmark appears after submission
 * 
 * 4. Form Prevention:
 *    - Form submission is prevented if validation fails
 *    - Only submits when all fields are valid
 * 
 * 5. Success Handling:
 *    - Shows "Registration Successful!" message
 *    - Auto-hides after 5 seconds
 *    - Form resets to initial state
 * 
 * JAVASCRIPT FUNCTIONS:
 * =====================
 * 
 * validateFullName()
 *   - Checks if full name is provided and at least 3 characters
 *   - Returns: boolean
 * 
 * validateEmail()
 *   - Checks for @, ., and valid email format
 *   - Uses regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 *   - Returns: boolean
 * 
 * validatePassword()
 *   - Checks if password is provided and at least 6 characters
 *   - Returns: boolean
 * 
 * validateConfirmPassword()
 *   - Checks if confirm password matches password field
 *   - Returns: boolean
 * 
 * validatePhone()
 *   - Checks if phone contains only digits
 *   - Uses regex: /^\d+$/
 *   - Checks minimum 10 digits
 *   - Returns: boolean
 * 
 * validateForm()
 *   - Validates all fields at once
 *   - Returns true only if ALL validations pass
 *   - Returns: boolean
 * 
 * showError(input, errorElement, message)
 *   - Displays error message and styles the input
 *   - Adds red background to input
 *   - Shows error text below input
 * 
 * clearError(input, errorElement)
 *   - Removes error styling
 *   - Adds green background to indicate valid input
 *   - Clears error message text
 * 
 * showSuccessMessage()
 *   - Displays success message after form submission
 *   - Auto-hides after 5 seconds
 * 
 * resetForm()
 *   - Clears all form inputs
 *   - Removes all error/success styling
 *   - Hides success message
 * 
 * EVENT LISTENERS:
 * ================
 * 
 * form submit event:
 *   - Prevents default submission
 *   - Validates entire form
 *   - Shows success message if valid
 *   - Logs form data to console
 * 
 * input blur event:
 *   - Triggers validation for individual fields
 *   - Provides real-time feedback
 *   - Applied to: fullName, email, password, confirmPassword, phone
 * 
 * confirmPassword input event:
 *   - Real-time checking if passwords match
 *   - Provides instant feedback
 * 
 * password input event:
 *   - Checks if password length reaches 6 characters
 *   - Clears error if condition is met
 * 
 * VALIDATION LOGIC:
 * =================
 * 
 * Email Validation:
 *   1. Check if email is not empty
 *   2. Check if @ symbol exists
 *   3. Check if . (dot) symbol exists
 *   4. Verify against email regex pattern
 * 
 * Phone Validation:
 *   1. Check if phone is not empty
 *   2. Remove any whitespace
 *   3. Check if ALL characters are digits (0-9)
 *   4. Check minimum 10 digits
 * 
 * Password Matching:
 *   1. Compare password value with confirmPassword value
 *   2. Must be exact match
 *   3. Shows specific error if mismatch
 * 
 * STYLING FEATURES:
 * =================
 * 
 * - Gradient background (purple)
 * - Centered form on page
 * - Smooth transitions and hover effects
 * - Mobile responsive design
 * - Color-coded inputs (red for error, green for valid)
 * - Professional typography
 * - Box shadow for depth
 * 
 * HOW TO MODIFY:
 * ===============
 * 
 * Add more validation rules:
 *   1. Create new validation function in validation.js
 *   2. Call it from validateForm()
 *   3. Create corresponding error message div in HTML
 * 
 * Change validation messages:
 *   - Edit the message text in showError() calls
 *   - Or create a messages object for centralized management
 * 
 * Customize styling:
 *   - Modify CSS in <style> section of signup.html
 *   - Change colors, fonts, spacing as needed
 * 
 * Add additional fields:
 *   1. Add input field in HTML form
 *   2. Create validation function in validation.js
 *   3. Add event listeners
 *   4. Call validation in validateForm()
 * 
 * BROWSER COMPATIBILITY:
 * ======================
 * 
 * Works on all modern browsers that support:
 * - ES6 JavaScript (const, arrow functions, template literals)
 * - DOM APIs (querySelector, addEventListener, classList)
 * - CSS Grid and Flexbox
 * 
 * FUTURE ENHANCEMENTS:
 * ====================
 * 
 * 1. Backend integration for actual registration
 * 2. Password strength indicator
 * 3. Username availability check
 * 4. Email verification via OTP
 * 5. Two-factor authentication
 * 6. Social login integration
 * 7. Remember me functionality
 * 8. Password visibility toggle
 * 9. Input debouncing for better performance
 * 10. Accessibility improvements (ARIA labels)
 * 
 * TESTING:
 * ========
 * 
 * Test Cases:
 * 1. Submit empty form - should show all errors
 * 2. Enter invalid email (no @) - should show error
 * 3. Enter invalid email (no .) - should show error
 * 4. Enter password < 6 chars - should show error
 * 5. Enter mismatched passwords - should show error
 * 6. Enter phone with letters - should show error
 * 7. Enter valid data - should show success message
 * 8. Fill form, clear and resubmit - should work again
 */

// Example of how to extend validation with custom rules
function customPhoneValidation(phone) {
    // Can be customized based on country requirements
    // E.g., for US: must be 10 digits
    // E.g., for Bangladesh: must be 11 digits starting with 01
    return phone.length >= 10 && /^\d+$/.test(phone);
}

// Example of how to add password strength checker
function checkPasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 6) strength++;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    return {
        score: strength,
        level: strength <= 2 ? 'Weak' : strength <= 3 ? 'Fair' : strength <= 4 ? 'Good' : 'Strong'
    };
}

console.log('Student Portal Signup System Loaded Successfully!');
console.log('Open signup.html to see the registration form.');
