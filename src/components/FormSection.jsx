import React from "react";
import PropTypes from 'prop-types'
import { nanoid } from "nanoid";

const FormSection = ({ type, name, pattern, title }) => (
    <section key={nanoid()}>
        <label htmlFor={name}>{name}</label>
        <input
            type={type}
            name={name}
            id={name}
            pattern={pattern}
            title={title}
            required
        />
    </section>
)

FormSection.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pattern: PropTypes.string,
    title: PropTypes.string
}

export default FormSection;