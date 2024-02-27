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
    <div className="px-4">
      <h1>Day 04 and 05</h1>
      {/* <div>
        <h1>Media Object</h1>
        <div className="container-fluid d-flex align-items-center border border-4 border-warning">
          <div className="flex-shrink-0">
            <img
              src={products[1].thumbnail}
              alt="img"
              width={240}
              className="align-self-end"
            />
            <div className="flex-grow-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <h1>Typography</h1>
        <div className="container">
          <h1>h1. Bootstrap heading</h1>
          <h2>h2. Bootstrap heading</h2>
          <h3>h3. Bootstrap heading</h3>
          <h4>h4. Bootstrap heading</h4>
          <h5>h5. Bootstrap heading</h5>
          <h6>h6. Bootstrap heading</h6>
          <h1>---Bootstrap Classes---</h1>
          <p className="h1">h1. Bootstrap heading</p>
          <p className="h2">h2. Bootstrap heading</p>
          <p className="h3">h3. Bootstrap heading</p>
          <p className="h4">h4. Bootstrap heading</p>
          <p className="h5">h5. Bootstrap heading</p>
          <p className="h6">h6. Bootstrap heading</p>
          <h1>Custom Heading</h1>
          <h3>
            Fancy display heading
            <small class=" text-muted text-body-secondary">
              {" "}
              With faded secondary text
            </small>
          </h3>
          <h1>Display</h1>
          <h1 className="display-1">Display 1</h1>
          <h1 className="display-2">Display 2</h1>
          <h1 className="display-3">Display 3</h1>
          <h1 className="display-4">Display 4</h1>
          <h1 className="display-5">Display 5</h1>
          <h1 className="display-6">Display 6</h1>
          <h1>
            Lead -{" "}
            <p class="lead">
              This is a lead paragraph. It stands out from regular paragraphs.
            </p>
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <h1>Inline text elements</h1>
          <p>
            You can use the mark tag to <mark>highlight</mark> text.
          </p>
          <p>
            <del>This line of text is meant to be treated as deleted text.</del>
          </p>
          <p>
            <s>
              This line of text is meant to be treated as no longer accurate.
            </s>
          </p>
          <p>
            <ins>
              This line of text is meant to be treated as an addition to the
              document.
            </ins>
          </p>
          <p>
            <u>This line of text will render as underlined.</u>
          </p>
          <p>
            <small>
              This line of text is meant to be treated as fine print.
            </small>
          </p>
          <p>
            <strong>This line rendered as bold text.</strong>
          </p>
          <p>
            <em>This line rendered as italicized text.</em>
          </p>
          <p>
            <abbr title="attribute">attr</abbr>
          </p>
          <p>
            <abbr title="HyperText Markup Language" class="initialism">
              HTML
            </abbr>
          </p>
          <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <p className="blockquote">Quote is there ? </p>
        </div>
      </div>
      <div>
        <h1>In the evening</h1>
        <div className="container">
          <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figure class="text-center">
            <blockquote class="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
          <figure class="text-end">
            <blockquote class="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
          <ul class="list-unstyled">
            <li>This is a list.</li>
            <li>It appears completely unstyled.</li>
            <li>Structurally, it's still a list.</li>
            <li>
              However, this style only applies to immediate child elements.
            </li>
            <li>
              Nested lists:
              <ul>
                <li>are unaffected by this style</li>
                <li>will still show a bullet</li>
                <li>and have appropriate left margin</li>
              </ul>
            </li>
            <li>This may still come in handy in some situations.</li>
          </ul>
          <ul class="list-inline">
            <li class="list-inline-item">This is a list item.</li>
            <li class="list-inline-item">And another one.</li>
            <li class="list-inline-item">But they're displayed inline.</li>
          </ul>
          <h1>Description</h1>
          <dl class="row">
            <dt class="col-sm-3">Description lists</dt>
            <dd class="col-sm-9">
              A description list is perfect for defining terms.
            </dd>

            <dt class="col-sm-3">Term</dt>
            <dd class="col-sm-9">
              <p>Definition for the term.</p>
              <p>And some more placeholder definition text.</p>
            </dd>

            <dt class="col-sm-3">Another term</dt>
            <dd class="col-sm-9">
              This definition is short, so no extra paragraphs or anything.
            </dd>

            <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
            <dd class="col-sm-9">
              This can be useful when space is tight. Adds an ellipsis at the
              end.
            </dd>

            <dt class="col-sm-3">Nesting</dt>
            <dd class="col-sm-9">
              <dl class="row">
                <dt class="col-sm-4">Nested definition list</dt>
                <dd class="col-sm-8">
                  I heard you like definition lists. Let me put a definition
                  list inside your definition list.
                </dd>
              </dl>
            </dd>
          </dl>
        </div>
      </div>
      <div>
        <h1>Images in Bootstrap Ver 5.3</h1>
        <div className="container">
          <img src={products[3].thumbnail} alt="img"></img>
        </div>
        <div className="container m-2">
          <img
            className="img-fluid img-thumbnail float-right"
            src={products[3].thumbnail}
            width={"100%"}
            alt="img"
          />
          <img
            className="img-fluid float-left"
            src={products[5].thumbnail}
            alt="img2"
            width={"100%"}
          />
        </div>
        <div className="container"></div>
      </div>
      <div>
        <h1>Tables in Bootstrap</h1>
        <div>
          <table className="table">
            <thead>
              <th scope="row">Sr No</th>
              <th scope="row">Product Name</th>
              <th scope="row">Description</th>
              <th scope="row">Price</th>
            </thead>
            <tbody>
              {products
                .filter((item) => item.id <= 5)
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.price}$</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <h1>Table Styling </h1>
          <table className="table table-dark table-striped">
            <thead className="thead-dark">
              <th scope="row">Sr No</th>
              <th scope="row">Product Name</th>
              <th scope="row">Description</th>
              <th scope="row">Price</th>
            </thead>
            <tbody>
              {products
                .filter((item) => item.id <= 10 && item.id > 5)
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.price}$</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <h1>Columns and Strip and border</h1>
          <table className="table table-bordered table-striped-columns">
            <thead className="thead-dark">
              <th scope="row">Sr No</th>
              <th scope="row">Product Name</th>
              <th scope="row">Description</th>
              <th scope="row">Price</th>
            </thead>
            <tbody>
              {products
                .filter((item) => item.id >= 11 && item.id <= 15)
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.price}$</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <h1>Table Hover and Color </h1>
          <table className="table table-hover">
            <thead>
              <th scope="row">Sr No</th>
              <th scope="row">Product Name</th>
              <th scope="row">Description</th>
              <th scope="row">Price</th>
            </thead>
            <tbody>
              {products
                .filter((item) => item.id >= 16 && item.id <= 20)
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{item.id}</th>
                      <td className="table-warning">{item.title}</td>
                      <td className="table-danger">{item.description}</td>
                      <td className="table-success">{item.price}$</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
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
