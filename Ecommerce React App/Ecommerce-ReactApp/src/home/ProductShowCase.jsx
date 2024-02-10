import React from "react";
import { useState } from "react";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const title = "Our Products";

const ProductData = [
  {
    imgUrl: "src/assets/images/categoryTab/01.jpg",
    cate: "Shoes",
    title: "Levi's Shoes",
    author: "assets/images/course/author/01.jpg",
    brand: "Levi's",
    price: "$180.00",
    id: 1,
  },
  {
    imgUrl: "src/assets/images/categoryTab/02.jpg",
    cate: "Bags",
    title: "Asethetic Bags",
    author: "assets/images/course/author/02.jpg",
    brand: "Emporium Mall Bags",
    price: "$160.00",
    id: 2,
  },
  {
    imgUrl: "src/assets/images/categoryTab/03.jpg",
    cate: "Phones",
    title: "iPhone 12 Pro",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "$899.00",
    id: 3,
  },
  {
    imgUrl: "src/assets/images/categoryTab/04.jpg",
    cate: "Bags",
    title: "Hiking Bag XL",
    author: "assets/images/course/author/04.jpg",
    brand: "Outfitters",
    price: "$299.00",
    id: 4,
  },
  {
    imgUrl: "src/assets/images/categoryTab/05.jpg",
    cate: "Shoes",
    title: "Outdoor Sports Shoes",
    author: "assets/images/course/author/05.jpg",
    brand: "Adidas",
    price: "$471.00",
    id: 5,
  },
  {
    imgUrl: "src/assets/images/categoryTab/06.jpg",
    cate: "Beauty",
    title: "JOHN Miker",
    author: "assets/images/course/author/06.jpg",
    brand: "Zaara",
    price: "$79.00",
    id: 6,
  },
  {
    imgUrl: "src/assets/images/categoryTab/07.jpg",
    cate: "Bags",
    title: "Look Less Chanel Bag ",
    author: "assets/images/course/author/01.jpg",
    brand: "Nike Air Force 1.",
    price: "$99.00",
    id: 7,
  },
  {
    imgUrl: "src/assets/images/categoryTab/08.jpg",
    cate: "Shoes",
    title: "Casual Sneakers",
    author: "assets/images/course/author/02.jpg",
    brand: "Bata",
    price: "$999.00",
    id: 8,
  },
];

const ProductShowCase = () => {
  const [items, setItems] = useState(ProductData);

  // Category wise filtering
  const filterItem = (categItem) => {
    const updateItems = ProductData.filter((curElem) => {
      return curElem.cate === categItem;
    });
    setItems(updateItems);
  };
  return (
    <div className="course-section style-3 padding-tb">
      {/* Shapes */}
      <div className="course-shape one">
        <img src="/src/assets/images/shape-img/icon/01.png" alt="" />
      </div>

      <div className="course-shape two">
        <img src="/src/assets/images/shape-img/icon/02.png" alt="" />
      </div>

      {/* Main section */}
      <div className="container">
        {/* Section-Header */}
        <div className="section-header" style={{ backgroundColor: "#581845" }}>
          <h2 className="title">{title}</h2>

          <div className="course-filter-group">
            <ul className="lab-ul">
              <li
                style={{ color: "#FFFFFF" }}
                onClick={() => setItems(ProductData)}
              >
                All
              </li>
              <li
                style={{ color: "#FFFFFF" }}
                onClick={() => filterItem("Shoes")}
              >
                Shoes
              </li>
              <li
                style={{ color: "#FFFFFF" }}
                onClick={() => filterItem("Bags")}
              >
                Bags
              </li>
              <li
                style={{ color: "#FFFFFF" }}
                onClick={() => filterItem("Phones")}
              >
                Phones
              </li>
              <li
                style={{ color: "#FFFFFF" }}
                onClick={() => filterItem("Beauty")}
              >
                Beauty
              </li>
            </ul>
          </div>
        </div>

        {/* Section Body */}

        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {items.map((product) => (
              <div key={product.id} className="col">
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={product.imgUrl} alt="" />
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">{product.cate}</a>
                        </div>
                        <div className="course-review">
                          <Rating />
                        </div>
                      </div>
                    </div>
                    {/* Content Section */}

                    <div className="course-content">
                      <Link to={`/shop/${product.id}`}>
                        <h6>{product.title}</h6>
                      </Link>
                      <div className="course-footer">
                        <div className="course-author">
                          <Link to="/" className="ca-name">
                            {product.brand}
                          </Link>
                        </div>
                        <div className="course-price">{product.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowCase;
