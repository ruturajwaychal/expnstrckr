import React, { useState } from "react";
import "./Topfold.css";
import { AiOutlineSearch, AiOutlineLeft } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";

const Topfold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <>
      <div className="topfold">
        {window.location.pathname === "/" ? (
          <div className="home-topfold">
            <div className="search-bar">
              <AiOutlineSearch className="icons" />
              <input
                placeholder="Search here"
                value={query}
                onChange={() => handleQuery}
              />
            </div>
            <Link
              to="/add-expense"
              style={{ textDecoration: "none", color: "#282F3F" }}
            >
              <div className="add-btn">
                <MdAddCircleOutline className="icons" />
                <label
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Add
                </label>
              </div>
            </Link>
          </div>
        ) : (
          <div className="add-topfold">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#282F3F",
                cursor: "pointer",
              }}
            >
              <div className="add-topfoldbtn">
                <AiOutlineLeft className="icons" />
                <label
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Back
                </label>
              </div>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "#282F3F" }}>
              <div className="cancel">
                <MdOutlineCancel className="icons" />
                <label
                  style={{
                    cursor: "pointer",
                  }}
                >
                  cancel
                </label>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Topfold;
