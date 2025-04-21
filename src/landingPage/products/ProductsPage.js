import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
      imgURL="media/images/console.png"
      Name="Console"
      Description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations"
      />
      <Universe />
    </div>
  );
}

export default ProductsPage;
