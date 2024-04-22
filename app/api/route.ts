import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: "rzp_test_agxCBcV1sM2xKR",
  key_secret :'aj0gBMZDRDhbuwOl1gJavVp2'
});
export async function POST(request: Request) {
  // const { xomoy_id, plan_id, gatewayPlanId } = await request.json();

  try {
    const data = await razorpay.subscriptions.create({
      plan_id: "plan_Nli5CrLmzMaX57",
      total_count: 1,
      notes: {
        xomoy_id: 3,
        plan_id: "1mp", 
      },
      customer_notify: 1,
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
   return NextResponse.json({error})
  }
  
}
// Whenever user selects the plan for subscription, we will need to pass the gateway plan id for subscription creation. Along with that we will need to add two note to the subscription - xomoy_id : userid and plan_id : can be 1mp, 3mp, 6mp or 12mp
