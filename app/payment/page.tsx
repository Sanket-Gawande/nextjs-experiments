'use client'

import { useEffect } from "react"
import "https://checkout.razorpay.com/v1/checkout.js"
export default function Payment() {
    useEffect(() => {
        var options = {
            "key": "key_id",
            "subscription_id": "sub_00000000000001",
            "name": "Acme Corp.",
            "description": "Monthly Test Plan",
            "image": "/your_logo.jpg",
            "handler": function(response) {
                alert(response.razorpay_payment_id),
                alert(response.razorpay_subscription_id),
                alert(response.razorpay_signature);
            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210"
            },
            "notes": {
                "note_key_1": "Tea. Earl Grey. Hot",
                "note_key_2": "Make it so."
            },
            "theme": {
                "color": "#F37254"
            }
        };
    var rzp1 = new Razorpay(options);
    document.getElementById('rzp-button1').onclick = function(e) {
        rzp1.open();
        e.preventDefault();
    }
     }, [])
    return <div>
        <p>
        <button id = "rzp-button1">Pay</button>
        </p>
    </div>
}