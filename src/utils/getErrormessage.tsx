
interface ErrorProps {
    code : string , 
    message : string
}


// 2. Create the mapping of Codes -> Custom Messages
const AUTH_ERROR_MESSAGES: Record<string, string> = {
  "auth/email-already-in-use": "User already has an account. Please Sign In.",
  "auth/weak-password": "Password is too weak. Please use at least 6 characters.",
  "auth/invalid-email": "The email address provided is invalid.",
  "auth/user-not-found": "No account found with this email.",
  "auth/wrong-password": "The password is incorrect.",
  "auth/too-many-requests": "Too many attempts. Please try again later.",
  "auth/network-request-failed": "Network error. Please check your connection.",
  "auth/popup-closed-by-user": "Sign-in popup was closed before completion.",
  "auth/credential-already-in-use": "This account is already linked to another user.",
  "auth/password-does-not-meet-requirements": "missing password requerments. ",
  "auth/invalid-credential" : "Incorrect email or password.",
  

};





// 3. Helper function to get the message safely
export const getCustomErrorMessage = ({code , message}:ErrorProps): string => {
    console.log(code)
  return AUTH_ERROR_MESSAGES[code] || message || "An unexpected error occurred. Please try again.";
};