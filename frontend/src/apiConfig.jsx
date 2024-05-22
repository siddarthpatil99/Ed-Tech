const API_BASEURL = import.meta.env.VITE_BACKEND_URL;

export const SIGNUP_URL = `${API_BASEURL}/user/signup`;
export const SIGNIN_URL = `${API_BASEURL}/user/signin`;
export const SEND_OTP = `${API_BASEURL}/user/send-otp`;
export const VERIFY_OTP = `${API_BASEURL}/user/verify-otp`;

export const GET_COURSES = `${API_BASEURL}/course/get-courses`;
export const FEATURED_COURSES = `${API_BASEURL}/course/featured-courses`;
export const DELETE_COURSES = `${API_BASEURL}/course/delete-course`;
