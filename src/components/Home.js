
const Home = (props) => {
    console.log("props", props);
    return (
        <div>
            
            <div className="item">
                {/* <img src={process.env.PUBLIC_URL + 'img/Samsung-Galaxy-S20.jpg'} /> */}
                {/* <img src={process.env.PUBLIC_URL + '/img/Samsung-Galaxy-S20.jpg'} /> */}
            
                <img width="200" src="https://images.samsung.com/is/image/samsung/africa-fr-galaxy-a20s-a207-sm-a207fzbaxfe-front-187869773?$720_576_PNG$" alt="" />
                <span>Samsung</span>

                <span>Price: 25000fcfa</span>

                <button
                    onClick={() => {
                        props.addToCartHandler({
                        price:1000,
                        name:'Samsung',})
                    }}
                >Add to cart</button>
                <button
                    onClick={() => {
                        props.removeHandler()
                    }}
                >Remove</button>
            </div>
        </div>
     );
}
 
export default Home;