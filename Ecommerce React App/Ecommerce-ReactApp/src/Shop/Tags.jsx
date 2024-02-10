import React from "react";

const title = "Some Most Popular Tags";

const tagsList = [
  { link: "#", text: "Fashion" },
  { link: "#", text: "Electronics" },
  { link: "#", text: "Health & Wellness" },
  { link: "#", text: "Automotive" },
  { link: "#", text: "Sports & Outdoors" },
  { link: "#", text: "Jewelry & Accessories " },
  { link: "#", text: "Gifts & Occasions" },
  { link: "#", text: "Furniture & Decor" },
  { link: "#", text: "Food & Groceries" },
];
const Tags = () => {
  return (
    <div className="widget widget-tags">
      <div className="widget-header">
        <h5 className="title" style={{ color: "red" }}>
          {title}
        </h5>
      </div>
      <ul className="widget-wrapper">
        {tagsList.map((val, i) => (
          <li key={i}>
            <a href={val.link} style={{ color: "red" }}>
              {val.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
