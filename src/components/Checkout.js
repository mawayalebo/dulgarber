import reactDom from "react-dom";
import yoco from "../yoco.config";
import { useEffect } from "react";
const Checkout = () => {
    const checkout = ()=>{
        yoco.showPopup({
            amountInCents: 10000,
            currency: 'ZAR',
            name: 'Dulgarber',
            description: 'Awesome description',
            callback: function (result) {
              // This function returns a token that your server can use to capture a payment
              if (result.error) {
                const errorMessage = result.error.message;
                alert("error occured: " + errorMessage);
              } else {
                alert("card successfully tokenised: " + result);
              }
              // In a real integration - you would now pass this chargeToken back to your
              // server along with the order/basket that the customer has purchased.
            }
          });
    }
    useEffect(()=>{
        checkout();
    });
    return ( 
        <div className="container">
            this is checkout
        </div>
     );
}
 
export default Checkout;