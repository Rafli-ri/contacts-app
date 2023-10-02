import React from "react";
import ContactList from "../ContactList";
import { getContacts, deleteContact } from "../utils/api";
// import { deleteContact } from "../utils/data";

import SearchBar from "../SearchBar";
class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // contacts: getContacts(),
      contacts: [],
      keyword: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async onDeleteHandler(id) {
    await deleteContact(id);

    // update the contact state from data.js
    const { data } = await getContacts();
    this.setState(() => {
      return {
        contacts: data,
      };
    });
  }

  async componentDidMount() {
    const { data } = await getContacts();

    this.setState(() => {
      return {
        contacts: data,
      };
    });
  }
  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
  }
  render() {
    const contacts = this.state.contacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <section>
        <h2>Daftar Kontak</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
        {/* <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        /> */}
      </section>
    );
  }
}

export default HomePage;
