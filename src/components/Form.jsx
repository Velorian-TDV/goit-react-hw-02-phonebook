import React from "react";
import FormSection from "./FormSection";
import PropTypes from 'prop-types';

const Form = ({ handle }) => (
    <form onSubmit={handle} className='form'>
        <h2>Phonebook</h2>
        
        <FormSection
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />

        <FormSection
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        
        <button type="submit">Add Contact</button>
    </form>
)

Form.propTypes = {
    handle: PropTypes.func.isRequired
}

export default Form;