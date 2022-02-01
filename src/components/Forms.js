import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
  padding-top: 25px;
  width: 100%;
  margin: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  visibility: inherit;
  font-size: 18px;
  letter-spacing: 1.3px;
  line-height: 2;
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* transition-delay: 1s;
  transform: translate(0);
  opacity: 1;
  transition-duration: 1.5s;
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.43, 0.26, 0.12, 1.01); */
`;
const Input = styled.input`
  width: 80%;
  display: flex;
  outline: none;
  color: #fff;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #fff;
  margin-bottom: 50px;
  background-color: transparent;
  ::placeholder {
    font-size: 18px;
    font-weight: 300;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
const FormButton = styled.button`
  width: 120px;
  margin-top: 40px;
  color: #000;
  font-weight: 600;
  background-color: #fff;
  padding: 14px 40px;
  border: none;
  cursor: pointer;
  display: inline-block;
`;
const TextForm = styled.textarea`
  width: 80%;
  margin-top: 20px;
  background-color: transparent;
  color: #fff;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #fff;
  ::placeholder {
    font-size: 18px;
    font-weight: 300;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input
          type='text'
          placeholder='First name'
          {...register('First name', { required: true, maxLength: 80 })}
        />

        <Input
          type='text'
          placeholder='Last name'
          {...register('Last name', { required: true, maxLength: 100 })}
        />
        <Input
          type='text'
          placeholder='Email'
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <TextForm
          placeholder='Your message'
          {...register('Message', { required: true, maxLength: 350 })}
        />
        <FormButton type='submit'>SEND</FormButton>
      </InputContainer>
    </Form>
  );
}
