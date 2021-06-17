import React, { Component } from "react";
import Navbar from "./Navbar";
import SwiftSlider from 'react-swift-slider'
import Footer from './Footer';

const data = [
    { 'id': '1', 'src': 'https://dbs9nopbkp043.cloudfront.net/images/profile/IMG_20200717_130318_363_1595563060055.jpg'},
    { 'id': '2', 'src': 'https://dbs9nopbkp043.cloudfront.net/images/profile/79ABF109-EB1D-4BC2-9921-3ABEFFEC1932-6185D7A4-C66F-4696-A872-C12269C77503_1595562905067.JPG' },
    { 'id': '3', 'src': 'https://dbs9nopbkp043.cloudfront.net/images/profile/IMG_6687_1595562443060_resized1024.jpeg' },
];

function Home() {
    return (
        <div className="bg-light">
            <Navbar /><br/>
            <div className="carousel slide p-4" fill-height align-center height="280">
                <SwiftSlider data={data} showDots={true} enableNextAndPrev={true} />
                <br /><br /><hr />
            </div>
            <div className="container p-2">
                <h5 className="text-strong">Little Star: Every piece of jewelry tells a story</h5>
                <br/>
                <p>Little Star merupakan brand yang terbentuk di tahun 2020 oleh remaja lokal dari Bali. Di tahun ini terjadi pemerosotan penghasilan sektor pariwisata di Bali akibat pandemi COVID-19</p>
                <p>Segala kekayaan alam dan budaya yang ada di Bali mulai ditinggalkan karena kebijakan berbagai negara untuk #StayAtHome</p>
                <p>Karena Bali terkenal dengan pariwisatanya, kami menggunakan konsep life's journey. Jadi produk-produk yang kami buat mengenai kehidupan, perjalanan dan cinta </p>
                <p>Usaha ini merupakan usaha kecil-kecilan yang dibuat di Bali yang terkenal akan pantainya, sehingga usaha ini diberi nama <b>LITTLE STAR</b></p>
                <p>Bahan-bahan yang digunakan adalah batu alam, mutiara dan kerang asli yang juga dikerjakan secara handmade oleh remaja lokal Bali</p>
                <p>Produk gelang, kalung, dan cincin ini dijual secara <b>online</b> kepada orang-orang yang merindukan jalan-jalan di masa pandemi ini</p>
                <p>Rindu jalan-jalan? Rindu ke Bali? Tenang, gelang perhiasan Lilnamaka bisa menghilangkan rasa rindumu dengan gelang bernuansa travel. Kalian bisa memesan gelang kami via Online melalui webstore Shopee dan Whatsapp Follow juga instagram kami</p>
            </div>
            <Footer />
        </div>
    );
}

export default Home;