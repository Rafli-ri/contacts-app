// eslint-disable-next-line no-unused-vars
import React from "react";
import ContactItemBody from "./contactItemBody";
import ContactItemImage from "./ContacItemImage";
import DeleteButton from "./components/DeleteButton";
// eslint-disable-next-line react/prop-types
function ContactItem({ imageUrl, name, tag, id, onDelete }) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default ContactItem;