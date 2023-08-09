import React, { useState } from "react";
import ProductInformation from "../productInformation/ProductInformation";
import { IProduct } from "../../../interfaces/interfaces";
import productModalStyle from "./ProductModal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

interface IProps {
  product: IProduct;
  isOpen: boolean;
  handleClose: any;
}

const ProductModal = (props: IProps) => {
  const { product, isOpen, handleClose } = props;

  return (
    <div>
      <Modal open={isOpen} onClose={handleClose}>
        <div className={productModalStyle.productModalContainer}>
          <span onClick={handleClose} className={productModalStyle.productModalCloseButtonContainer}>
              <CloseIcon />
          </span>
          <ProductInformation product={product} />
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
