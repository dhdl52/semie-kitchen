import React, { useEffect } from 'react';
import './MainPage.css';
import axios from 'axios';
const MainPage = ()=>{
    let [products,setProducts]=React.useState([]);
    useEffect(()=>{
    axios
    .get("https://803fd08c-5114-48c2-b3f3-83d5b1cd3e95.mock.pstmn.io/products")
    .then((res) => {
        const products=res.data.products;
        setProducts(products);
    })
    .catch((err) => {
    });

    },[])
    return(
    <>
    <div id="header">
        <div id="header-area">
            <img src="images/icons/logo.svg" alt="logo" />
        </div>
    </div>
    <div id="body">
        <div id="banner"><img src="images/banners/banner.jpg" alt="" /></div>
        <h2>우리아이 상상력이 펑펑! 상상요리왕국</h2>
        <div id="product-list">
            {products.map((product,idx)=>{
            return (
                <div className="product-card" key={idx}>
                <div>
                    <img className="product-img" src={product.imageUrl} alt={product.name} />
                </div>
                <div className="product-content">
                    <span className="product-name">{product.name}</span>
                    <div className="product-seller">
                        <span>새미네 부엌</span>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
        <h2>바빠도 아침은 여유롭게🌿</h2>
        <div id="product-list">
            {products.map((product,idx)=>{
            return (
                <div className="product-card" key={idx}>
                <div>
                    <img className="product-img" src={product.imageUrl} alt={product.name} />
                </div>
                <div className="product-content">
                    <span className="product-name">{product.name}</span>
                    <div className="product-seller">
                        <span>새미네 부엌</span>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
        <h2>함께 만드니깐 더!맛있어요!</h2>
        <div id="product-list">
            {products.map((product,idx)=>{
            return (
                <div className="product-card" key={idx}>
                <div>
                    <img className="product-img" src={product.imageUrl} alt={product.name} />
                </div>
                <div className="product-content">
                    <span className="product-name">{product.name}</span>
                    <div className="product-seller">
                        <span>새미네 부엌</span>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
    </div>
    <div id="footer">
        <a href="javascript:;">회사소개</a><a href="javascript:;">이용약관</a><a href="javascript:;">통신판매업:123-1234</a><a href="javascript:;">사업자등록번호 : 456-4567</a><a href="javascript:;">개인정보...</a>
    </div>
    </>
    );
};
export default MainPage;