import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

test('renders ContactForm.js to the DOM without errors', () => {
  render(<ContactForm />)
})

test('user can fill out and submit form', () => {
  render(<ContactForm />)

  //Arrange: render component
  render(<ContactForm />);

  //Act:
  //1. get access to form fields
  const firstNameInput = screen.getAllByLabelText(/first name*/i)
  const lastNameInput = screen.getAllByLabelText(/last name*/i)
  const emailInput = screen.getAllByLabelText(/email/i)
  const messageInput = screen.getAllByLabelText(/message/i)

  //2. add text to our fields

  //3. get access to and click our button

  //Assert Check that text is on screen
})