import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/2/1.jpg",
      "https://cdn.dummyjson.com/product-images/2/2.jpg",
      "https://cdn.dummyjson.com/product-images/2/3.jpg",
      "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    ],
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    images: ["https://cdn.dummyjson.com/product-images/3/1.jpg"],
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/4/1.jpg",
      "https://cdn.dummyjson.com/product-images/4/2.jpg",
      "https://cdn.dummyjson.com/product-images/4/3.jpg",
      "https://cdn.dummyjson.com/product-images/4/4.jpg",
      "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
    ],
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/5/1.jpg",
      "https://cdn.dummyjson.com/product-images/5/2.jpg",
      "https://cdn.dummyjson.com/product-images/5/3.jpg",
    ],
  },
  {
    id: 6,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: "Apple",
    category: "laptops",
    thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    images: [
      "https://cdn.dummyjson.com/product-images/6/1.png",
      "https://cdn.dummyjson.com/product-images/6/2.jpg",
      "https://cdn.dummyjson.com/product-images/6/3.png",
      "https://cdn.dummyjson.com/product-images/6/4.jpg",
    ],
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
    brand: "Samsung",
    category: "laptops",
    thumbnail: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/7/1.jpg",
      "https://cdn.dummyjson.com/product-images/7/2.jpg",
      "https://cdn.dummyjson.com/product-images/7/3.jpg",
      "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
    ],
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    thumbnail: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/8/1.jpg",
      "https://cdn.dummyjson.com/product-images/8/2.jpg",
      "https://cdn.dummyjson.com/product-images/8/3.jpg",
      "https://cdn.dummyjson.com/product-images/8/4.jpg",
      "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
    ],
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/9/1.jpg",
      "https://cdn.dummyjson.com/product-images/9/2.png",
      "https://cdn.dummyjson.com/product-images/9/3.png",
      "https://cdn.dummyjson.com/product-images/9/4.jpg",
      "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
    ],
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    thumbnail: "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
    images: [
      "https://cdn.dummyjson.com/product-images/10/1.jpg",
      "https://cdn.dummyjson.com/product-images/10/2.jpg",
      "https://cdn.dummyjson.com/product-images/10/3.jpg",
      "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
    ],
  },
  {
    id: 11,
    title: "perfume Oil",
    description:
      "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    price: 13,
    discountPercentage: 8.4,
    rating: 4.26,
    stock: 65,
    brand: "Impression of Acqua Di Gio",
    category: "fragrances",
    thumbnail: "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/11/1.jpg",
      "https://cdn.dummyjson.com/product-images/11/2.jpg",
      "https://cdn.dummyjson.com/product-images/11/3.jpg",
      "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
    ],
  },
  {
    id: 12,
    title: "Brown Perfume",
    description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    price: 40,
    discountPercentage: 15.66,
    rating: 4,
    stock: 52,
    brand: "Royal_Mirage",
    category: "fragrances",
    thumbnail: "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/12/1.jpg",
      "https://cdn.dummyjson.com/product-images/12/2.jpg",
      "https://cdn.dummyjson.com/product-images/12/3.png",
      "https://cdn.dummyjson.com/product-images/12/4.jpg",
      "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
    ],
  },
  {
    id: 13,
    title: "Fog Scent Xpressio Perfume",
    description:
      "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    price: 13,
    discountPercentage: 8.14,
    rating: 4.59,
    stock: 61,
    brand: "Fog Scent Xpressio",
    category: "fragrances",
    thumbnail: "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/13/1.jpg",
      "https://cdn.dummyjson.com/product-images/13/2.png",
      "https://cdn.dummyjson.com/product-images/13/3.jpg",
      "https://cdn.dummyjson.com/product-images/13/4.jpg",
      "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
    ],
  },
  {
    id: 14,
    title: "Non-Alcoholic Concentrated Perfume Oil",
    description:
      "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    price: 120,
    discountPercentage: 15.6,
    rating: 4.21,
    stock: 114,
    brand: "Al Munakh",
    category: "fragrances",
    thumbnail: "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/14/1.jpg",
      "https://cdn.dummyjson.com/product-images/14/2.jpg",
      "https://cdn.dummyjson.com/product-images/14/3.jpg",
      "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
    ],
  },
  {
    id: 15,
    title: "Eau De Perfume Spray",
    description:
      "Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    price: 30,
    discountPercentage: 10.99,
    rating: 4.7,
    stock: 105,
    brand: "Lord - Al-Rehab",
    category: "fragrances",
    thumbnail: "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/15/1.jpg",
      "https://cdn.dummyjson.com/product-images/15/2.jpg",
      "https://cdn.dummyjson.com/product-images/15/3.jpg",
      "https://cdn.dummyjson.com/product-images/15/4.jpg",
      "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
    ],
  },
  {
    id: 16,
    title: "Hyaluronic Acid Serum",
    description:
      "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    price: 19,
    discountPercentage: 13.31,
    rating: 4.83,
    stock: 110,
    brand: "L'Oreal Paris",
    category: "skincare",
    thumbnail: "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/16/1.png",
      "https://cdn.dummyjson.com/product-images/16/2.webp",
      "https://cdn.dummyjson.com/product-images/16/3.jpg",
      "https://cdn.dummyjson.com/product-images/16/4.jpg",
      "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
    ],
  },
  {
    id: 17,
    title: "Tree Oil 30ml",
    description:
      "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    price: 12,
    discountPercentage: 4.09,
    rating: 4.52,
    stock: 78,
    brand: "Hemani Tea",
    category: "skincare",
    thumbnail: "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/17/1.jpg",
      "https://cdn.dummyjson.com/product-images/17/2.jpg",
      "https://cdn.dummyjson.com/product-images/17/3.jpg",
      "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
    ],
  },
  {
    id: 18,
    title: "Oil Free Moisturizer 100ml",
    description:
      "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
    price: 40,
    discountPercentage: 13.1,
    rating: 4.56,
    stock: 88,
    brand: "Dermive",
    category: "skincare",
    thumbnail: "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/18/1.jpg",
      "https://cdn.dummyjson.com/product-images/18/2.jpg",
      "https://cdn.dummyjson.com/product-images/18/3.jpg",
      "https://cdn.dummyjson.com/product-images/18/4.jpg",
      "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
    ],
  },
  {
    id: 19,
    title: "Skin Beauty Serum.",
    description:
      "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
    price: 46,
    discountPercentage: 10.68,
    rating: 4.42,
    stock: 54,
    brand: "ROREC White Rice",
    category: "skincare",
    thumbnail: "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/19/1.jpg",
      "https://cdn.dummyjson.com/product-images/19/2.jpg",
      "https://cdn.dummyjson.com/product-images/19/3.png",
      "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
    ],
  },
  {
    id: 20,
    title: "Freckle Treatment Cream- 15gm",
    description:
      "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    price: 70,
    discountPercentage: 16.99,
    rating: 4.06,
    stock: 140,
    brand: "Fair & Clear",
    category: "skincare",
    thumbnail: "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/20/1.jpg",
      "https://cdn.dummyjson.com/product-images/20/2.jpg",
      "https://cdn.dummyjson.com/product-images/20/3.jpg",
      "https://cdn.dummyjson.com/product-images/20/4.jpg",
      "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
    ],
  },
];

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

function Header() {
  return (
    <header className="d-flex justify-content-center align-items-center">
      <h1>Header</h1>
    </header>
  );
}

