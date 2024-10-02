import cartImg from '../media/carrito.png'


const CartWidget = () => {

    return (
        <>
            <section className="cart-widget">
                
                    <img src={cartImg} alt="cart"></img>
                    <span>5</span>
               
            </section>
        </>
    )   
}

export default CartWidget;
