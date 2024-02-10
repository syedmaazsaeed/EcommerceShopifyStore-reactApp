import React from "react";
import PageHeader from "../components/PageHeader";
import blogList from "../utilis/blogdata";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <PageHeader title="Our Blog Section" curPage="Blogs" />
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
              {blogList.map((blog, i) => (
                <div className="col" key={i}>
                  <div className="post-item">
                    <div
                      className="post-inner"
                      style={{ backgroundColor: "black" }}
                    >
                      <div className="post-thumb">
                        <Link to={`/blog/${blog.id}`}>
                          <img src={blog.imgUrl} alt="" />
                        </Link>
                      </div>
                      <div className="post-content" style={{ color: "white" }}>
                        <Link to={`/blog/${blog.id}`}>
                          {" "}
                          <h4 style={{ color: "white" }}>{blog.title}</h4>
                        </Link>
                        <div className="meta-post">
                          <ul className="lab-ul">
                            {blog.metaList.map((val, i) => (
                              <li key={i}>
                                <i className={val.iconName}></i> {val.text}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <p style={{ color: "white" }}>{blog.desc}</p>
                        {/* <a href={blog.link} className="blog-btn">
                          Read More
                        </a> */}
                      </div>
                      <div className="post-footer" style={{ color: "white" }}>
                        <div className="pf-left">
                          <Link
                            to={`/blog/${blog.id}`}
                            className="lab-btn-text"
                            style={{ color: "white" }}
                          >
                            {blog.btnText}
                            <i className="icofont-external-link"></i>
                          </Link>
                        </div>
                        <div className="pf-right">
                          <i className="icofont-comment"></i>
                          <span className="comment-count">
                            {blog.commentCount}
                          </span>
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
    </div>
  );
};

export default Blog;
