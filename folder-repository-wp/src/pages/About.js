import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return(
    <>
      <Navigation />
    <div>
      <div className="container my-5">
        <h1>Simple Crypto App</h1>
        <h4>Aplikasi sederhana yang bisa menampilkan harga Coin Crypto secara Real Time</h4>
        <p>Abelard Jovi John Pangalila (105011910051), Program Studi : Sistem Informasi</p>
        <p>API Reference : https://www.coingecko.com/en/api/documentation</p>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default About;
