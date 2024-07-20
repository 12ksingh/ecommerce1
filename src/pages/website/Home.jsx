import React from "react";
import Container from "../../component/website/Container";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Container
        fluid extraClass="h-[600px] mt-7 relative"
        style={{
          background:
            "linear-gradient(67deg, #E71D3A 0%, #ECC7C1 45%, #EFCAC4 58%, #E4BDB8 70%, #42A8FE 100%) 0% 0% no-repeat",
        }}>
        <img
          src="img\corousel.png"
          className="h-[550px] md:h-auto absolute right-0 bottom-0"
          alt=""
        />
      </Container>
      <BestSeller />
      <BestSellProduct />
      <Loadmore />
      <Iphone />
      <Servise />
      <Fifth />
      <hr />
      <Info />
      <hr />
    </>
  );
}
const BestSeller = () => {
  const bestSellerCat = [
    {
      name: "ALL",
    },
    {
      name: "Mac",
    },
    {
      name: "iPhone",
    },
    {
      name: "Ipad",
    },
    {
      name: "Accessories",
    },
   
  ];
  return (
    <Container>
      <div className="flex justify-center my-5 font-[600] text-3xl mx-2">
        BEST SELLER
      </div>
      <ul className="hidden md:flex justify-center gap-16 font-[600]">
        {
          bestSellerCat.map(
            (items, index) => {
              return (
                <li key={index}>
                  <Link to={items.path}>{items.name}</Link>
                </li>
              );
            })}
      </ul>
      <select className=" md:hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option selected>Choose a Product</option>
        {
          bestSellerCat.map(
            (item, index) => {
              return <option value="" key={index}>{item.name}</option>
            })
        }
      </select>
    </Container>
  );
};
const BestSellProduct = () => {
  const productType = [
    {
      path: "/",
      image: "img/apple_macbook.png",
      name: "Apple MacBook Pro",
      stars: "⭐⭐⭐⭐",
      price: "$499",
      discount: "$599",
    },
    {
      path: "/",
      image: "img/apple_macbook.png",
      name: "Apple MacBook Air 4",
      stars: "⭐⭐⭐⭐",
      price: "$499",
      discount: "$599",
    },
    {
      path: "/MacBook",
      image: "img/Apple Macbook Air.png",
      name: "Apple MacBook Air",
      stars: "⭐⭐⭐⭐",
      price: "$499",
      discount: "$599",
    },
    {
      path: "/iPhone 11",
      image: "img/Apple iPhone 11.jpg",
      name: "iPhone 11",
      stars: "⭐⭐⭐⭐",
      price: "$499",
      discount: "$599",
    },
    {
      path: "/Iphone 6",
      image: "img/iphone6.jpg",
      name: "Iphone 6",
      stars: "⭐⭐⭐⭐",
      price: "$499",
      discount: "$599",
    },
    {
      path: "/Ipad",
      image: "img/Apple Ipad.jpg",
      name: "Apple Ipad",
      stars: "⭐⭐⭐⭐",
      price: "$499",
      discount: "$599",
    },
    {
      path: "/Watch",
      image: "img/Apple Watch 21-1.jpg",
      name: "Apple Watch",
      stars: "⭐⭐⭐⭐",
      price: "$499",
      discount: "$599",
    },
    {
      path: "/iPod",
      image: "img/apple_iPod_2A.jpg",
      name: "Apple iPod",
      stars: "⭐⭐⭐⭐",
      price: "$499",
      discount: "$599",
    },
  ];
  return (
    <Container extraClass="mt-5 flex justify-around flex-wrap">
      {productType.map((product, index) => (
        <div
          className="shadow-2xl my-5 w-[250px] min-h-[300px] p-5 hover:scale-105 duration-500 border rounded-2xl text-center"
          key={product.path}
        >
          <div className="w-[40px] bg-[#FF4858] text-white text-[12px] font-bold">
            HOT
          </div>
          <div className="relative">
            <img
              src={product.image}
              className="my-5 hover:scale-105 duration-500"
              alt={product.name}
            />
            <div className="bg-[#ffffff7c] text-2xl top-0 w-full h-full flex items-center duration-300 justify-center absolute opacity-0 transition-opacity hover:opacity-100">
              <AiFillHeart className="mx-3 cursor-pointer" />
              <AiOutlineShoppingCart className="mx-3 cursor-pointer" />
            </div>
          </div>
          <h3 className="font-[600] my-5 text-center cursor-pointer">
            {product.name}
          </h3>
          <div>{product.stars}</div>
          <div className="font-[600] text-[#ff6881] my-5">
            Price: {product.price}{" "}
            <span className="text-[#00000076] line-through">
              {product.discount}
            </span>
          </div>
        </div>
      ))}
    </Container>
  );
};
const Loadmore = () => {
  return (
    <div className="hidden md:block text-center font-bold text-xl my-[100px] text-[#33A0FF] underline">
      LOAD MORE
    </div>
  );
};
const Iphone = () => {
  return (
    <Container fluid extraClass="flex justify-center bg-[#2E90E5] h-[500px]">
      <div className="flex flex-col md:w-[23%] w-[100%] md:justify-center mx-auto gap-10 text-[white] mt-[40px]">
        <p className="text-5xl">iPhone 6 Plus</p>
        <p className="text-xl">
          Performance and design. Taken right to the edge.
        </p>
        <Link to="" className="text-2xl font-[600] underline">
          SHOP NOW
        </Link>
      </div>
      <div className="w-[50%] relative">
        <img src="img/corousel.png" className="absolute bottom-0" alt="" />
      </div>
    </Container>
  );
};
const Servise = () => {
  const servises = [
    {
      image: "img/shipping.svg",
      name: "FREE SHIPPING",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      image: "img/refund.svg",
      name: "100% REFUND",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      image: "img/support.svg",
      name: "SUPPORT 24/7",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
  ];
  return (
    <Container extraClass="md:grid-cols-3 md:flex justify-around my-20 ">
      {servises.map((service, index) => (
        <div
          className="flex w-[300px] gap-4 text-center flex-col items-center"
          key={index}
        >
          <img src={service.image} className="w-16 h-16" alt={service.name} />
          <h2 className="text-[#22262A] text-[24px] font-[600]">{service.name}</h2>
          <p className="text-[#22262A] text-[14px]">{service.para}</p>
        </div>
      ))}
    </Container>
  );
};
const Fifth = () => {
  const carouselItems = [
    {
      image: "img/beats.png",
      name: "Beats Solo 2 On Ear Headphones - Black",
      stars: "⭐⭐⭐⭐",
      price: "$499",
      discount: "$599",
    },
    {
      image: "img/squared.png",
      name: "H-Squared tvTray",
      stars: "⭐⭐⭐⭐",
      price: "$399",
      discount: "$499",
    },
    {
      image: "img/Neta.png",
      name: "Netatmo Rain Gauge",
      stars: "⭐⭐⭐⭐",
      price: "$299",
      discount: "$399",
    },
  ];
  return (
    <Container extraClass="my-[100px]">
      <h1 className="text-[#22262A] text-center text-[30px]">FEATURED PRODUCTS</h1>
      <div className="carousel wrap md:flex carousel-center p-4 space-x-4 bg-neutral rounded-box md:grid-cols-3">
        {carouselItems.map((core, index) => (
          <div
            key={index}
            className="flex carousel-item my-5 min-h-[200px] p-5 border rounded-2xl text-center hover:shadow-2xl duration-100"
          >
            <div >
              <img src={core.image} className="my-5 " alt={core.name} />
            </div>
            <div>
              <h3 className="font-[600] my-5 text-center cursor-pointer">
                {core.name}
              </h3>
              <div>{core.stars}</div>
              <div className="font-[600] text-[#ff6881] my-5">
                Price: {core.price}{" "}
                <span className="text-[#00000076] line-through">
                  {core.discount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
const Info = () => {
  return (
    <Container extraClass="hidden md:flex justify grid grid-cols-3 my-[40px] ">
      <div className="w-[300px]">
        <img src="img/ishop.png" alt="" />
        <p className="text-[#22262A] text-[12px] mt-[40px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
      </div>
      <div className="ml-[50px]">
        <h1 className="text-[#22262A] text-[18px] font-[600]">Follow Us</h1>
        <p className="text-[#22262A] text-[12px] mt-[40px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
        <div className="flex gap-[30px] mt-[20px]">
          <img src="img/facebook.png" alt="" />
          <img src="img/twitter.png" alt="" />
        </div>
      </div>
      <div className="ml-[100px]">
        <h1 className="text-[#22262A] text-[18px] font-[600] ">Contact Us</h1>
        <p className="text-[#22262A] text-[12px] mt-[40px]">iShop: address @building 124 <br /> Call us now: 0123-456-789 <br /> Email: support@whatever.com</p>
      </div>

    </Container>
  )
}