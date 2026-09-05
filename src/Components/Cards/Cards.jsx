/* eslint-disable react/prop-types */
import { Fragment } from "react";

const Cards = (props) => {
  return (
    <Fragment>
      <div className="w-3/5 overflow-hidden rounded-xl bg-white shadow">
        <img
          style={{
            height: "200px",
          }}
          src={props.imageurl}
        />
        <div className="p-4">
          <h3>{props.title}</h3>
          <p className="mb-2 text-slate-500">
            {props.email}
          </p>
          <p>{props.body}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default Cards;
