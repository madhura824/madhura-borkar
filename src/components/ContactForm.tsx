"use client"
import { submitContactForm } from "@/app/lib/contactFormActions"
import { ContactFormDataType } from "@/app/lib/definitions"
import { Card, CardHeader, Divider, CardBody, CardFooter, Input, Textarea, Button } from "@nextui-org/react"
import { error } from "console"
import { base } from "framer-motion/client"
import Link from "next/link"


import { useEffect, useState } from "react"
import React from "react"
import { useFormState, useFormStatus } from "react-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {



  function isValidEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function isValidMobileNumber(mobileNumber: number) {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobileNumber.toString());
  }
  const [contactFormState, contactFormSubmitAction] = useFormState(submitContactForm, {
    error: false,
    message: "",
  });
  const [formData, setFormData] = useState<ContactFormDataType>(
    {
      name: "",
      email: "",
      mobileNumber: 0,
      message: "",
      subject: "",

    })
  
    const { pending, data, method, action } = useFormStatus();
  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [mobileNumberError, setMobileNumberError] = useState("")
  const [subjectError, setSubjectError] = useState("")
  const [messageError, setMessageError] = useState("")
  const customStyles = {
    label: "text-white ",
    input: ["!text-white/50"],
    inputWrapper: [
      "!bg-transparent",
      "focus-within:!border-white/40 !border-small",
      "!cursor-text",
    ],

  }

  useEffect(() => {


    if (contactFormState.message != "") {
      if (contactFormState.error == true) toast.error(contactFormState.message,{
        className: " !bg-gray-500 !backdrop-blur-md !bg-opacity-5 !border-small !border-white !border-opacity-10 !text-gray-400",
        // bodyClassName: "grow-font-size",
        progressClassName: "!bg-gradient-to-l !from-purple-400 !via-white !to-pink-400",
      });
      else toast.success(contactFormState.message,{
        className: " !bg-gray-500 !backdrop-blur-md !bg-opacity-5 !border-small !border-white !border-opacity-10 !text-gray-400",
        // bodyClassName: "grow-font-size",
        progressClassName: "!bg-gradient-to-l !from-purple-400 !via-white !to-pink-400",
      })
    }
  }, [contactFormState])


  function handleSubmit() {
    let valid = true; // Track whether the form is valid or not

    // Validate each field
    if (formData.name.length < 3) {
      setNameError("Please enter a valid name. This will help me address you properly!");
      valid = false;
    }
    if (formData.message.length < 5) {
      setMessageError("Please enter a valid message so that I can understand you better!");
      valid = false;
    }
    if (formData.subject.length < 5) {
      setSubjectError("Please enter a valid subject. A good subject is a great start!");
      valid = false;
    }
    if (!isValidEmail(formData.email)) {
      setEmailError("Please enter a valid email address. This will help me connect to you!");
      valid = false;
    }
    if (formData.mobileNumber != 0 && !isValidMobileNumber(formData.mobileNumber)) {
      setMobileNumberError("Please enter a valid mobile number. This will help me connect to you!");
      valid = false;
    }

    // If any validation fails, return early
    if (!valid) {
      // console.log("-1");
      return;
    }

    // If all validations pass, proceed with form submission
    const data = new FormData();
    Object.entries(formData).map(([key, value]) => {
      // console.log(key, value); // Make sure the data is logged properly
      data.append(key, value); // Append key-value pair to FormData
    });

    // console.log("1");
    contactFormSubmitAction(data);
    // console.log("Contact Form State", contactFormState);
  }

  return (

    <><ToastContainer /><Card className="w-full h-full bg-gray-500 backdrop-blur-md bg-opacity-5 border-small border-white border-opacity-10">

      <CardHeader className="flex gap-3 text-white items-center justify-center">

        <span className="font-thin">Contact Me</span>
      </CardHeader>
      <Divider />
      <CardBody>
        <form className="flex flex-col items-center justify-center gap-3" action={(e) => {
          // e.preventDefault()
          handleSubmit()
        }}>
          <Input

            type="text"
            label="Name"
            variant="bordered"
            placeholder="eg: Madhura Borkar"
            className="max-w-xs"
            isRequired
            isInvalid={nameError === "" ? false : true}
            errorMessage={nameError}
            onValueChange={(value) => {
              setNameError("")
              setFormData((prev) => ({
                ...prev,
                name: value
              }))
            }}
            classNames={customStyles} />

          <Input

            type="text"
            label="Email"
            variant="bordered"
            placeholder="eg: madhuraborkar12@gmail.com"
            className="max-w-xs"
            isRequired

            isInvalid={emailError === "" ? false : true}
            errorMessage={emailError}
            classNames={customStyles}
            onValueChange={(value) => {
              setEmailError("")
              setFormData((prev) => ({
                ...prev,
                email: value
              }))

            }} />

          <Input

            type="number"
            label="Mobile Number"
            variant="bordered"
            placeholder="eg: 8080988225"
            className="max-w-xs"

            // isRequired
            errorMessage={mobileNumberError}
            isInvalid={mobileNumberError === "" ? false : true}
            classNames={customStyles}
            onValueChange={(value) => {
              setMobileNumberError("")
              setFormData((prev) => ({
                ...prev,
                mobileNumber: !isNaN(parseInt(value)) ? parseInt(value) : 0
              }))
            }} />


          <Input

            type="text"
            label="Subject"
            variant="bordered"
            placeholder="Subject for the mail"
            className="max-w-xs"
            isRequired

            isInvalid={subjectError === "" ? false : true}
            errorMessage={subjectError}
            classNames={customStyles}
            onValueChange={(value) => {
              setSubjectError("")
              setFormData((prev) => ({
                ...prev,
                subject: value
              }))

            }} />

          <Textarea
            isInvalid={messageError !== "" ? true : false}
            variant="bordered"
            label="Message"
            placeholder="Write your thoughts"
            classNames={customStyles}
            isRequired
            errorMessage={messageError}
            className="max-w-xs "
            onValueChange={(value) => {
              setMessageError("")
              setFormData((prev) => ({
                ...prev,
                message: value
              }))

            }} />

          <Submit />
        </form>
      </CardBody>
      <Divider />


    </Card></>

  )
}

function Submit() {
  const status = useFormStatus();
  // console.log(status.pending)
  return <Button disabled={status.pending} type="submit" isLoading={status.pending} className="hover:scale-110 hover:bg-gradient-to-r from-pink-400 to-purple-500" >{status.pending?"Submitting":"Submit"}</Button>
}