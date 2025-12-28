import { CheckoutHeader } from './CheckoutHeader'
import { CheckoutPage } from './CheckoutPage'

export function Checkout(){
    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
            <CheckoutHeader />
            <CheckoutPage />
        </>
    )
}