import React from 'react';
import { nanoid } from 'nanoid';
import Wrapper from './App.styled';
import Form from './Form';
import Contacts from './Contacts';

class App extends React.Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, number } = event.target;

        const exist = this.state.contacts.some(
            (contact) => {
                return contact.name === name.value
            }
        );

        if (exist) {
            return alert(`${name.value} is already in contacts.`);
        }

        const newContact = {
            id: nanoid(),
            name: name.value,
            number: number.value,
        };

        this.setState((prevState) => ({
            contacts: [...prevState.contacts, newContact],
        }));
    };

    deleteContact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter(
                (contact) => contact.id !== id
            ),
        }));
    };

    searchContact = (event) => {
        this.setState({ filter: event.target.value });
    };

    getContacts = ({ contacts, filter }) => {
        const filteredContacts = contacts.filter(item => {
            return item.name.toLowerCase().includes(filter.toLowerCase());
        });

        const displayContacts = filter === '' ? contacts : filteredContacts;

        return (
            <ul>
                {displayContacts.map(({ id, name, number }) => (
                    <li key={id}>
                        <p>{name}: {number}</p>
                        <button
                            type='button'
                            name={id}
                            onClick={() => this.deleteContact(id)}
                        >Delete</button>
                    </li>
                ))}
            </ul>
        );
    };

    render() {
        return (
            <Wrapper>
                <Form
                    handle={this.handleSubmit}
                />
                <Contacts
                    search={this.searchContact}
                    contacts={this.getContacts}
                    data={this.state}
                />
            </Wrapper>
        );
    }
}

export default App;