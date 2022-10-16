import PropTypes from 'prop-types';
import { TiDeleteOutline } from 'react-icons/ti';
import {
  ContactsList,
  Contact,
  Name,
  Number,
  Button,
  Info,
} from './Contacts.styled';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.length !== 0 ? (
        <ContactsList>
          {contacts.map(({ id, name, number }) => (
            <Contact key={id}>
              <Name>{name}: </Name>
              <Number>{number}</Number>
              <Button type="button" onClick={() => onDelete(id)}>
                <TiDeleteOutline />
              </Button>
            </Contact>
          ))}
        </ContactsList>
      ) : (
        <Info>No contacts in your Phonebook!</Info>
      )}
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
