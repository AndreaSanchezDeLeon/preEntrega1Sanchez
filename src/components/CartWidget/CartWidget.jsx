import cart from './assets/cart.png'

const CartWidget = () => {
    return (
        <div id="cart-widget">
            < img src= {cart} alt="cart-widget" width={40}/>
            <span>10</span>
        </div>
    )
}

export default CartWidget