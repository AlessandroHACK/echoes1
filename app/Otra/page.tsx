'use client'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  return (
    <div className="App-body">
      <h1>PayPal Developer E-Book</h1>
      <img
        height="300"
        src="/ebook.jpg"
        alt="How to be Great at Anything (Book Cover)"
      />
      <p>
        <span className="book-price">$13.99</span>
      </p>
      <PayPalScriptProvider
        options={{ clientId: "AXbc8ZZM8AypbnZIXrbB9Dxba6UlkVNohANaFssBzZNUZ7ZNO6FUcg4f7jz2CKnzPCbnjzxpbkoYCAmE"}}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                      description: "My Purchases",
                      amount: {
                        currency_code: "MXN",
                        value: "12.00",
                        breakdown: {
                          item_total: {
                            currency_code: "MXN",
                            value: "12.00"
                          },
                          shipping: {
                            currency_code: "MXN",
                            value: "0"
                          },
                          tax_total: {
                            currency_code: "MXN",
                            value: "0"
                          }
                        }
                      },
                      items: [
                        {
                          name: "Item 1",
                          unit_amount: {
                            currency_code: "MXN",
                            value: "6.00"
                          },
                          quantity: "1"
                        },
                        {
                          name: "Item 2",
                          unit_amount: {
                            currency_code: "MXN",
                            value: "6.00"
                          },
                          quantity: "1"
                        }
                      ]
                    }
                  ]
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions?.order?.capture();
            const name = details?.payer?.name?.given_name;
            alert("Transaction completed by " + name);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default App;