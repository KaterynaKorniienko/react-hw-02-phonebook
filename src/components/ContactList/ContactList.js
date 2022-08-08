import React from 'react';
import PropTypes from "prop-types";

import './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="wrap">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
              <p className="name">{contact.name}:</p>
              <p className="tel">{contact.number}</p>
              <button
                className="btn_list"
                onClick={() => {
                  deleteContact(contact.id);
                }}
              >
                Delete
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;