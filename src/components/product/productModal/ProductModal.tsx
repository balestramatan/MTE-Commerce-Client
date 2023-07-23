import React, { useState } from "react";
import ProductInformation from "../productInformation/ProductInformation";
import { IProduct } from "../../../interfaces/interfaces";
import Button from "@mui/material/Button";
import layoutStyle from "./ProductModal.module.scss";
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
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <div className={layoutStyle.productModalContainer}>
          <ProductInformation product={product} />
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
