import React from "react";
import DetailPage from "./DetailPage.js";
import NavBar from "../home/NavBarHeader/Navbar/NavBar.js";
import RegisterForm from "../home/RegisterForm/RegisterForm.js";
import Footer from "../home/Footer/Footer.js";

const Detail = () => {
  const hotel_details = {
    name: "Tower Street Apartments",
    address: "Elton St 125 New york",
    distance: "Excellent location - 500m from center",
    price: "Book a stay over $114 at this property and get a free airport taxi",
    photos: [
      "./images/hotel_detail_1.jpg",
      "./images/hotel_detail_2.jpg",
      "./images/hotel_detail_3.jpg",
      "./images/hotel_detail_4.jpg",
      "./images/hotel_detail_5.jpg",
      "./images/hotel_detail_6.jpg"
    ],
    title: "Stay in the heart of City",
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 955
  };

  return (
    <div>
      <NavBar />
      <DetailPage
        name={hotel_details.name}
        address={hotel_details.address}
        distance={hotel_details.distance}
        price={hotel_details.price}
        photos={hotel_details.photos}
        title={hotel_details.title}
        description={hotel_details.description}
        nine_night_price={hotel_details.nine_night_price}
      />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Detail;
