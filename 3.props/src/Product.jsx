import React from 'react'

function Product({ productName, price }) {

    //destructing
    //parametre olarak props geldiğinide bunu kullanıyoruz
    //const { productName, price } = props; // {productName:"ayakkabı", price:2345}
    return (
        <div>
            <div>Ürün Bİlgileri</div>
            <div>
                <div>İsim: {productName}</div>
                <div>Fiyat: {price} TL</div>
            </div>
        </div>
    )
}

export default Product