import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from "../Shop/Tags";
import PopularPost from "../Shop/PopularPost";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-github", className: "github" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  //   console.log(id);
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt={item.imgAlt}
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3 style={{ color: "#fff" }}>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>{" "}
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p style={{ color: "#fff" }}>
                                  Programming is the process of creating a set
                                  of instructions that tell a computer how to
                                  perform a task. It involves designing
                                  algorithms, writing code in a programming
                                  language, and testing and debugging that code
                                  to ensure it behaves as expected. Programmers
                                  use various programming languages, frameworks,
                                  and tools to develop software applications,
                                  websites, games, and other digital solutions.
                                </p>
                                <blockquote>
                                  <p style={{ color: "#fff" }}>
                                    Programming today is a race between software
                                    engineers striving to build bigger and
                                    better idiot-proof programs and the Universe
                                    trying to produce bigger and better idiots.
                                    So far, the Universe is winning
                                  </p>
                                  <cite>
                                    <a href="#">...Rick Cook</a>
                                  </cite>
                                </blockquote>
                                <p style={{ color: "#fff" }}>
                                  Coding is the act of translating logical
                                  instructions into a specific programming
                                  language to create software applications,
                                  websites, scripts, or other computational
                                  artifacts. It involves writing lines of code
                                  using syntax and semantics specific to the
                                  chosen programming language. Coders use
                                  programming concepts such as variables,
                                  functions, loops, and conditional statements
                                  to implement algorithms and solve problems.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p style={{ color: "#fff" }}>
                                  programming encompasses the broader process of
                                  conceptualizing, designing, and implementing
                                  solutions using code, while coding
                                  specifically refers to the act of writing and
                                  executing lines of code within a programming
                                  language to achieve a desired outcome. Both
                                  programming and coding are essential skills
                                  for software development and computer
                                  science..
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/XxXyfkrP298?si=lySUhhKuFCooMNGw"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    {" "}
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p style={{ color: "#fff" }}>
                                  Programming begins with conceptualizing a
                                  problem or task that needs to be solved using
                                  a computer. This involves understanding the
                                  requirements, identifying potential solutions,
                                  and devising an algorithmic approach to
                                  achieve the desired outcome. Design: After
                                  conceptualization, programmers design the
                                  structure and logic of the program. This
                                  includes breaking down the problem into
                                  smaller, manageable components, defining data
                                  structures, and planning the flow of
                                  execution. Implementation: Implementation
                                  involves writing code based on the design
                                  using a specific programming language.
                                  Programmers use syntax and semantics of the
                                  chosen language to translate their logic into
                                  executable instructions that a computer can
                                  understand.
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#" style={{ color: "#fff" }}>
                                        Agency
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" style={{ color: "#fff" }}>
                                        Business
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="http://syedmaaz-portfolio.atwebpages.com/"
                                        style={{ color: "#fff" }}
                                      >
                                        Portfolio
                                      </a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i
                              className="icofont-double-left"
                              style={{ color: "#fff" }}
                            >
                              Previous Blog
                            </i>
                          </a>
                          <a
                            href="#"
                            className="title"
                            style={{ color: "#fff" }}
                          >
                            Join us as we celebrate the era of online shopping
                          </a>
                        </div>
                        <div className="right">
                          <a href="#" className="prev">
                            <i
                              className="icofont-double-right"
                              style={{ color: "#fff" }}
                            >
                              Next Article
                            </i>
                          </a>
                          <a
                            href="#"
                            className="title"
                            style={{ color: "#fff" }}
                          >
                            Join us as we celebrate the era of online shopping
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Right Side  */}
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
