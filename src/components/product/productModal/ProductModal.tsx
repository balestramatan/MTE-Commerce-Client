import React, { useState } from "react";
import ProductInformation from "../productInformation/ProductInformation";
import { IProduct } from "../../../interfaces/interfaces";
import productModalStyle from "./ProductModal.module.scss";
import Modal from "@mui/material/Modal";

interface IProps {
  product: IProduct;
}

const ProductModal = (props: IProps) => {
  const { product } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className={productModalStyle.productModalContainer}>
          <ProductInformation product={product} />
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
