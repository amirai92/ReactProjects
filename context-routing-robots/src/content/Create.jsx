import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RoboStore } from "../state/Robo.store";
import { useFormik } from "formik";
import * as Yup from "yup";

//Formik
const onSubmit = (values) => {
  console.log("Form data", values);
};
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  description: "",
  avatar: "https://robohash.org/etaperiamqui.jpg?size=300x300&set=set1"
};
const validationSchema = Yup.object({
  firstName: Yup.string().required("This Field is Required"),
  lastName: Yup.string().required("This Field is Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("This Field is Required"),
  country: Yup.string().required("This Field is Required"),
  avatar: Yup.string().required("This Field is Required")
});

const Create = () => {
  let histroy = useHistory();
  const firstName = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const email = useRef("");
  const description = useRef("");
  const avatar = useRef("");

  const {
    all_robots,
    set_all_robots,
    set_filtered_robots,
    set_selected_robot
  } = useContext(RoboStore);

  const addRobot = () => {
    const details = {
      id: all_robots.length + 1,
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      email: email.current.value,
      country: country.current.value,
      description: description.current.value,
      avatar: !avatar.current.value
        ? "https://robohash.org/etaperiamqui.jpg?size=300x300&set=set1"
        : avatar.current.value
    };
    all_robots[all_robots.length] = details;
    set_all_robots(all_robots);
    set_filtered_robots(all_robots);
    set_selected_robot(details);

    histroy.push("/browse");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  //contains all the form values:
  console.log("Form values ", formik.values);

  return (
    <Box>
      <Title>Create a new Bot</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Label>Bot First Name:</Label>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          ref={firstName}
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div style={{ color: "red" }}>{formik.errors.firstName}</div>
        ) : null}
        <Label>Bot Last Name:</Label>
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          ref={lastName}
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div style={{ color: "red" }}>{formik.errors.lastName}</div>
        ) : null}
        <Label>Bot email:</Label>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          ref={email}
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        <Label>Bot country:</Label>
        <Input
          type="text"
          placeholder="Country"
          name="country"
          ref={country}
          {...formik.getFieldProps("country")}
        />
        {formik.touched.country && formik.errors.country ? (
          <div style={{ color: "red" }}>{formik.errors.country}</div>
        ) : null}
        <Label>Bot description:</Label>
        <TextArea
          type="text"
          placeholder="Description"
          name="description"
          ref={description}
          {...formik.getFieldProps("description")}
        />
        <Label> avatar URL:</Label>
        <TextArea
          type="text"
          placeholder="Avatar"
          name="avatar"
          ref={avatar}
          {...formik.getFieldProps("avatar")}
        />
        {formik.touched.avatar && formik.errors.avatar ? (
          <div style={{ color: "red" }}>{formik.errors.avatar}</div>
        ) : null}
        <Button
          disabled={!(formik.isValid && formik.dirty)}
          onClick={(event) => {
            event.preventDefault();
            addRobot();
          }}
        >
          Add Robot
        </Button>
      </Form>
    </Box>
  );
};
export default Create;

const Title = styled.h1`
  font-size: 3.8rem;
  color: slategray;
  font-family: "Expletus Sans";
  text-align: left;
  font-size: 2.8rem;
`;

const Box = styled.div`
  font-size: 3rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  height: 3.5rem;
  width: 24rem;
  outline: none;
  border-radius: 0.5rem;
  border: white 2px solid;
  transition: border 0.5s;
  padding: 1rem;

  &:focus {
    border: tomato 2px solid;
  }
`;
const Label = styled.label`
  display: block;
`;

const Button = styled.button`
  height: 3.5rem;
  width: 24rem;
  outline: none;
  border-radius: 0.5rem;
  border: white 2px solid;
  transition: border 0.5s;
  padding: 1rem;
  background-color: slategray;
  margin-top: 1em;

  &:focus {
    border: tomato 2px solid;
  }
  &:hover {
    border: tomato 2px solid;
  }
`;
const TextArea = styled.textarea`
  height: 3.5rem;
  width: 24rem;
  outline: none;
  border-radius: 0.5rem;
  border: white 2px solid;
  transition: border 0.5s;
  padding: 1rem;

  &:focus {
    border: tomato 2px solid;
  }
`;
