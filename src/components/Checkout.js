import reactDom from "react-dom";
import yoco from "../yoco.config";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectBasket, selectBasketTotal} from "../app/slices/basketSlice";
import styled from "styled-components";
import Currency from "react-currency-formatter";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Checkout = () => {

    const [ user ] = useAuthState(auth);
    const basketItems = useSelector(selectBasket);
    const basketTotal = useSelector(selectBasketTotal);
    
  console.log(basketItems);
  console.log(user);
    const pay = ()=>{
        yoco.showPopup({
            amountInCents: (basketTotal + 100)*100,
            currency: 'ZAR',
            name: 'Dulgarber',
            description: 'Dulgarber Online Store',
            metadata: {
              email: user.email,
              name: user.displayName
            },

            callback: function (result) {
              // This function returns a token that your server can use to capture a payment
              if (result.error) {
                const errorMessage = result.error.message;
                alert("error occured: " + errorMessage);
              } else {
                console.log(result);
              }
              // In a real integration - you would now pass this chargeToken back to your
              // server along with the order/basket that the customer has purchased.
            }
          });
    }
     
    return ( 
        <CheckoutContainer className="">
            <CheckoutTop>
              <h3>Checkout</h3>
            </CheckoutTop>
            <Items>
                  {
                    selectBasket && basketItems.map((item)=>{
                      return(<div>
                        <img src={item.image}/>
                      </div>)
                    })
                  }
            </Items>
            <div className="container">
              <span>Subtotal: { basketItems.length } items | Total <Currency quantity={basketTotal + 100} currency="ZAR"/> Delivery Included</span>
            </div>
            <Yoco className="">
                   <label>
                    <input class="with-gap" name="group1" type="radio" checked  />
                    <span>Pay with Yoco</span>
                  </label>
                  <img src="https://a.storyblok.com/f/111633/x/6881916cd4/yoco-logo.svg"/>
            </Yoco>
            
            <CheckoutFooter>
              <div className="container">
                  <div 
                    className="btn black white-text btn-medium waves- effect waves-light"
                    onClick={pay}
                  >
                    Checkout
                  </div>
              </div>
            </CheckoutFooter>
        </CheckoutContainer>
     );
}


const CheckoutContainer = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;

`;
const CheckoutTop = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: solid grey 1px;
    margin-top: 15px;
    width: 100%;

`;
const CheckoutMiddle = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;

`;
const CheckoutFooter = styled.div``;
const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
`;

const Yoco = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px rgb(0, 153, 255);
  background-color: white;
  width: 100%;
  padding: 20px;
  width: 100%;
  margin: 20px;
  border-radius: 20px;
  justify-content: space-evenly;
  box-shadow: #00000022 1px 2px 3px;
  > label {
    > input{
      border: solid 1px rgb(0, 153, 255) !important;
    }
  }
  > img {
    width: 60px;
    object-fit: contain;
    margin-right: 10px;

  }

`;

const Items = styled.div`

  display: flex;
  align-items : center;
  justify-content: space-between;
  >div {
    margin: 5px;
  }
  > div > img {
    height: 50px;
    object-fit: contain;
  }


`;


 
export default Checkout;