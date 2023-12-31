import React from "react";
import ProductInformation from "../productInformation/ProductInformation";
import productModalStyle from "./ProductModal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Product from "../../../models/Product.model";

interface IProps {
  product: Product;
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
          <ProductInformation handleClose={handleClose} product={product} />
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
