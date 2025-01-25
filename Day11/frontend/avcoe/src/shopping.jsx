import React from 'react'
import './style1.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import img1 from './shirt.jpg';
import img2 from './jeans.jpg';
import img3 from './dress.jpg';
import img4 from './top.jpg';
import img5 from './watch.jpg';
import img6 from './sunglass.jpg';
import img7 from './shoes.jpg';
import img8 from './sandle.jpg';

function Shopping() {
  return (
   

    <>
    <div class="boxmodel">
        <h2 class="h2style">Welcome to Trendy Clothing Store</h2>
        <p class="pstyle">Find your perfect outfit from our latest collection !</p>
        <button class="btnstyle">Shop Now</button>
    </div>
    <h2 class="h22style">Featured Products</h2>
    <div class="boxmodel1">
        
        <div class="box1">
           
            <img src={img1} height="200px" width="150px"/>
            <h2 class="h22style">Men's Shirt</h2>
            <p class="pppstyle">Rs. 999</p>
            <button class="btnbx">Add to cart</button>
        </div>
        <div class="box2">
            <img src={img2} height="200px" width="150px"/>
            <h2 class="h22style">Men's Jeans</h2>
            <p class="pppstyle">Rs. 1299</p>
            <button class="btnbx">Add to cart</button>
        </div>
        <div class="box2">
            <img src={img3} height="200px" width="150px"/>
            <h2 class="h22style">Summer Dress</h2>
            <p class="pppstyle">Rs. 1999</p>
            <button class="btnbx">Add to cart</button>
        </div>
        <div class="box2">
            <img src={img4} height="200px" width="150px"/>
            <h2 class="h22style">Women's Top</h2>
            <p class="pppstyle">Rs. 799</p>
            <button class="btnbx">Add to cart</button>
        </div>
        <div class="box2">
            <img src={img5} height="200px" width="150px"/>
            <h2 class="h22style">Wristwatch</h2>
            <p class="pppstyle">Rs. 999</p>
            <button class="btnbx">Add to cart</button>
        </div>
        <div class="box2">
            <img src={img6} height="200px" width="150px"/>
            <h2 class="h22style">Trendy Sunglasses</h2>
            <p class="pppstyle">Rs. 299</p>
            <button class="btnbx">Add to cart</button>
        </div>
        <div class="box2">
            <img src={img7} height="200px" width="150px"/>
            <h2 class="h22style">Men's Sneakers</h2>
            <p class="pppstyle">Rs. 599</p>
            <button class="btnbx">Add to cart</button>
        </div>
        <div class="box2">
            <img src={img8} height="200px" width="150px"/>
            <h2 class="h22style">Women's Sandals</h2>
            <p class="pppstyle">Rs. 99</p>
            <button class="btnbx">Add to cart</button>
        </div>
        

    </div>
    <div class="boxmodel2">
        <p class="ppppstyle">2025 Trendy Clothing Store. All Rights Reserved.</p>
        <p class="ppstyle">Facebook     Twitter     Instagram</p>
    </div>
    </>
  )
}


export default Shopping