// eslint-disable-next-line no-unused-vars
import React from "react";
// import { addContact } from "../utils/data";
import { addContact } from "../utils/api";
import ContactInput from "../ContactInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();

  async function onAddContactHandler(contact) {
    await addContact(contact);
    navigate("/");
  }

  return (
    <section>
      <h2>Tambah kontak</h2>
      <ContactInput addContact={onAddContactHandler} />
    </section>
  );
}

export default AddPage;
