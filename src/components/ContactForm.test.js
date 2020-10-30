import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ContactForm from './ContactForm'
import * as validator from 'email-validator'

test('renders ContactForm.js to the DOM without errors', () => {
  render(<ContactForm />)
})

test('user can fill out and submit form',async () => {

  //Arrange: render component
  render(<ContactForm />);

  //Act:
  //1. get access to form fields
  const firstNameInput = screen.getByLabelText(/first name*/i)
  const lastNameInput = screen.getByLabelText(/last name*/i)
  const emailInput = screen.getByLabelText(/email*/i)
  const messageInput = screen.getByLabelText(/message/i)

  //2. add text to our fields
  fireEvent.change(firstNameInput, { target:{ value:'April', name:'firstName'}});
  fireEvent.change(lastNameInput, { target:{ value:'Darger', name:'lastName'}});
  fireEvent.change(emailInput, { target:{ value:'aa', name:'email'}});
  fireEvent.change(messageInput, { target:{ value:'abc and 123', name:'message'}});

  //3. get access to and click our button
  const button = screen.getByTestId('button')
  fireEvent.click(button)

  //Assert Check that text is on screen
  await waitFor(() => {    
    const firstNameText = screen.getByText(/april/i)
    expect(firstNameText).toBeTruthy()
    const lastNameInput = screen.getByText(/darger/i)
    expect(lastNameInput).toBeTruthy()
    const emailInput = screen.getByText(/aa/i)
    expect(emailInput).toBeTruthy()
    const messageInput = screen.getByText(/abc and 123/i)
    expect(messageInput).toBeTruthy()

    expect(validator.validate('april@gmail.com')).toBeTruthy
  });
})