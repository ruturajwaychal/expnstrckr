import React, { useState } from "react";
import { categories } from "../../constants/add-expense";
import "react-toastify/dist/ReactToastify.css";
import "./AddForm.css";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import SuccessModal from "./SuccessModal";
import { FaRegPaperPlane } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const AddForm = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const cat = categories;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };
  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
    console.log(category);
  };

  const handleSubmit = () => {
    console.log("submitted");
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter complete data");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setModalOpen(!modalOpen);
  };

  return (
    <div className="add-form">
      <SuccessModal modalOpen={modalOpen} />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <div className="form-item">
        <label>Title</label>
        <input
          placeholder=" Add Expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input
          placeholder=" Enter Amount"
          className="amount-input"
          onChange={(e) => handleAmount(e)}
          value={amount}
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <RiArrowDropDownLine className="icon" />
          </div>
          {categoryOpen && (
            <div className="category-container">
              {cat.map((category) => (
                <div
                  className="category-item"
                  style={{ borderRight: `5px solid ${category.color}` }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label style={{ marginLeft: "5px" }}>{category.title}</label>
                  <img src={category.icon} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <FaRegPaperPlane className="icon" />
        </div>
      </div>
    </div>
  );
};

export default AddForm;

// import React, { useState } from "react";
// import "./AddForm.css";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { categories } from "../../constants/add-expense";
// import { FaRegPaperPlane } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { addExpense } from "../../redux/actions/expenses";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import SuccessModal from "./SuccessModal";

// const AddForm = () => {
//   const cat = categories;
//   const [categoryOpen, setCategoryOpen] = useState(false);
//   const [title, setTitle] = useState("");
//   const [amount, setAmount] = useState("");
//   const [category, setCategory] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   const dispatch = useDispatch();

//   const handleTitle = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleAmount = (e) => {
//     const val = parseFloat(e.target.value);
//     if (isNaN(val)) {
//       setAmount("");
//       return;
//     }
//     setAmount(val);
//   };

//   const handleCategory = (category) => {
//     setCategory(category);
//     setCategoryOpen(false);
//   };

//   const handleSubmit = () => {
//     if (title === "" || amount === "" || !category) {
//       const notify = () => toast("Please Enter Valid Data!");
//       notify();
//       return;
//     }
//     const data = {
//       title,
//       amount,
//       category,
//       createAt: new Date(),
//     };
//     console.log("here");
//     dispatch(addExpense(data));
//     setModalOpen(true);
//   };
//   return (
//     <>
//       <div className="add-form">
//         <SuccessModal ModalOpen={modalOpen} setModalOpen={setModalOpen} />
//         <ToastContainer
//           position="bottom-left"
//           autoClose={1500}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           pauseOnHover
//         />

//         <div className="form-item">
//           <label>Title</label>
//           <input
//             placeholder="Expenditure"
//             value={title}
//             onChange={(e) => handleTitle(e)}
//           />
//         </div>
//         <div className="form-item">
//           <label>Amount ₹</label>
//           <input
//             placeholder="Enter Amount"
//             value={amount}
//             className="amt-input"
//             onChange={(e) => handleAmount(e)}
//           />
//         </div>
//         <div className="category-content-parent">
//           <div className="category">
//             <div
//               className="category-dropdown"
//               onClick={() => setCategoryOpen(!categoryOpen)}
//             >
//               <label>{category ? category.title : "Category"}</label>
//               <RiArrowDropDownLine className="icon" />
//             </div>
//             {categoryOpen && (
//               <div className="category-container">
//                 {cat.map((category) => (
//                   <div
//                     className="category-item"
//                     style={{ borderRight: `5px solid ${category.color}` }}
//                     key={category.id}
//                     onClick={() => handleCategory(category)}
//                   >
//                     <label>{category.title}</label>
//                     <img src={category.icon.default} alt={category.title} />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="form-add-button">
//           <div onClick={handleSubmit}>
//             <label>Add</label>
//             <FaRegPaperPlane className="icon" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddForm;
