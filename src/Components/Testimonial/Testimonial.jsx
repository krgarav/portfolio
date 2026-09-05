import { Fragment, useEffect, useState } from "react";
import Cards from "../Cards/Cards";
const Testimonial = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const populate = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1/comments"
        );
        const imgresponse = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=5"
        );
        const data = await response.json();
        const imgdata = await imgresponse.json();
        const combinedArray = data.map((item, index) => ({
          ...item,
          ...imgdata[index],
        }));
        setComments(combinedArray);
      } catch (err) {
        console.log("Error occured : ", err);
      }
    };
    populate();
  }, []);
  console.log(comments);
  const cardItems = comments.map((item, index) => {
    return (
      <div key={index} className="flex flex-col items-center gap-4 py-8">
        <div className="h-[80vh] w-full bg-[var(--ink)]">
            <br/>
          <div className="relative ml-[30%]">
            <Cards
              title={item.name}
              body={item.body}
              imageurl={item.url}
            />
            ;
          </div>
        </div>

        <div className="text-center text-white">
          <h3>{item.name}</h3>
          <p>{item.email}</p>
        </div>
      </div>
    );
  });
  return (
    <Fragment>
      <div className="bg-[var(--paper)] px-[8%] py-24 text-[var(--ink)]" id="testimonial">
        <div className="flex flex-col">
          <span className="heading">Testimonial</span>
          <span className="subheading">What client says about my work?</span>
          <div>{cardItems}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonial;
