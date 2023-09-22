
"use client";

import React, { useEffect, useState} from "react";

import { productFormControls } from "@/utils/config";
import { useRouter } from "next/navigation";
import Button from "../formControls/Button";
import Modal from "@/modal";

const intialFormData = {
  name: "",
  price: "",
  visitors: 0,
  sales: 0,
  month: "",
};

export default function ProductLayout({ children }:{children:React.ReactNode}) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(intialFormData);

  const router = useRouter();

  console.log(formData);

  async function handleAddProduct() {
    const res = await fetch("/api/product/add-products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data && data.success) {
      setFormData(intialFormData);
      setShowModal(false);
      router.refresh();
    } else {
      setFormData(intialFormData);
      setShowModal(false);
    }
  }

  return (
    <div>
      <Button onClick={() => setShowModal(true)} text={"Add New Product"} />
      {children}
      <Modal
      title="abc"
        show={showModal}
        setShow={setShowModal}
        formData={formData}
        setFormData={setFormData}
        formControls={productFormControls}
        onAdd={handleAddProduct}
      />
    </div>
  );
}