function Body() {
  return (
    // <div className="">
    // <h1>Day 01</h1>
    //   <div>
    //     <div className="container border border-primary">
    //       <h1 className="text">
    //         Hello I'm "container" which expands element to a certain limit
    //       </h1>
    //     </div>
    //     <div className=" container-fluid border border-primary">
    //       <h1>
    //         Hello I'm "container-fluid" which expands the element at maximum
    //         width
    //       </h1>
    //     </div>
    //     <div className="container-fluid">
    //       <div className="d-flex justify-content-center align-items-center">
    //         <h1>
    //           Grid System<p>I do have 12 blocks </p>
    //         </h1>
    //       </div>

    //       <div className="row ">
    //         {Array.from({ length: 12 }, (ele, i) => {
    //           return (
    //             <>
    //               <div className="col border border-primary d-flex justify-content-center align-items-center">
    //                 <p>{i + 1}</p>
    //               </div>
    //             </>
    //           );
    //         })}
    //       </div>
    //       <div className="row ">
    //         {Array.from({ length: 6 }, (ele, i) => {
    //           return (
    //             <>
    //               <div className="col border border-primary d-flex justify-content-center align-items-center">
    //                 <p>{i + 1}</p>
    //               </div>
    //             </>
    //           );
    //         })}
    //       </div>
    //       <div className="row">
    //         {Array.from({ length: 3 }, (ele, i) => {
    //           return (
    //             <>
    //               <div className="col border border-primary d-flex justify-content-center align-items-center">
    //                 <p>{i + 1}</p>
    //               </div>
    //             </>
    //           );
    //         })}
    //       </div>
    //       <div className="row">
    //         {Array.from({ length: 1 }, (ele, i) => {
    //           return (
    //             <>
    //               <div className="col border border-primary d-flex justify-content-center">
    //                 <p>{i + 1}</p>
    //               </div>
    //             </>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="container border border-gray margin">
    //   {/** Day 02 of grid sys */}
    //   <h1>Day 02 of Grid System Break Points in Bootstrap</h1>
    //   <div className="container-fluid border border-primary">
    //     <div className="row d-flex justify-content-center align-items-center">
    //       {Array.from({ length: 10 }, (ele, i) => {
    //         return (
    //           <div key={i} className="col-1 border border-primary">
    //             <p>Column no {i + 1}</p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //     <div className="row d-flex justify-content-center align-items-center">
    //       {Array.from({ length: 3 }, (ele, i) => {
    //         return (
    //           <div key={i} className="col-3 border border-primary">
    //             <p>Column no {i + 1}</p>
    //           </div>
    //         );
    //       })}
    //       <h1>---</h1>
    //       {Array.from({ length: 9 }, (ele, i) => {
    //         return (
    //           <div key={i} className="col-3 border border-primary">
    //             <p>Column no {i + 1}</p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>

    //   <div className="container-fluid border border-primary">
    //     <p>Grid system breakpoint</p>

    //     <div
    //       className="row text-center"
    //       style={{ backgroundColor: "gray", marginBottom: "20px" }}
    //     >
    //       <h1>Extra Extra Large (xxl) Means Greater Than 1400px</h1>
    //       <div className="row d-flex justify-content-center align-items-center">
    //         <p
    //           className="col-xxl-2"
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         >
    //           Col 1
    //         </p>
    //         <p
    //           className="col-xxl-2"
    //           style={{ backgroundColor: "blue", height: "30px" }}
    //         >
    //           Col 2
    //         </p>
    //         <p
    //           className="col-xxl-2"
    //           style={{ backgroundColor: "yellow", height: "30px" }}
    //         >
    //           Col 3
    //         </p>
    //         <p
    //           className="col-xxl-2"
    //           style={{ backgroundColor: "pink", height: "30px" }}
    //         >
    //           Col 4
    //         </p>
    //         <p
    //           className="col-xxl-2"
    //           style={{ backgroundColor: "maroon", height: "30px" }}
    //         >
    //           Col 5
    //         </p>
    //         <p
    //           className="col-xxl-2"
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         >
    //           Col 6
    //         </p>
    //       </div>
    //     </div>

    //     <div
    //       className="row text-center"
    //       style={{ backgroundColor: "gray", marginBottom: "20px" }}
    //     >
    //       <h1>Extra Large (xl) Means Greater Than 1200px</h1>
    //       <div className="row d-flex justify-content-center align-items-center">
    //         <p
    //           className="col-xl-2"
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         >
    //           Col 1
    //         </p>
    //         <p
    //           className="col-xl-2"
    //           style={{ backgroundColor: "blue", height: "30px" }}
    //         >
    //           Col 2
    //         </p>
    //         <p
    //           className="col-xl-2"
    //           style={{ backgroundColor: "yellow", height: "30px" }}
    //         >
    //           Col 3
    //         </p>
    //         <p
    //           className="col-xl-2"
    //           style={{ backgroundColor: "pink", height: "30px" }}
    //         >
    //           Col 4
    //         </p>
    //         <p
    //           className="col-xl-2"
    //           style={{ backgroundColor: "maroon", height: "30px" }}
    //         >
    //           Col 5
    //         </p>
    //         <p
    //           className="col-xl-2"
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         >
    //           Col 6
    //         </p>
    //       </div>
    //     </div>

    //     <div
    //       className="row text-center"
    //       style={{ backgroundColor: "gray", marginBottom: "20px" }}
    //     >
    //       <h1>Large Means (lg) Greater Than 992pixels</h1>
    //       <div className="row d-flex justify-content-center align-items-center">
    //         <p
    //           className="col-lg-2"
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         >
    //           Col 1
    //         </p>
    //         <p
    //           className="col-lg-2"
    //           style={{ backgroundColor: "blue", height: "30px" }}
    //         >
    //           Col 2
    //         </p>
    //         <p
    //           className="col-lg-2"
    //           style={{ backgroundColor: "yellow", height: "30px" }}
    //         >
    //           Col 3
    //         </p>
    //         <p
    //           className="col-lg-2"
    //           style={{ backgroundColor: "pink", height: "30px" }}
    //         >
    //           Col 4
    //         </p>
    //         <p
    //           className="col-lg-2"
    //           style={{ backgroundColor: "maroon", height: "30px" }}
    //         >
    //           Col 5
    //         </p>
    //         <p
    //           className="col-lg-2"
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         >
    //           Col 6
    //         </p>
    //       </div>
    //     </div>

    //     <div
    //       className="row text-center"
    //       style={{ backgroundColor: "gray", marginBottom: "20px" }}
    //     >
    //       <h1>Medium (md) Means Greater Than 768px</h1>
    //       <div className="row d-flex justify-content-center align-items-center">
    //         <p
    //           className="col-md-2"
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         >
    //           Col 1
    //         </p>
    //         <p
    //           className="col-md-2"
    //           style={{ backgroundColor: "blue", height: "30px" }}
    //         >
    //           Col 2
    //         </p>
    //         <p
    //           className="col-md-2"
    //           style={{ backgroundColor: "yellow", height: "30px" }}
    //         >
    //           Col 3
    //         </p>
    //         <p
    //           className="col-md-2"
    //           style={{ backgroundColor: "pink", height: "30px" }}
    //         >
    //           Col 4
    //         </p>
    //         <p
    //           className="col-md-2"
    //           style={{ backgroundColor: "maroon", height: "30px" }}
    //         >
    //           Col 5
    //         </p>
    //         <p
    //           className="col-md-2"
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         >
    //           Col 6
    //         </p>
    //       </div>
    //     </div>

    //     <div
    //       className="row text-center"
    //       style={{ backgroundColor: "gray", marginBottom: "20px" }}
    //     >
    //       <h1>Small (sm) Means Greater Than 576px</h1>
    //       <div className="row d-flex justify-content-center align-items-center">
    //         <p
    //           className="col-sm-2"
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         >
    //           Col 1
    //         </p>
    //         <p
    //           className="col-sm-2"
    //           style={{ backgroundColor: "blue", height: "30px" }}
    //         >
    //           Col 2
    //         </p>
    //         <p
    //           className="col-sm-2"
    //           style={{ backgroundColor: "yellow", height: "30px" }}
    //         >
    //           Col 3
    //         </p>
    //         <p
    //           className="col-sm-2"
    //           style={{ backgroundColor: "pink", height: "30px" }}
    //         >
    //           Col 4
    //         </p>
    //         <p
    //           className="col-sm-2"
    //           style={{ backgroundColor: "maroon", height: "30px" }}
    //         >
    //           Col 5
    //         </p>
    //         <p
    //           className="col-sm-2"
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         >
    //           Col 6
    //         </p>
    //       </div>
    //     </div>

    //     <div
    //       className="row text-center"
    //       style={{ backgroundColor: "gray", marginBottom: "20px" }}
    //     >
    //       <h1>Extra Small (xs) Means Less Than 576px</h1>
    //       <div className="row d-flex justify-content-center align-items-center">
    //         <p
    //           className="col-2" //For extra small devices
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         >
    //           Col 1
    //         </p>
    //         <p
    //           className="col-2"
    //           style={{ backgroundColor: "blue", height: "30px" }}
    //         >
    //           Col 2
    //         </p>
    //         <p
    //           className="col-2"
    //           style={{ backgroundColor: "yellow", height: "30px" }}
    //         >
    //           Col 3
    //         </p>
    //         <p
    //           className="col-2"
    //           style={{ backgroundColor: "pink", height: "30px" }}
    //         >
    //           Col 4
    //         </p>
    //         <p
    //           className="col-2"
    //           style={{ backgroundColor: "maroon", height: "30px" }}
    //         >
    //           Col 5
    //         </p>
    //         <p
    //           className="col-2"
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         >
    //           Col 6
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="px-4">
    //   <h1>Day 03</h1>
    //   <div className="container border border-5 border-warning">
    //     <h2>Breakpoint practice</h2>
    //     <div className="row">
    //       {products.map((ele, i) => {
    //         return (
    //           <div
    //             className="col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-xs-12 "
    //             key={ele.id}
    //           >
    //             <img
    //               width="150px"
    //               src={ele.thumbnail}
    //               alt={ele.id}
    //               className="img-thumbnail"
    //             />
    //             <h4>{ele.title}</h4>
    //             <p>{ele.brand}</p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    //   <div>
    //     <h1>Auto Width Column - Responsiveness</h1>
    //     <div className="container">
    //       <div className="row border border-5 border-warning">
    //         <div
    //           className="col col-md-6 col-sm-4 col-lg-2"
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         ></div>
    //         <div
    //           className="col"
    //           style={{ backgroundColor: "blue", height: "30px" }}
    //         ></div>
    //         <div
    //           className="col"
    //           style={{ backgroundColor: "green", height: "30px" }}
    //         ></div>
    //       </div>
    //     </div>
    //     <div>
    //       <h1>Column Break</h1>
    //       <div className="container border border-4 border-warning">
    //         <div className="row">
    //           <div
    //             className="col-4 "
    //             style={{ backgroundColor: "red", height: "30px" }}
    //           ></div>
    //           <div
    //             className="col-4"
    //             style={{ backgroundColor: "blue", height: "30px" }}
    //           ></div>
    //           <div
    //             className="col-4"
    //             style={{ backgroundColor: "green", height: "30px" }}
    //           ></div>
    //           <div
    //             className="w-100"
    //             style={{ backgroundColor: "green", height: "30px" }}
    //           ></div>
    //           <div
    //             className="col-4 "
    //             style={{ backgroundColor: "red", height: "30px" }}
    //           ></div>
    //           <div
    //             className="w-100"
    //             style={{ backgroundColor: "blue", height: "30px" }}
    //           ></div>
    //           <div
    //             className="w-100"
    //             style={{ backgroundColor: "blue", height: "30px" }}
    //           ></div>
    //           <div
    //             className="col-4"
    //             style={{ backgroundColor: "blue", height: "30px" }}
    //           ></div>
    //           <div
    //             className="col-4"
    //             style={{ backgroundColor: "green", height: "30px" }}
    //           ></div>
    //           <div
    //             className="col-4 "
    //             style={{ backgroundColor: "red", height: "30px" }}
    //           ></div>
    //           <div
    //             className="col-4"
    //             style={{ backgroundColor: "blue", height: "30px" }}
    //           ></div>
    //           <div
    //             className="col-4"
    //             style={{ backgroundColor: "green", height: "30px" }}
    //           ></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <h1>Set Column order</h1>
    //     <div className="container ">
    //       <div className="row d-flex justify-content-center align-items-center">
    //         <div
    //           className="col-3"
    //           style={{ backgroundColor: "green", height: "50px" }}
    //         >
    //           <h1>First</h1>
    //         </div>
    //         <div
    //           className="col-3 "
    //           style={{ backgroundColor: "red", height: "50px" }}
    //         >
    //           <h1>Second</h1>
    //         </div>
    //         <div
    //           className="col-3 "
    //           style={{ backgroundColor: "blue", height: "50px" }}
    //         >
    //           <h1>Third</h1>
    //         </div>
    //         <div
    //           className="col-3"
    //           style={{ backgroundColor: "yellow", height: "50px" }}
    //         >
    //           <h1>Fourth</h1>
    //         </div>
    //       </div>
    //       <div className="row d-flex justify-content-center align-items-center">
    //         <div
    //           className="col-3 order-last"
    //           style={{ backgroundColor: "green", height: "100px" }}
    //         >
    //           <h1>First By Using Class Names </h1>
    //         </div>
    //         <div
    //           className="col-3 "
    //           style={{ backgroundColor: "red", height: "100px" }}
    //         >
    //           <h1>Second By Using Class Names </h1>
    //         </div>
    //         <div
    //           className="col-3 order-first"
    //           style={{ backgroundColor: "blue", height: "100px" }}
    //         >
    //           <h1>Third By Using Class Names </h1>
    //         </div>
    //         <div
    //           className="col-3 order-first"
    //           style={{ backgroundColor: "yellow", height: "100px" }}
    //         >
    //           <h1>Fourth By Using Class Names </h1>
    //         </div>
    //       </div>
    //       <div className="row d-flex justify-content-center align-items-center">
    //         <div
    //           className="col-3 order-2"
    //           style={{ backgroundColor: "green", height: "150px" }}
    //         >
    //           <h1>First By Using Index of element </h1>
    //         </div>
    //         <div
    //           className="col-3 order-3"
    //           style={{ backgroundColor: "red", height: "150px" }}
    //         >
    //           <h1>Second By Using Index of element </h1>
    //         </div>
    //         <div
    //           className="col-3 order-1"
    //           style={{ backgroundColor: "blue", height: "150px" }}
    //         >
    //           <h1>Third By Using Index of element </h1>
    //         </div>
    //         <div
    //           className="col-3 order-4"
    //           style={{ backgroundColor: "yellow", height: "150px" }}
    //         >
    //           <h1>Fourth By Using Index of element </h1>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <h1>Set Column Order - Responsiveness</h1>
    //     <div className="container ">
    //       <div className="row d-flex justify-content-center align-items-center">
    //         <div
    //           className="col-3 order-sm-4"
    //           style={{ backgroundColor: "green", height: "150px" }}
    //         >
    //           <h1>Last but on small devices First</h1>
    //         </div>
    //         <div
    //           className="col-3 order-md-1"
    //           style={{ backgroundColor: "red", height: "150px" }}
    //         >
    //           <h1>Third but on meduim devices First</h1>
    //         </div>
    //         <div
    //           className="col-3 order-sm-4"
    //           style={{ backgroundColor: "blue", height: "150px" }}
    //         >
    //           <h1>First but on small devices last </h1>
    //         </div>
    //         <div
    //           className="col-3 "
    //           style={{ backgroundColor: "yellow", height: "150px" }}
    //         >
    //           <h1>Second but on medium devices third</h1>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <h1>Offset</h1>
    //     <div className="container">
    //       <div className="row">
    //         <div
    //           className="col "
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         ></div>
    //         <div
    //           className="col"
    //           style={{ backgroundColor: "blue", height: "30px" }}
    //         ></div>
    //         {/* <div
    //           className="col"
    //           style={{ backgroundColor: "green", height: "30px" }}
    //         ></div> */}
    //         <div
    //           className="col offset-4"
    //           style={{ backgroundColor: "yellow", height: "30px" }}
    //         ></div>
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <h1>Offset Responsiveness</h1>
    //     <div className="container">
    //       <div className="row">
    //         <div
    //           className="col "
    //           style={{ backgroundColor: "red", height: "30px" }}
    //         ></div>
    //         <div
    //           className="col"
    //           style={{ backgroundColor: "blue", height: "30px" }}
    //         ></div>
    //         <div
    //           className="col"
    //           style={{ backgroundColor: "green", height: "30px" }}
    //         ></div>
    //         <div
    //           className="col offset-lg-4"
    //           style={{ backgroundColor: "yellow", height: "30px" }}
    //         ></div>
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <h1>Nesting Columns</h1>
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-6" style={{ backgroundColor: "red" }}>
    //           First Half
    //           <div className="row">
    //             {/* <div className="col"> */}
    //             {Array.from({ length: 12 }, (_, i) => {
    //               return (
    //                 <div key={i} className="col">
    //                   {i + 1}
    //                 </div>
    //               );
    //             })}
    //             {/* </div> */}
    //           </div>
    //         </div>
    //         <div className="col-6" style={{ backgroundColor: "yellow" }}>
    //           Second Half
    //           <div className="row">
    //             {Array.from({ length: 12 }, (_, i) => {
    //               return <div className="col">{i + 1}</div>;
    //             })}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="px-4">
    //   <h1>Day 04 and 05</h1>
    //   {/* <div>
    //     <h1>Media Object</h1>
    //     <div className="container-fluid d-flex align-items-center border border-4 border-warning">
    //       <div className="flex-shrink-0">
    //         <img
    //           src={products[1].thumbnail}
    //           alt="img"
    //           width={240}
    //           className="align-self-end"
    //         />
    //         <div className="flex-grow-1">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
    //   <div>
    //     <h1>Typography</h1>
    //     <div className="container">
    //       <h1>h1. Bootstrap heading</h1>
    //       <h2>h2. Bootstrap heading</h2>
    //       <h3>h3. Bootstrap heading</h3>
    //       <h4>h4. Bootstrap heading</h4>
    //       <h5>h5. Bootstrap heading</h5>
    //       <h6>h6. Bootstrap heading</h6>
    //       <h1>---Bootstrap Classes---</h1>
    //       <p className="h1">h1. Bootstrap heading</p>
    //       <p className="h2">h2. Bootstrap heading</p>
    //       <p className="h3">h3. Bootstrap heading</p>
    //       <p className="h4">h4. Bootstrap heading</p>
    //       <p className="h5">h5. Bootstrap heading</p>
    //       <p className="h6">h6. Bootstrap heading</p>
    //       <h1>Custom Heading</h1>
    //       <h3>
    //         Fancy display heading
    //         <small class=" text-muted text-body-secondary">
    //           {" "}
    //           With faded secondary text
    //         </small>
    //       </h3>
    //       <h1>Display</h1>
    //       <h1 className="display-1">Display 1</h1>
    //       <h1 className="display-2">Display 2</h1>
    //       <h1 className="display-3">Display 3</h1>
    //       <h1 className="display-4">Display 4</h1>
    //       <h1 className="display-5">Display 5</h1>
    //       <h1 className="display-6">Display 6</h1>
    //       <h1>
    //         Lead -{" "}
    //         <p class="lead">
    //           This is a lead paragraph. It stands out from regular paragraphs.
    //         </p>
    //       </h1>

    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    //         ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in
    //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //         culpa qui officia deserunt mollit anim id est laborum
    //       </p>
    //       <p className="lead">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    //         ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in
    //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //         culpa qui officia deserunt mollit anim id est laborum
    //       </p>
    //       <h1>Inline text elements</h1>
    //       <p>
    //         You can use the mark tag to <mark>highlight</mark> text.
    //       </p>
    //       <p>
    //         <del>This line of text is meant to be treated as deleted text.</del>
    //       </p>
    //       <p>
    //         <s>
    //           This line of text is meant to be treated as no longer accurate.
    //         </s>
    //       </p>
    //       <p>
    //         <ins>
    //           This line of text is meant to be treated as an addition to the
    //           document.
    //         </ins>
    //       </p>
    //       <p>
    //         <u>This line of text will render as underlined.</u>
    //       </p>
    //       <p>
    //         <small>
    //           This line of text is meant to be treated as fine print.
    //         </small>
    //       </p>
    //       <p>
    //         <strong>This line rendered as bold text.</strong>
    //       </p>
    //       <p>
    //         <em>This line rendered as italicized text.</em>
    //       </p>
    //       <p>
    //         <abbr title="attribute">attr</abbr>
    //       </p>
    //       <p>
    //         <abbr title="HyperText Markup Language" class="initialism">
    //           HTML
    //         </abbr>
    //       </p>
    //       <blockquote class="blockquote">
    //         <p>A well-known quote, contained in a blockquote element.</p>
    //       </blockquote>
    //       <p className="blockquote">Quote is there ? </p>
    //     </div>
    //   </div>
    //   <div>
    //     <h1>In the evening</h1>
    //     <div className="container">
    //       <blockquote class="blockquote">
    //         <p>A well-known quote, contained in a blockquote element.</p>
    //       </blockquote>
    //       <figure class="text-center">
    //         <blockquote class="blockquote">
    //           <p>A well-known quote, contained in a blockquote element.</p>
    //         </blockquote>
    //         <figcaption class="blockquote-footer">
    //           Someone famous in <cite title="Source Title">Source Title</cite>
    //         </figcaption>
    //       </figure>
    //       <figure class="text-end">
    //         <blockquote class="blockquote">
    //           <p>A well-known quote, contained in a blockquote element.</p>
    //         </blockquote>
    //         <figcaption class="blockquote-footer">
    //           Someone famous in <cite title="Source Title">Source Title</cite>
    //         </figcaption>
    //       </figure>
    //       <ul class="list-unstyled">
    //         <li>This is a list.</li>
    //         <li>It appears completely unstyled.</li>
    //         <li>Structurally, it's still a list.</li>
    //         <li>
    //           However, this style only applies to immediate child elements.
    //         </li>
    //         <li>
    //           Nested lists:
    //           <ul>
    //             <li>are unaffected by this style</li>
    //             <li>will still show a bullet</li>
    //             <li>and have appropriate left margin</li>
    //           </ul>
    //         </li>
    //         <li>This may still come in handy in some situations.</li>
    //       </ul>
    //       <ul class="list-inline">
    //         <li class="list-inline-item">This is a list item.</li>
    //         <li class="list-inline-item">And another one.</li>
    //         <li class="list-inline-item">But they're displayed inline.</li>
    //       </ul>
    //       <h1>Description</h1>
    //       <dl class="row">
    //         <dt class="col-sm-3">Description lists</dt>
    //         <dd class="col-sm-9">
    //           A description list is perfect for defining terms.
    //         </dd>

    //         <dt class="col-sm-3">Term</dt>
    //         <dd class="col-sm-9">
    //           <p>Definition for the term.</p>
    //           <p>And some more placeholder definition text.</p>
    //         </dd>

    //         <dt class="col-sm-3">Another term</dt>
    //         <dd class="col-sm-9">
    //           This definition is short, so no extra paragraphs or anything.
    //         </dd>

    //         <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
    //         <dd class="col-sm-9">
    //           This can be useful when space is tight. Adds an ellipsis at the
    //           end.
    //         </dd>

    //         <dt class="col-sm-3">Nesting</dt>
    //         <dd class="col-sm-9">
    //           <dl class="row">
    //             <dt class="col-sm-4">Nested definition list</dt>
    //             <dd class="col-sm-8">
    //               I heard you like definition lists. Let me put a definition
    //               list inside your definition list.
    //             </dd>
    //           </dl>
    //         </dd>
    //       </dl>
    //     </div>
    //   </div>
    //   <div>
    //     <h1>Images in Bootstrap Ver 5.3</h1>
    //     <div className="container">
    //       <img src={products[3].thumbnail} alt="img"></img>
    //     </div>
    //     <div className="container m-2">
    //       <img
    //         className="img-fluid img-thumbnail float-right"
    //         src={products[3].thumbnail}
    //         width={"100%"}
    //         alt="img"
    //       />
    //       <img
    //         className="img-fluid float-left"
    //         src={products[5].thumbnail}
    //         alt="img2"
    //         width={"100%"}
    //       />
    //     </div>
    //     <div className="container"></div>
    //   </div>
    //   <div>
    //     <h1>Tables in Bootstrap</h1>
    //     <div>
    //       <table className="table">
    //         <thead>
    //           <th scope="row">Sr No</th>
    //           <th scope="row">Product Name</th>
    //           <th scope="row">Description</th>
    //           <th scope="row">Price</th>
    //         </thead>
    //         <tbody>
    //           {products
    //             .filter((item) => item.id <= 5)
    //             .map((item, index) => {
    //               return (
    //                 <tr key={index}>
    //                   <th scope="row">{item.id}</th>
    //                   <td>{item.title}</td>
    //                   <td>{item.description}</td>
    //                   <td>{item.price}$</td>
    //                 </tr>
    //               );
    //             })}
    //         </tbody>
    //       </table>
    //       <h1>Table Styling </h1>
    //       <table className="table table-dark table-striped">
    //         <thead className="thead-dark">
    //           <th scope="row">Sr No</th>
    //           <th scope="row">Product Name</th>
    //           <th scope="row">Description</th>
    //           <th scope="row">Price</th>
    //         </thead>
    //         <tbody>
    //           {products
    //             .filter((item) => item.id <= 10 && item.id > 5)
    //             .map((item, index) => {
    //               return (
    //                 <tr key={index}>
    //                   <th scope="row">{item.id}</th>
    //                   <td>{item.title}</td>
    //                   <td>{item.description}</td>
    //                   <td>{item.price}$</td>
    //                 </tr>
    //               );
    //             })}
    //         </tbody>
    //       </table>
    //       <h1>Columns and Strip and border</h1>
    //       <table className="table table-bordered table-striped-columns">
    //         <thead className="thead-dark">
    //           <th scope="row">Sr No</th>
    //           <th scope="row">Product Name</th>
    //           <th scope="row">Description</th>
    //           <th scope="row">Price</th>
    //         </thead>
    //         <tbody>
    //           {products
    //             .filter((item) => item.id >= 11 && item.id <= 15)
    //             .map((item, index) => {
    //               return (
    //                 <tr key={index}>
    //                   <th scope="row">{item.id}</th>
    //                   <td>{item.title}</td>
    //                   <td>{item.description}</td>
    //                   <td>{item.price}$</td>
    //                 </tr>
    //               );
    //             })}
    //         </tbody>
    //       </table>
    //       <h1>Table Hover and Color </h1>
    //       <table className="table table-hover">
    //         <thead>
    //           <th scope="row">Sr No</th>
    //           <th scope="row">Product Name</th>
    //           <th scope="row">Description</th>
    //           <th scope="row">Price</th>
    //         </thead>
    //         <tbody>
    //           {products
    //             .filter((item) => item.id >= 16 && item.id <= 20)
    //             .map((item, index) => {
    //               return (
    //                 <tr key={index}>
    //                   <th scope="row">{item.id}</th>
    //                   <td className="table-warning">{item.title}</td>
    //                   <td className="table-danger">{item.description}</td>
    //                   <td className="table-success">{item.price}$</td>
    //                 </tr>
    //               );
    //             })}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
    // <div className="m-5 d-flex justify-content-center align-item-center">
    //   <div>
    //     <h1>Day 06</h1>
    //     <div>
    //       <h1>Figures</h1>
    //       <div>
    //         <figure className="figure">
    //           <img
    //             src={products[10].thumbnail}
    //             className="figure-img img-fluid rounded"
    //             alt="A generic square placeholder with rounded corners in a figure."
    //           />
    //           <figcaption className="figure-caption text-center">
    //             A Bird
    //           </figcaption>
    //         </figure>
    //       </div>
    //     </div>
    //     <div>
    //       <h1> Colors</h1>
    //       <div>
    //         <h1 className="text-primary">Blue</h1>
    //         <h1 className="text-danger">Red</h1>
    //         <h1 className="text-warning">Yellow</h1>
    //         <h1 className="text-emphasis">Emphasis</h1>
    //         <h1 className="text-dark">Black Or Dark</h1>
    //         <h1 className="text-muted">Muted</h1>
    //       </div>
    //     </div>
    //     <div>
    //       <h1>Borders</h1>
    //       <div>
    //         <div
    //           className="border border-top border-warning border-5 m-2"
    //           style={{ height: "200px" }}
    //         ></div>
    //         <div
    //           className="border-warning border border-5 m-2"
    //           style={{ height: "200px" }}
    //         ></div>
    //         <div
    //           className="border-top border-5 border-info m-2"
    //           style={{ height: "200px" }}
    //         >
    //           BORDER-TOP
    //         </div>
    //         <div
    //           className="border-end border-5 border-success m-2"
    //           style={{ height: "200px" }}
    //         >
    //           BORDER-END
    //         </div>
    //         <div
    //           className="border-bottom border-5 border-danger m-2"
    //           style={{ height: "200px" }}
    //         >
    //           BORDER-BOTTOM
    //         </div>
    //         <div
    //           className="border-start border-5 border-secondary m-2"
    //           style={{ height: "200px" }}
    //         >
    //           BORDER-START
    //         </div>
    //         <img
    //           src={products[16].thumbnail}
    //           className="rounded-circle"
    //           alt="1"
    //         />
    //         <img src={products[16].thumbnail} className="" alt="2" />
    //       </div>
    //     </div>
    //     <div>
    //       <h1>Text</h1>
    //       <div>
    //         <h1>Normal</h1>
    //         <p>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
    //           vitae ultricies leo integer malesuada nunc vel risus. Curabitur
    //           vitae nunc sed velit dignissim sodales ut. Nibh venenatis cras sed
    //           felis eget velit aliquet. Ultrices neque ornare aenean euismod
    //           elementum nisi quis eleifend. Urna nec tincidunt praesent semper
    //           feugiat nibh sed pulvinar proin. Nibh praesent tristique magna sit
    //           amet purus. Tellus integer feugiat scelerisque varius morbi. Purus
    //           in massa tempor nec. Cras pulvinar mattis nunc sed. Sollicitudin
    //           ac orci phasellus egestas tellus. Aliquam etiam erat velit
    //           scelerisque in dictum non. Posuere sollicitudin aliquam ultrices
    //           sagittis orci. Tincidunt nunc pulvinar sapien et ligula
    //           ullamcorper. Id velit ut tortor pretium viverra suspendisse
    //           potenti nullam ac. Nibh ipsum consequat nisl vel pretium lectus.
    //           Et malesuada fames ac turpis egestas maecenas pharetra convallis.
    //           Consectetur lorem donec massa sapien faucibus et molestie ac.
    //           Varius vel pharetra vel turpis nunc eget lorem dolor sed. Cursus
    //           euismod quis viverra nibh cras. Viverra nibh cras pulvinar mattis.
    //           Mattis rhoncus urna neque viverra. Nisi scelerisque eu ultrices
    //           vitae auctor eu augue ut lectus. Neque gravida in fermentum et
    //           sollicitudin. Eget arcu dictum varius duis at consectetur lorem.
    //           Vitae tortor condimentum lacinia quis vel eros. Tristique senectus
    //           et netus et malesuada fames ac. Est velit egestas dui id ornare
    //           arcu odio ut sem. Tellus id interdum velit laoreet id donec
    //           ultrices tincidunt arcu. Urna cursus eget nunc scelerisque viverra
    //           mauris in aliquam sem. Dolor purus non enim praesent elementum.
    //           Dignissim sodales ut eu sem. Vitae purus faucibus ornare
    //           suspendisse sed nisi lacus sed viverra. Habitant morbi tristique
    //           senectus et netus et malesuada fames ac. Elementum curabitur vitae
    //           nunc sed velit dignissim sodales ut. Sed velit dignissim sodales
    //           ut eu sem integer vitae.
    //         </p>{" "}
    //         <h1>justify</h1>
    //         <p className="text-justify">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
    //           vitae ultricies leo integer malesuada nunc vel risus. Curabitur
    //           vitae nunc sed velit dignissim sodales ut. Nibh venenatis cras sed
    //           felis eget velit aliquet. Ultrices neque ornare aenean euismod
    //           elementum nisi quis eleifend. Urna nec tincidunt praesent semper
    //           feugiat nibh sed pulvinar proin. Nibh praesent tristique magna sit
    //           amet purus. Tellus integer feugiat scelerisque varius morbi. Purus
    //           in massa tempor nec. Cras pulvinar mattis nunc sed. Sollicitudin
    //           ac orci phasellus egestas tellus. Aliquam etiam erat velit
    //           scelerisque in dictum non. Posuere sollicitudin aliquam ultrices
    //           sagittis orci. Tincidunt nunc pulvinar sapien et ligula
    //           ullamcorper. Id velit ut tortor pretium viverra suspendisse
    //           potenti nullam ac. Nibh ipsum consequat nisl vel pretium lectus.
    //           Et malesuada fames ac turpis egestas maecenas pharetra convallis.
    //           Consectetur lorem donec massa sapien faucibus et molestie ac.
    //           Varius vel pharetra vel turpis nunc eget lorem dolor sed. Cursus
    //           euismod quis viverra nibh cras. Viverra nibh cras pulvinar mattis.
    //           Mattis rhoncus urna neque viverra. Nisi scelerisque eu ultrices
    //           vitae auctor eu augue ut lectus. Neque gravida in fermentum et
    //           sollicitudin. Eget arcu dictum varius duis at consectetur lorem.
    //           Vitae tortor condimentum lacinia quis vel eros. Tristique senectus
    //           et netus et malesuada fames ac. Est velit egestas dui id ornare
    //           arcu odio ut sem. Tellus id interdum velit laoreet id donec
    //           ultrices tincidunt arcu. Urna cursus eget nunc scelerisque viverra
    //           mauris in aliquam sem. Dolor purus non enim praesent elementum.
    //           Dignissim sodales ut eu sem. Vitae purus faucibus ornare
    //           suspendisse sed nisi lacus sed viverra. Habitant morbi tristique
    //           senectus et netus et malesuada fames ac. Elementum curabitur vitae
    //           nunc sed velit dignissim sodales ut. Sed velit dignissim sodales
    //           ut eu sem integer vitae.
    //         </p>{" "}
    //         <h1>left</h1>
    //         <p className="text-left">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
    //           vitae ultricies leo integer malesuada nunc vel risus. Curabitur
    //           vitae nunc sed velit dignissim sodales ut. Nibh venenatis cras sed
    //           felis eget velit aliquet. Ultrices neque ornare aenean euismod
    //           elementum nisi quis eleifend. Urna nec tincidunt praesent semper
    //           feugiat nibh sed pulvinar proin. Nibh praesent tristique magna sit
    //           amet purus. Tellus integer feugiat scelerisque varius morbi. Purus
    //           in massa tempor nec. Cras pulvinar mattis nunc sed. Sollicitudin
    //           ac orci phasellus egestas tellus. Aliquam etiam erat velit
    //           scelerisque in dictum non. Posuere sollicitudin aliquam ultrices
    //           sagittis orci. Tincidunt nunc pulvinar sapien et ligula
    //           ullamcorper. Id velit ut tortor pretium viverra suspendisse
    //           potenti nullam ac. Nibh ipsum consequat nisl vel pretium lectus.
    //           Et malesuada fames ac turpis egestas maecenas pharetra convallis.
    //           Consectetur lorem donec massa sapien faucibus et molestie ac.
    //           Varius vel pharetra vel turpis nunc eget lorem dolor sed. Cursus
    //           euismod quis viverra nibh cras. Viverra nibh cras pulvinar mattis.
    //           Mattis rhoncus urna neque viverra. Nisi scelerisque eu ultrices
    //           vitae auctor eu augue ut lectus. Neque gravida in fermentum et
    //           sollicitudin. Eget arcu dictum varius duis at consectetur lorem.
    //           Vitae tortor condimentum lacinia quis vel eros. Tristique senectus
    //           et netus et malesuada fames ac. Est velit egestas dui id ornare
    //           arcu odio ut sem. Tellus id interdum velit laoreet id donec
    //           ultrices tincidunt arcu. Urna cursus eget nunc scelerisque viverra
    //           mauris in aliquam sem. Dolor purus non enim praesent elementum.
    //           Dignissim sodales ut eu sem. Vitae purus faucibus ornare
    //           suspendisse sed nisi lacus sed viverra. Habitant morbi tristique
    //           senectus et netus et malesuada fames ac. Elementum curabitur vitae
    //           nunc sed velit dignissim sodales ut. Sed velit dignissim sodales
    //           ut eu sem integer vitae.
    //         </p>
    //         <h1>right</h1>
    //         <p className="text-right">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
    //           vitae ultricies leo integer malesuada nunc vel risus. Curabitur
    //           vitae nunc sed velit dignissim sodales ut. Nibh venenatis cras sed
    //           felis eget velit aliquet. Ultrices neque ornare aenean euismod
    //           elementum nisi quis eleifend. Urna nec tincidunt praesent semper
    //           feugiat nibh sed pulvinar proin. Nibh praesent tristique magna sit
    //           amet purus. Tellus integer feugiat scelerisque varius morbi. Purus
    //           in massa tempor nec. Cras pulvinar mattis nunc sed. Sollicitudin
    //           ac orci phasellus egestas tellus. Aliquam etiam erat velit
    //           scelerisque in dictum non. Posuere sollicitudin aliquam ultrices
    //           sagittis orci. Tincidunt nunc pulvinar sapien et ligula
    //           ullamcorper. Id velit ut tortor pretium viverra suspendisse
    //           potenti nullam ac. Nibh ipsum consequat nisl vel pretium lectus.
    //           Et malesuada fames ac turpis egestas maecenas pharetra convallis.
    //           Consectetur lorem donec massa sapien faucibus et molestie ac.
    //           Varius vel pharetra vel turpis nunc eget lorem dolor sed. Cursus
    //           euismod quis viverra nibh cras. Viverra nibh cras pulvinar mattis.
    //           Mattis rhoncus urna neque viverra. Nisi scelerisque eu ultrices
    //           vitae auctor eu augue ut lectus. Neque gravida in fermentum et
    //           sollicitudin. Eget arcu dictum varius duis at consectetur lorem.
    //           Vitae tortor condimentum lacinia quis vel eros. Tristique senectus
    //           et netus et malesuada fames ac. Est velit egestas dui id ornare
    //           arcu odio ut sem. Tellus id interdum velit laoreet id donec
    //           ultrices tincidunt arcu. Urna cursus eget nunc scelerisque viverra
    //           mauris in aliquam sem. Dolor purus non enim praesent elementum.
    //           Dignissim sodales ut eu sem. Vitae purus faucibus ornare
    //           suspendisse sed nisi lacus sed viverra. Habitant morbi tristique
    //           senectus et netus et malesuada fames ac. Elementum curabitur vitae
    //           nunc sed velit dignissim sodales ut. Sed velit dignissim sodales
    //           ut eu sem integer vitae.
    //         </p>
    //         <h1>center</h1>
    //         <p className="text-center">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
    //           vitae ultricies leo integer malesuada nunc vel risus. Curabitur
    //           vitae nunc sed velit dignissim sodales ut. Nibh venenatis cras sed
    //           felis eget velit aliquet. Ultrices neque ornare aenean euismod
    //           elementum nisi quis eleifend. Urna nec tincidunt praesent semper
    //           feugiat nibh sed pulvinar proin. Nibh praesent tristique magna sit
    //           amet purus. Tellus integer feugiat scelerisque varius morbi. Purus
    //           in massa tempor nec. Cras pulvinar mattis nunc sed. Sollicitudin
    //           ac orci phasellus egestas tellus. Aliquam etiam erat velit
    //           scelerisque in dictum non. Posuere sollicitudin aliquam ultrices
    //           sagittis orci. Tincidunt nunc pulvinar sapien et ligula
    //           ullamcorper. Id velit ut tortor pretium viverra suspendisse
    //           potenti nullam ac. Nibh ipsum consequat nisl vel pretium lectus.
    //           Et malesuada fames ac turpis egestas maecenas pharetra convallis.
    //           Consectetur lorem donec massa sapien faucibus et molestie ac.
    //           Varius vel pharetra vel turpis nunc eget lorem dolor sed. Cursus
    //           euismod quis viverra nibh cras. Viverra nibh cras pulvinar mattis.
    //           Mattis rhoncus urna neque viverra. Nisi scelerisque eu ultrices
    //           vitae auctor eu augue ut lectus. Neque gravida in fermentum et
    //           sollicitudin. Eget arcu dictum varius duis at consectetur lorem.
    //           Vitae tortor condimentum lacinia quis vel eros. Tristique senectus
    //           et netus et malesuada fames ac. Est velit egestas dui id ornare
    //           arcu odio ut sem. Tellus id interdum velit laoreet id donec
    //           ultrices tincidunt arcu. Urna cursus eget nunc scelerisque viverra
    //           mauris in aliquam sem. Dolor purus non enim praesent elementum.
    //           Dignissim sodales ut eu sem. Vitae purus faucibus ornare
    //           suspendisse sed nisi lacus sed viverra. Habitant morbi tristique
    //           senectus et netus et malesuada fames ac. Elementum curabitur vitae
    //           nunc sed velit dignissim sodales ut. Sed velit dignissim sodales
    //           ut eu sem integer vitae.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="container">
    //       <h1>Spacing</h1>
    //       <div className="border border-primary border-1">
    //         <div className="border border-3 border-danger m-3 p-3 bg-warning">
    //           MARGIN 16PX and PADDING 16PX
    //         </div>
    //         <div className="border border-3 border-danger m-5 p-5 bg-warning">
    //           MARGIN 48PX and PADDING 48PX
    //         </div>
    //         <div
    //           className="border border-3 border-danger mx-auto bg-warning"
    //           style={{ width: "200px" }}
    //         >
    //           <h2>Centered auto</h2>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="border border-2 border-warning m-3">
    //       <h1>Vertical Alignment</h1>
    //       <p>Used only in inline element</p>
    //       {/* {alignClasses.map((ele, index) => {
    //         return (
    //           <span
    //             className={`${ele} border border-warning m-3`}
    //             style={{ height: "" }}
    //           >
    //           </span>
    //         );
    //       })} */}
    //       <span className="border border-warning m-3 align-baseline">
    //         Baseline
    //       </span>
    //       <span className="border border-warning m-3 align-top">Tope</span>
    //       <span className="border border-warning m-3 align-bottom">Bottom</span>
    //       <span className="border border-warning m-3 align-text-pop">
    //         Text-Pop
    //       </span>
    //       <span className="border border-warning m-3 align-middle">Middle</span>
    //       <span className="border border-warning m-3 align-baseline">
    //         Baseline
    //       </span>
    //       <table className="table table-bordered">
    //         <tbody className="border border-2" style={{ height: "200px" }}>
    //           <td className=" m-3 align-baseline">Baseline</td>
    //           <td className=" m-3 align-top">Top</td>
    //           <td className=" m-3 align-bottom">Bottom</td>
    //           <td className=" m-3 align-text-pop">Text-Pop</td>
    //           <td className=" m-3 align-middle">Middle</td>
    //         </tbody>
    //       </table>

    //       <div></div>
    //     </div>
    //     <div>
    //       <h1>Visibility</h1>
    //       <p>Used to hide or show the element</p>
    //       <h2 className="visible">VISIBLE</h2>
    //       <h2 className="invisible">INVISIBLE</h2>
    //     </div>
    //     <div>
    //       <h1>Sizing</h1>
    //       <div
    //         className="w-25 m-3 p-5 border border-danger"
    //         style={{ backgroundColor: "yellow" }}
    //       >
    //         Width 25%
    //       </div>
    //       <div
    //         className="w-50 m-3 p-5 border border-danger"
    //         style={{ backgroundColor: "yellow" }}
    //       >
    //         Width 50%
    //       </div>
    //       <div
    //         className="w-75 m-3 p-5 border border-danger"
    //         style={{ backgroundColor: "yellow" }}
    //       >
    //         Width 75%
    //       </div>
    //       <div
    //         className="w-100 m-3 p-5 border border-danger"
    //         style={{ backgroundColor: "yellow" }}
    //       >
    //         Width 100%
    //       </div>
    //       <div
    //         className="mw-100 border-2 border border-danger"
    //         style={{ backgroundColor: "green" }}
    //       >
    //         Max-Width 100%
    //       </div>
    //     </div>
    //     <div className="container">
    //       <h1>Position</h1>
    //       {/* <div className=" border border-warning border-5"> */}
    //       {/* <div className=" m-5 position-static">static by default</div>
    //       <div className=" m-5 position-relative">relative</div>
    //       <div className=" m-5 position-absolute">absolute</div>
    //       <div className=" m-5 position-fixed">fixed</div>
    //       <div className=" m-5 position-sticky">sticky</div> */}
    //       {/* </div> */}
    //       <div>
    //         <h1>
    //           SHADOWS
    //           <div>
    //             <div className="p-3 mb-3 bg-yellow shadow-none">NO SHADOW</div>
    //             <div className="p-3 mb-3 bg-yellow shadow-sm">SMALL SHADOW</div>
    //             <div className="p-3 mb-3 bg-yellow shadow">REGULAR SHADOW</div>
    //             <div className="p-3 mb-3 bg-yellow shadow-lg">LARGE SHADOW</div>
    //           </div>
    //         </h1>
    //       </div>
    //     </div>
    //     <div>
    //       <h1>Display Property</h1>
    //       {/** Display property is used to define how an element should display. The element's default property is upon type of itself. Most elements are BLOCK or INLINE */}
    //       {/* BLOCK :- elements are start on the new line and takes full width available */}
    //       {/* INLINE: :- elements does not start on new line and takes width as needed. WHEN WE SET THIS VALUE, THE ELEMENT DOES NOT START ON  ANEW LINE AND ONLY TAKES UP AS SMUCH WIDTH AS NECESSARY (WE CAN'T SET HEIGHT AND WIDTH))*/}
    //       {/* BLOCK :- WHEN WE SET THIS VALUE, ELEMENT ALWAYS STARTS ON A NEW LINE AND TAKES UP THE FULL WIDTH AVAILABLE (WE CAN SET WIDTH AND HEIGHT) */}
    //       {/* INLINE-BLOCK :- IT'S COMBINATION OF THE INLINE BLOCK VALUE, IT DOESN'T START ON NEW LINE BUT WE CAN SET HEIGHT AND WIDTH */}
    //       {/* NONE :- THE ELEMENT WILL NOT BE DISPLAYED AT ALL AND HAS NO EFFECT ON LAYOUT */}
    //       <div class="d-inline p-2 text-bg-primary w-50">d-inline</div>
    //       <div class="d-inline p-2 text-bg-dark w-25">d-inline</div>{" "}
    //       <div class=" p-2 text-bg-primary w-50">d-inline</div>
    //       <div class=" p-2 text-bg-dark w-25">d-inline</div>{" "}
    //       <span class="d-inline p-2 text-bg-primary w-50">d-inline</span>
    //       <span class="d-inline p-2 text-bg-dark w-25">d-inline</span>{" "}
    //     </div>
    //     <div>
    //       <h1>Embed</h1>
    //       <p>
    //         Create responsive video or slideshow based on the width of the
    //         parent by creating an intrinsic ratio that scales on any devices
    //       </p>
    //       <div className="d-flex justify-content-center align-items-center">
    //         <div className="embed-responsive embed-responsive-16by9">
    //           <iframe
    //             width="1080"
    //             height="526"
    //             src="https://www.youtube.com/embed/Uw_hZfH5Ukc"
    //             title="9MM x LOLI SHIGURE UI"
    //             frameborder="0"
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //             allowfullscreen
    //           ></iframe>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <h1>Float</h1>
    //       <p>
    //         Toggles float on any element, acroos any breakpoint using the
    //         responsive float utils
    //       </p>
    //       <div
    //         className="border d-f border-warning border-2 container"
    //         style={{ height: "200px" }}
    //       >
    //         {/* <img
    //           alt={"image3"}
    //           src={products[10].thumbnail}
    //           className=" float-end mw-75 m-5 bg-danger"
    //         />
    //         <img
    //           alt={"image2"}
    //           src={products[9].thumbnail}
    //           className="float-start mw-50 m-5 bg-primary"
    //         /> */}
    //         <div
    //           className="float-end"
    //           style={{
    //             backgroundColor: "red",
    //             height: "200px",
    //             width: "200px",
    //           }}
    //         ></div>
    //         <div
    //           className="float-start"
    //           style={{
    //             backgroundColor: "green",
    //             height: "200px",
    //             width: "200px",
    //           }}
    //         ></div>
    //       </div>
    //     </div>
    //     <div>
    //       <div>
    //         <h1>Alerts</h1>
    //         <div>
    //           <div className="alert alert-danger" role="alert">
    //             <em>Your password is incorrect</em>
    //           </div>
    //           <div className="alert alert-success" role="alert">
    //             <em>
    //               Your account is logged in{" "}
    //               <a className="alert-link" href="#">
    //                 Click Here
    //               </a>{" "}
    //               to go to account
    //             </em>
    //           </div>
    //           <div className="alert alert-warning" role="alert">
    //             To reset password{" "}
    //             <a className="alert-link" href="#">
    //               <em>Click Here</em>
    //             </a>
    //           </div>
    //           {/* <div
    //             className="alert alert-warning alert-dismissible fade show"
    //             role="alert"
    //           >
    //             <strong>To close it click X</strong>
    //             <button
    //               type="button"
    //               className="close"
    //               data-dismiss="alert"
    //               aria-label="Close"
    //             >
    //               <span aria-hidden="true">&times;</span>
    //             </button>
    //           </div> */}
    //           <div
    //             class="alert alert-warning alert-dismissible fade show"
    //             role="alert"
    //           >
    //             To Close click X
    //             <button
    //               type="button"
    //               class="btn-close"
    //               data-bs-dismiss="alert"
    //               aria-label="Close"
    //             ></button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <h1>Breadcrumb</h1>
    //       <div className="container">
    //         <nav aria-label="breadcrumb">
    //           <ol className="breadcrumb">
    //             <li className="breadcrumb-item">
    //               <a href="#">Home</a>
    //             </li>
    //             <li className="breadcrumb-item">
    //               <a href="#">Contact Us</a>
    //             </li>
    //             <li className="breadcrumb-item active" aria-current="page">
    //               <a href="#">Form</a>
    //             </li>
    //           </ol>
    //         </nav>
    //       </div>
    //     </div>
    //     <div>
    //       <h1>Buttons</h1>
    //       <div className="column d-flex justify-content-between">
    //         <button type="button" className="btn btn-primary">
    //           Hello Primary
    //         </button>
    //         <button type="button" class="btn btn-danger">
    //           Danger
    //         </button>
    //         <input
    //           type="submit"
    //           className="btn btn-success active"
    //           role="button"
    //           value="Submit"
    //         />
    //         <button
    //           className="btn btn-danger btn-lg"
    //           // role="button"
    //           type="button"
    //         >
    //           Hmmm
    //         </button>
    //         <button
    //           className="btn btn-emphasis btn-lg disabled"
    //           type="button"
    //           aria-disabled="true"
    //         >
    //           SOLD
    //         </button>
    //       </div>
    //     </div>
    //     <div>
    //       <h1>Button Group</h1>
    //       <div
    //         role="group"
    //         className="btn-group d-flex justify-content-between"
    //       >
    //         <button type="button" class="btn btn-outline-warning">
    //           Warning
    //         </button>
    //         <br />
    //         <button type="button" class="btn btn-outline-info">
    //           Info
    //         </button>
    //         <br />
    //         <button type="button" class="btn btn-outline-danger">
    //           danger
    //         </button>
    //         <br />
    //       </div>
    //     </div>
    //     <div>
    //       <h1>CheckBox Button</h1>
    //       <div className="container">
    //         <button type="button" className="btn btn-warning btn-lg">
    //           Yellow Button
    //           <br/></br>
    //         </button>
    //         <div className="btn-group-toggle" data-toggle="buttons">
    //           <label className="btn btn-info">
    //             <input type="checkbox" autoComplete="off" />
    //             Java
    //           </label>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <h1>Radio Button</h1>
    //       <div className="btn-group btn-group-toggle" data-toggle="buttons">
    //         <label className="btn btn-success active">
    //           <input
    //             type="radio"
    //             name="options"
    //             id="option1"
    //             autoComplete="off"
    //             checked
    //           />
    //           Male
    //         </label>
    //         <label className="btn btn-success">
    //           <input
    //             type="radio"
    //             name="options"
    //             id="option2"
    //             autoComplete="off"
    //           />
    //           Female
    //         </label>
    //       </div>
    //     </div>
    //     <div>
    //       <h1>Button Toolbar</h1>
    //       <div className="btn-toolbar" role="group">
    //         <button type="button" class="btn btn-success">
    //           Submit
    //         </button>
    //         <button type="button" class="btn btn-danger">
    //           Cancel
    //         </button>
    //         <button type="button" class="btn btn-warning">
    //           Reset
    //         </button>
    //       </div>
    //       <div className="btn-toolbar" role="group">
    //         <button type="button" class="btn btn-success">
    //           Test1
    //         </button>
    //         <button type="button" class="btn btn-danger">
    //           Hello
    //         </button>
    //         <button type="button" class="btn btn-warning">
    //           Hi
    //         </button>
    //       </div>{" "}
    //       <div className="btn-toolbar" role="group">
    //         <button type="button" class="btn btn-success">
    //           1
    //         </button>
    //         <button type="button" class="btn btn-danger">
    //           2
    //         </button>
    //         <button type="button" class="btn btn-warning">
    //           3
    //         </button>
    //       </div>
    //     </div>
    //     <div className="container">
    //       <h1>Cards</h1>
    //       <p>
    //         Cards in an flexible and extensible container that contains multiple
    //         varients and option
    //       </p>
    //       <div className="cards d-flex flex-wrap">
    //         {products
    //           .filter((item) => item.id >= 13 && item.id <= 20)
    //           .map((item, index) => {
    //             return (
    //               <div
    //                 key={index}
    //                 className="card text-center"
    //                 style={{ width: "18rem", margin: "1rem" }}
    //               >
    //                 <img
    //                   className="card-img-top"
    //                   src={item.thumbnail}
    //                   alt={item.id}
    //                 />
    //                 <div className="card-body">
    //                   <h4 className="card-title">{item.title}</h4>
    //                   <h5 className="card-subtitle text-body-secondary">
    //                     {item.brand}
    //                   </h5>
    //                   <p className="card-text">{item.description}</p>
    //                   <ul className="list-group list-group-flush">
    //                     <li className="list-group-item">
    //                       {item.stock} left only
    //                     </li>
    //                     <li className="list-group-item">{item.rating}/5</li>
    //                     <li className="list-group-item">{item.price}$</li>
    //                   </ul>
    //                   <a href="#" className="btn btn-primary">
    //                     Buy Now
    //                   </a>
    //                 </div>
    //               </div>
    //             );
    //           })}
    //       </div>
    //       <div className="card" style={{ width: "18rem" }}>
    //         <div className="card-header">Features</div>
    //         <ul className="list-group list-group-flush">
    //           <li className="list-group-item">Card 1</li>
    //           <li className="list-group-item">Card 2</li>
    //           <li className="list-group-item">Card 3</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div>
    //       <h1>Card Header</h1>
    //       <div>
    //         {products
    //           .filter((item) => item.id <= 4)
    //           .map((item, index) => {
    //             return (
    //               <div key={index} className="card m-1">
    //                 <div className="card-header">{item.brand}</div>
    //                 <div className="card-body">
    //                   <h5>
    //                     {item.category} from {item.brand}
    //                   </h5>
    //                 </div>
    //               </div>
    //             );
    //           })}
    //       </div>
    //     </div>
    //     <div>
    //       <h1>Card Image Overlays</h1>
    //       <div className="card bg-dark text-white">
    //         <img
    //           className="card-img"
    //           src="https://images.unsplash.com/photo-1520052205864-92d242b3a76b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //           alt="fasfsd"
    //           style={{ height: "576px" }}
    //         />
    //         <div className="card-img-overlay text-black">
    //           <h5 className="card-title">Nice View</h5>
    //           <p className="card-text">The Description will be here</p>
    //           <p className="card-text">Last updadted ...............</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <h1>Card Styles</h1>
    //       <div className="card bg-dark text-info">
    //         <div className="card-header">Finance</div>
    //         <div className="card-body">
    //           <h2 className="card-text">Buy ASSETES not LIABILITIES</h2>
    //           <p className="card-text">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo
    //             nec. Nisl rhoncus mattis rhoncus urna neque viverra justo nec
    //             ultrices. Adipiscing elit ut aliquam purus sit amet luctus. Urna
    //             molestie at elementum eu facilisis sed odio morbi quis. Quisque
    //             non tellus orci ac auctor augue. Non curabitur gravida arcu ac.
    //             Cras adipiscing enim eu turpis egestas pretium aenean pharetra
    //             magna. Viverra suspendisse potenti nullam ac tortor vitae purus
    //             faucibus ornare. Mauris vitae ultricies leo integer malesuada
    //             nunc vel. Tempus iaculis urna id volutpat lacus laoreet non
    //             curabitur gravida.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="card bg-warning text-danger border border-5 border-success m-2">
    //         <div className="card-header">Finance</div>
    //         <div className="card-body">
    //           <h2 className="card-text">Buy ASSETES not LIABILITIES</h2>
    //           <p className="card-text">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo
    //             nec. Nisl rhoncus mattis rhoncus urna neque viverra justo nec
    //             ultrices. Adipiscing elit ut aliquam purus sit amet luctus. Urna
    //             molestie at elementum eu facilisis sed odio morbi quis. Quisque
    //             non tellus orci ac auctor augue. Non curabitur gravida arcu ac.
    //             Cras adipiscing enim eu turpis egestas pretium aenean pharetra
    //             magna. Viverra suspendisse potenti nullam ac tortor vitae purus
    //             faucibus ornare. Mauris vitae ultricies leo integer malesuada
    //             nunc vel. Tempus iaculis urna id volutpat lacus laoreet non
    //             curabitur gravida.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="card bg-transparent text-success border border-5 border-success m-2">
    //         <div className="card-header">Finance</div>
    //         <div className="card-body">
    //           <h2 className="card-text">Buy ASSETES not LIABILITIES</h2>
    //           <p className="card-text">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo
    //             nec. Nisl rhoncus mattis rhoncus urna neque viverra justo nec
    //             ultrices. Adipiscing elit ut aliquam purus sit amet luctus. Urna
    //             molestie at elementum eu facilisis sed odio morbi quis. Quisque
    //             non tellus orci ac auctor augue. Non curabitur gravida arcu ac.
    //             Cras adipiscing enim eu turpis egestas pretium aenean pharetra
    //             magna. Viverra suspendisse potenti nullam ac tortor vitae purus
    //             faucibus ornare. Mauris vitae ultricies leo integer malesuada
    //             nunc vel. Tempus iaculis urna id volutpat lacus laoreet non
    //             curabitur gravida.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="m-3">
        <h1> Day 07</h1>
        <div>
          <h2>Card Group</h2>
          <div className="card-group ">
            <div className="card text-white bg-primary">
              <img
                className="card-img-top"
                alt="img"
                src={products[7].thumbnail}
              />
              <div className="card-body">
                <h3 className="card-text">{products[7].title}</h3>
                <p className="card-text">{products[7].description}</p>
              </div>
            </div>
            <div className="card bg-warning">
              <img
                className="card-img-top"
                alt="img"
                src={products[8].thumbnail}
              />
              <div className="card-body">
                <h3 className="card-text">{products[8].title}</h3>
                <p className="card-text">{products[8].description}</p>
              </div>
            </div>
            <div className="card bg-danger">
              <img
                className="card-img-top"
                alt="img"
                src={products[9].thumbnail}
              />
              <div className="card-body">
                <h3 className="card-text">{products[9].title}</h3>
                <p className="card-text">{products[9].description}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Card Decks</h2>
          <div>
            <div className="card-deck ">
              <div className="card text-white bg-primary">
                <img
                  className="card-img-top"
                  src={products[7].thumbnail}
                  alt="img7"
                  style={{ width: "300px" }}
                />
                <div className="card-body">
                  <h3 className="card-text">{products[7].title}</h3>
                  <p className="card-text">{products[7].description}</p>
                </div>
              </div>
              <div className="card bg-warning">
                <img
                  className="card-img-top"
                  style={{ width: "300px" }}
                  alt="img"
                  src={products[8].thumbnail}
                />
                <div className="card-body">
                  <h3 className="card-text">{products[8].title}</h3>
                  <p className="card-text">{products[8].description}</p>
                </div>
              </div>
              <div className="card bg-danger">
                <img
                  className="card-img-top"
                  style={{ width: "300px" }}
                  alt="img"
                  src={products[9].thumbnail}
                />
                <div className="card-body">
                  <h3 className="card-text">{products[9].title}</h3>
                  <p className="card-text">{products[9].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Card Column</h2>
          <div>
            <div className="card-columns ">
              <div className="card text-white bg-primary">
                <div className="card-body">
                  <h3 className="card-text">{products[7].title}</h3>
                  <p className="card-text">{products[7].description}</p>
                  <p className="card-text">{products[7].description}</p>
                </div>
              </div>
              <div className="card bg-warning">
                <div className="card-body">
                  <h3 className="card-text">{products[8].title}</h3>
                  <p className="card-text">{products[8].description}</p>
                </div>
              </div>
              <div className="card bg-danger">
                <div className="card-body">
                  <h3 className="card-text">{products[9].title}</h3>
                  <p className="card-text">{products[9].description}</p>
                </div>
              </div>
            </div>{" "}
            <div className="card-columns ">
              <div className="card text-white bg-primary">
                <div className="card-body">
                  <h3 className="card-text">{products[7].title}</h3>
                  <p className="card-text">{products[7].description}</p>
                  <p className="card-text">{products[7].description}</p>
                </div>
              </div>
              <div className="card bg-warning">
                <div className="card-body">
                  <h3 className="card-text">{products[8].title}</h3>
                  <p className="card-text">{products[8].description}</p>
                </div>
              </div>
              <div className="card bg-danger">
                <div className="card-body">
                  <h3 className="card-text">{products[9].title}</h3>
                  <p className="card-text">{products[9].description}</p>
                </div>
              </div>
            </div>{" "}
            <div className="card-columns ">
              <div className="card text-white bg-primary">
                <div className="card-body">
                  <h3 className="card-text">{products[7].title}</h3>
                  <p className="card-text">{products[7].description}</p>
                  <p className="card-text">{products[7].description}</p>
                </div>
              </div>
              <div className="card bg-warning">
                <div className="card-body">
                  <h3 className="card-text">{products[8].title}</h3>
                  <p className="card-text">{products[8].description}</p>
                </div>
              </div>
              <div className="card bg-danger">
                <div className="card-body">
                  <h3 className="card-text">{products[9].title}</h3>
                  <p className="card-text">{products[9].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Dropdown</h1>
          <div>
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Profile
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item">Edit Profile</a>
                <a className="dropdown-item">Change Password</a>
                <a className="dropdown-item">Change Email</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Split Button</h1>
          <div>
            <div className="dropdown">
              <button type="button" className="btn btn-danger">
                Profile
              </button>
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item">Edit Profile</a>
                <a className="dropdown-item">Change Password</a>
                <a className="dropdown-item">Change Email</a>
              </div>
            </div>{" "}
            <div className="btn-group">
              <button type="button" className="btn btn-warning">
                Profile
              </button>
              <button
                className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item">Edit Profile</a>
                <a className="dropdown-item">Change Password</a>
                <a className="dropdown-item">Change Email</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Dropdown Directions</h1>
          <div>
            <div className="btn-group dropup">
              <button type="button" className="btn btn-danger">
                Profile
              </button>
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item">Edit Profile</a>
                <a className="dropdown-item">Change Password</a>
                <a className="dropdown-item">Change Email</a>
              </div>
            </div>
            <div className="btn-group dropend">
              <button type="button" className="btn btn-danger">
                Profile
              </button>
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item">Edit Profile</a>
                <a className="dropdown-item">Change Password</a>
                <a className="dropdown-item">Change Email</a>
              </div>
            </div>
            <div className="btn-group dropstart">
              <button type="button" className="btn btn-danger">
                Profile
              </button>
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item">Edit Profile</a>
                <a className="dropdown-item">Change Password</a>
                <a className="dropdown-item">Change Email</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Collapse</h1>
          <div>
            <div className="container">
              <h3>By using anchor tag</h3>
              <a
                className="btn btn-primary"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                data-bs-toggle="collapse"
                href="#mydiv"
              >
                Click Me
              </a>
              <div className="collapse" id="mydiv">
                Provide a valid, navigable address as the href value. If you
                cannot provide an href, but still need the element to resemble a
                link, use a button and change it with appropriate styles. Learn
                more:
                https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <h3>By using a button</h3>
              <button
                className="btn btn-danger"
                // role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                data-bs-toggle="collapse"
                data-bs-target="#mydiv2"
              >
                Click Me
              </button>
              <div className="collapse" id="mydiv2">
                Provide a valid, navigable address as the href value. If you
                cannot provide an href, but still need the element to resemble a
                link, use a button and change it with appropriate styles. Learn
                more:
                https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Accordion</h1>
          <div>
            <div className="accordion" id="accordion-ex">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="false"
                    // aria-controls="collapse-1"
                  >
                    Accordion Button 1
                  </button>
                </h2>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordion-ex"
                >
                  Line 2456:17: The href attribute is required for an anchor to
                  be keyboard accessible. Provide a valid, navigable address as
                  the href value. If you cannot provide an href, but still need
                  the element to resemble a link, use a button and change it
                  with appropriate styles. Learn more:
                  https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
                  jsx-a11y/anchor-is-valid
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    // aria-controls="collapse-1"
                  >
                    Accordion Button 2
                  </button>
                </h2>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion-ex"
                >
                  Line 2456:17: The href attribute is required for an anchor to
                  be keyboard accessible. Provide a valid, navigable address as
                  the href value. If you cannot provide an href, but still need
                  the element to resemble a link, use a button and change it
                  with appropriate styles. Learn more:
                  https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
                  jsx-a11y/anchor-is-valid
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Badges</h2>
          <div>
            <div>
              <h1>
                Notifications
                <span className="badge text-bg-primary">NEW</span>
                <button className="btn btn-info">
                  Inbox <span className="badge text-bg-primary">6</span>{" "}
                </button>
              </h1>
              <a href="#idk" className="badge badge-dark text-bg-dark">
                Visit
              </a>
              <a
                href="#idk"
                className="badge rounded-pill badge-dark text-bg-dark"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div>
          <h1>Base Nav</h1>
          <div>
            <div className="container">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="#jk">
                    Home
                  </a>{" "}
                </li>{" "}
                <li className="nav-item">
                  <a className="nav-link" href="#jk">
                    About Us
                  </a>{" "}
                </li>{" "}
                <li className="nav-item">
                  <a className="nav-link" href="#jk">
                    Our Clients
                  </a>{" "}
                </li>
                <li className="nav-item ">
                  <a className="nav-link disabled" href="#jk">
                    Contact Us
                  </a>{" "}
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1>Tabs</h1>
          <div>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link" href="#jk">
                  Home
                </a>{" "}
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link" href="#jk">
                  About Us
                </a>{" "}
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link" href="#jk">
                  Our Clients
                </a>{" "}
              </li>
              <li className="nav-item ">
                <a className="nav-link disabled" href="#jk">
                  Contact Us
                </a>{" "}
              </li>{" "}
            </ul>
          </div>
          <h1>Pills and Fill</h1>
          <div>
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item ">
                <a className="nav-link active" href="#jk">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#jk">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#jk">
                  Our Clients
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link disabled" href="#jk">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1>justified</h1>

            <ul className="nav nav-pills nav-fill nav-justified">
              <li className="nav-item ">
                <a className="nav-link active" href="#jk">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#jk">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#jk">
                  Our Clients
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link disabled" href="#jk">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1>Tabs With Dropdown</h1>
          <div>
            <nav className="nav nav-tabs">
              <ul className="nav">
                <li className="nav-item ">
                  <a className="nav-link active" href="#jk">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#jk">
                    About Us
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    href="#jk"
                  >
                    Our Clients
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#jd">
                      Wipro
                    </a>
                    <a className="dropdown-item" href="#jd">
                      TCS
                    </a>
                    <a className="dropdown-item" href="#jd">
                      Microsoft
                    </a>
                  </div>
                </li>
                <li className="nav-item ">
                  <a className="nav-link disabled" href="#jk">
                    Contact Us
                  </a>
                </li>
              </ul>{" "}
            </nav>
          </div>
        </div>
        <div>
          {/* <h1>Tab With Contents</h1> */}
          {/* <div>
            <div>
              <ul className="nav nav-tabs" id="myTabs" role="tablist">
                <li className="nav-item ">
                  <a
                    className="nav-link active"
                    href="#client-info"
                    id="course"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="clientInfo"
                    aria-selected="true"
                  >
                    Wipro
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#client-info-1"
                    className="nav-link"
                    id="client-1"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="clientInfo"
                    aria-selected="false"
                  >
                    TCS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#client-2"
                    className="nav-link"
                    id="client-2"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="clientInfo"
                    aria-selected="false"
                  >
                    Microsoft
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane active"
                  id="course-info"
                  role="tabpanel"
                  aria-labelledby="client"
                >
                  Client 1
                </div>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane "
                  id="client-1"
                  role="tabpanel"
                  aria-labelledby="client-1"
                >
                  Clinet 2
                </div>
              </div>{" "}
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane "
                  id="client-2"
                  role="tabpanel"
                  aria-labelledby="client-2"
                >
                  Client 3
                </div>
              </div>
            </div>
            <br />
            <br />
            
          </div> */}
        </div>
        <div>
          <h1>Tab With Contents</h1>
          <div>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  TCS
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Wipro
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Microsoft
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                TCS
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                Wipro
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabindex="0"
              >
                Microsoft
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>
            Navbar
            <div>
              <div className="container">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                  <a className="navbar-brand" href="#brand">
                    <img
                      src={products[7].thumbnail}
                      alt="brand-img"
                      className="w-25"
                    />{" "}
                    Brand{" "}
                  </a>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link">Home</a>
                    </li>{" "}
                    <li className="nav-item">
                      <a className="nav-link">Contact</a>
                    </li>{" "}
                    <li className="nav-item">
                      <a className="nav-link">OurClients</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </h1>
        </div>
        <div>
          <h1>Mobile Friendly Navbar</h1>
          <div>
            <div>
              <div>
                <div className="container">
                  <nav className="navbar navbar-expand-lg bg-body body-teritiary">
                    <div className="container-fluid">
                      <a className="navbar-brand" href="#brand">
                        Brand Image
                      </a>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#myMenu"
                        aria-controls="#myMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="myMenu">
                        <ul className="navbar-nav me-auto mb-lg-0">
                          <li className="nav-item">
                            <a className="nav-link active" aria-current="page">
                              Home
                            </a>
                          </li>{" "}
                          <li className="nav-item">
                            <a className="nav-link">Contact</a>
                          </li>{" "}
                          <li className="nav-item">
                            <a
                              className="nav-link disable"
                              aria-disabled="true"
                            >
                              OurClients
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <h1>Navabar placement Fixed Top Fixed Bottom and Sticky</h1>
          <div> </div> */}
        </div>
        <div>
          <h1>Dropdown Menu Navabar</h1>
          <div>
            <nav className="navbar navbar-expand-lg">
              <div className="" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#jd"
                      role="button"
                      data-bs-toggle="dropddown"
                      aria-expanded="false"
                    >
                      Pricing Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1>Navbar Search</h1>
          <div>
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <form class="d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-dark" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
        <div>
          <h1>Image Slider Or Carousel</h1>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={products[5].images[1]}
                  className="d-block w-100"
                  alt="img-1"
                  width={"200px"}
                  height={"200px"}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={products[5].images[2]}
                  className="d-block w-100"
                  alt="img-2"
                  width={"200px"}
                  height={"200px"}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={products[5].images[3]}
                  className="d-block w-100"
                  alt="img-3"
                  width={"200px"}
                  height={"200px"}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={products[5].images[0]}
                  className="d-block w-100"
                  alt="img-0"
                  width={"200px"}
                  height={"200px"}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div>
          <h1>Jumbotron </h1>
          <div className="container">
            <div className="jumbotron">
              <h1>Jumbotron CLASS NOT WORKING IN VER 5.3</h1>
            </div>
          </div>
        </div>
        <div>
          <h1>Pagination</h1>
          <div>
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                {/* <li className="page-item">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li> */}
                <li className="page-item">
                  <a className="page-link" aria-label="Previous" href="#">
                    <span aria-hidden="true">&laquo;</span>{" "}
                    <span className="sr-only"> Previous</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    6
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    7
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" aria-label="Next" href="#">
                    <span className="sr-only"> Next</span>
                    <span aria-hidden="true">&raquo;</span>{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <h1>Progress Bar</h1>
          <div>
            <div className="progress">
              <div
                className="progress-bar w-75"
                role="progressbar"
                // style={{"width:25%"}}
                aria-valuenow={"25"}
                aria-valuemin={"0"}
                aria-valuetext={"100"}
              ></div>{" "}
            </div>
            <div className="progress m-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "40%" }}
                aria-valuenow={"50"}
                aria-valuemin={"0"}
                aria-valuetext={"100"}
              ></div>{" "}
            </div>
            <div className="progress">
              <div
                className="progress-bar "
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow={"50"}
                aria-valuemin={"0"}
                aria-valuetext={"100"}
              ></div>{" "}
            </div>
          </div>
        </div>
        <div>
          <h1>Tooltips</h1>
          <div className="container">
            <button
              className="btn btn-warning"
              data-toggle="tooltip"
              data-placement="bottom"
              title="click to login"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="d-flex justify-content-center align-items-center">
      <h1>Footer</h1>
    </footer>
  );
}

export default App;
