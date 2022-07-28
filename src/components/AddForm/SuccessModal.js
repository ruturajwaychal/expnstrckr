import React from "react";
import Modal from "react-modal";
import "./SuccessModal.css";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import img from "../../assets/images/added-image.png";

const SuccessModal = ({ modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#71ccca",
      borderRadius: "12px",
    },
  };

  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <label>Expense Added Successfully</label>
        <img src={img} alt="Expense added" className="added-image" />
        <Link to="/">
          <div className="take-home-button">
            <AiOutlineHome className="icon" />
            Home
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
