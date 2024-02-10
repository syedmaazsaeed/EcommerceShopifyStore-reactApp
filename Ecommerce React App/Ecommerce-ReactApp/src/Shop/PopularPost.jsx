import React from "react";
import { Link } from "react-router-dom";

const title = "Popular Post";
const postList = [
  {
    id: 1,
    imgUrl: "/src/assets/images/blog/10.jpg",
    imgAlt: "Check Your Internet Connection",
    title: "Hackers don't break in they find a way",
    date: "Jan 25,2024",
  },
  {
    id: 2,
    imgUrl: "/src/assets/images/blog/11.jpg",
    imgAlt: "Check Your Internet Connection",
    title: "Hackers don't wait they innovate",
    date: "Dec 05,2023",
  },
  {
    id: 3,
    imgUrl: "/src/assets/images/blog/12.jpg",
    imgAlt: "Check Your Internet Connection",
    title: "In the digital realm, trust is a vulnerability.",
    date: "Jan 30,2024",
  },
  {
    id: 4,
    imgUrl: "/src/assets/images/blog/09.jpg",
    imgAlt: "Check Your Internet Connection",
    title: "Cybersecurity is a race without a finish line.",
    date: "Feb 05,2024",
  },
];

const PopularPost = () => {
  return (
    <div className=" widget widget-post">
      <div className="widget-header">
        <h5 className="title" style={{ color: "#800000" }}>
          {title}
        </h5>
      </div>

      <ul className="widget-wrapper">
        {postList.map((blog, i) => (
          <li key={i} className="d-flex flex-wrap justify-content-between">
            <div className="post-thumb">
              <Link to={`/blog/${blog.id}`}>
                <img src={blog.imgUrl} alt="" />
              </Link>
            </div>
            <div className="post-content">
              <Link to={`/blog/${blog.id}`}>
                <h5 style={{ color: "#800000" }}>{blog.title}</h5>
              </Link>
              <p style={{ color: "#800000" }}>{blog.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPost;
