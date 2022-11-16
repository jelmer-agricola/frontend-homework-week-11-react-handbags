import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile"
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png"
import our_story from "./assets/our_story.png"

function App() {
    return (<>
            <h1>Handbags & Purses</h1>

            <nav>
                <Button clickHandler={() => console.log("To the collection!")}>
                    to the collection
                </Button>
                <Button isDisabled={false} clickHandler={() => console.log("shop all bags")}>
                    shop all bags
                </Button>
                <Button isDisabled={false} clickHandler={() => console.log("pre-orders")}>
                    pre-orders
                </Button>
            </nav>
            <main>
                <Product
                    category="Best seller"
                    image={bag1}
                    title="The handy bag"
                    price={400}
                />
                {/*<article>*/}
                {/*    <span>Best Seller</span>*/}
                {/*    <img src={bag2} alt="Stylish bag"/>*/}
                {/*    <p>The Stylish bag</p>*/}
                {/*    <h4>250,- </h4>*/}
                {/*</article>*/}
                <Product
                    category="Best seller"
                    image={bag2}
                    title="The Stylish bag"
                    price={250}
                />

                <Product
                    category="New collection"
                    image={bag3}
                    title="The simple bag"
                    price={300}
                />

                <Product
                    category="New collection"
                    image={bag4}
                    title="The trendy bag"
                    price={150}
                />

                {/*<article>*/}
                {/*    <span>Best Seller</span>*/}
                {/*    <img src={bag4} alt="trendy bag"/>*/}
                {/*    <p>The trendy bag</p>*/}
                {/*    <h4>150,- </h4>*/}
                {/*</article>*/}

            </main>

            <footer>

                <Tile
                    title= "The brand"
                    text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga
      pariatur praesentium quia sequi similique sunt"
                    textTwo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga
      pariatur praesentium quia sequi similique sunt"


                    />
                <Tile
                    image={brand}
                    />

                <Tile
                    image={our_story}
                    title = "test"
                />

                <Tile
                    title= "Our story"
                    text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga
      pariatur praesentium quia sequi similique sunt"



                />


                {/*<section>*/}
                {/*    <h2>The brand </h2>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga*/}
                {/*        pariatur praesentium quia sequi similique sunt </p>*/}
                {/*    <p>>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga*/}
                {/*        pariatur praesentium quia sequi similique sunt</p>*/}

                {/*</section>*/}


            </footer>


        </>
    );
}

export default App;