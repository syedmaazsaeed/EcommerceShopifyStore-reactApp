import { React, useState } from "react";
import Rating from "../components/Rating";

const reviewtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Irfan Malik",
    date: "Posted on Nov 10, 2023 at 2:40 am",
    desc: "Passionate entrepreneur  Irfan Malik  spearheads innovative initiatives, laying the foundation for long-term success. His high-impact strategies and commitment to excellence define a journey of success. Dive into his story, enriched with SEO mastery, PSD expertise, and strategic monetization.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Malik Ahmed",
    date: "Posted on Aug 12, 2023 at 9:57 am",
    desc: "Passionate entrepreneur Malik Ahmed spearheads innovative initiatives, laying the foundation for long-term success. His high-impact strategies and commitment to excellence define a journey of success.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Shahid Anwar",
    date: "Posted on Jan 10, 2024 at 6:57 am",
    desc: "Introducing Shahid Anwar, a visionary entrepreneur making waves in the business world. Shahid's journey is a testament to his innovative spirit and unwavering determination. As the driving force behind groundbreaking initiatives, he has laid the foundation for long-term success. Dive into his inspiring story, where themes of awesomeness seamlessly blend with SEO brilliance, PSD proficiency, and strategic monetization.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Black Hat Hacker",
    date: "Posted on Nov 25, 2022 at 14:57 pm",
    desc: "Ethical hacker committed to securing digital landscapes. Hackers journey revolves around ethical hacking, where she employs her skills to identify vulnerabilities and enhance cybersecurity. Dive into her story, where themes of awesomeness merge with ethical hacking expertise, showcasing a dedication to safeguarding digital assets responsibly. Witness covalent leadership as Hackers contributes to a safer online environment, ensuring that her skills are used for the betterment of cybersecurity.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);

  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Reviews
        </li>
      </ul>

      {/* Description and Review Content */}

      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt="" />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/*  Adding Review Field */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviewtitle}</h5>
              </div>
              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" Your Mail *"
                  />
                </div>

                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-4"> Your Rating </span>
                    <Rating />
                  </div>
                </div>
                <div className="col-md-12" col-12>
                  <textarea
                    name="message"
                    id="message"
                    rows="9"
                    placeholder="Type Message Here "
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Description */}

        <div className="description">
          <p>
            Welcome to our vibrant online marketplace, where shopping meets
            convenience and quality. At Shopping Digital Hub we pride ourselves
            on curating a diverse collection of products that cater to your
            every need and desire.Explore a seamless and user-friendly shopping
            experience as you browse through our extensive catalog of the latest
            fashion trends, cutting-edge electronics, exquisite home decor, and
            much more. Our commitment to excellence extends beyond our product
            offerings, as we prioritize customer satisfaction through secure
            transactions, prompt deliveries, and responsive customer support.
            Embrace the future of online shopping with us, where innovation
            meets style, and each click opens a world of possibilities
          </p>

          <div className="post-item">
            <div className="post-thumb">
              <img
                src="/src/assets/images/shop/01.jpg"
                alt="Relod Page Again"
              />
            </div>

            <div className="post-content">
              <ul className="lab-ul">
                <li>High-quality fashion items for all occasions</li>
                <li>State-of-the-art electronics and gadgets</li>
                <li>Exquisite home decor to elevate your living space</li>
                <li>Secure and prompt delivery services</li>
                <li>
                  Responsive customer support for a hassle-free experience
                </li>
                <li>
                  Environmentally-friendly and sustainable product options
                </li>
                <li>Personalized recommendations based on your preferences</li>
                <li>Easy returns and exchanges for your convenience</li>
              </ul>
            </div>
          </div>
          <p>
            Indulge in a world of premium shopping where quality meets
            affordability. Our commitment to providing high-quality fashion
            items for all occasions ensures that you step out in style, whether
            it's a special event or a casual day out. Discover the latest trends
            in state-of-the-art electronics and gadgets, designed to enhance
            your digital lifestyle. Elevate your living space with our exquisite
            home decor collection, curated to bring sophistication and
            personality to every corner of your home. Enjoy the peace of mind
            that comes with our secure and prompt delivery services, ensuring
            your purchases reach you in pristine condition. Should you have any
            inquiries or need assistance, our responsive customer support team
            is at your service, making your shopping experience with Shopping
            Digital Hub truly hassle-free.
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
