import Razorpay from "razorpay";
const {RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET} = process.env;

const razorpayInstance = new Razorpay({
    key_id: RAZORPAY_KEY_ID!,
    key_secret: RAZORPAY_KEY_SECRET
});

export default razorpayInstance;