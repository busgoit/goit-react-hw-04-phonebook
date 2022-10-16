import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { StyledForm, FormLabel, FormInput, SubmitButton } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  onFormSubmitHandle = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <StyledForm onSubmit={this.onFormSubmitHandle}>
        <FormLabel htmlFor={this.nameInputId}>Name</FormLabel>
        <FormInput
          type="text"
          name="name"
          id={this.nameInputId}
          value={name}
          onChange={this.onInputChange}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <FormLabel htmlFor={this.numberInputId}>Number</FormLabel>
        <FormInput
          type="tel"
          name="number"
          id={this.numberInputId}
          value={number}
          onChange={this.onInputChange}
          placeholder="Enter phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <SubmitButton type="submit">Add contact</SubmitButton>
      </StyledForm>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
