import React from "react";
import PropTypes from 'prop-types';

const Contacts = ({ search, contacts, data }) => (
    <section className='contacts'>
        <h2>Contacts</h2>
        <label htmlFor='search'>Find contact by name</label>
        <input type="text" id='search' onChange={search} placeholder="Search"/>
        {contacts(data)}
    </section>
)

Contacts.propTypes = {
    search: PropTypes.func.isRequired,
    contacts: PropTypes.func.isRequired,
    data: PropTypes.shape({
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            })
        ).isRequired,
        filter: PropTypes.string,
    }).isRequired,
};

export default Contacts;