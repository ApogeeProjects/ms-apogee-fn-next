/* eslint-disable react/no-children-prop */

import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Select,
  Spinner,
} from "@chakra-ui/react";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  //   const onSubmit = async (e) => {
  //     e.preventDefault();
  //   };

  return (
    <div className="w-[90%] md:w-2/5 mx-auto mt-16">
      <div>
        <p className="dark:text-white text-center text-lg font-semibold">
          Start for free 🌞
        </p>

        <div>
          <p className="dark:text-white font-medium text-base py-2">
            Full Name
          </p>
          <Input
            placeholder="Full name"
            className="border h-10 px-2 py-4 border-gray text-gray dark:text-white dark:bg-black-500 outline-none rounded font-light"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
        </div>
        <div>
          <p className="dark:text-white font-medium text-base py-2">
            Your email address
          </p>
          <Input
            placeholder="Enter your email address"
            className="border h-10 px-2 py-4 border-gray text-gray dark:text-white outline-none rounded font-light"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
        </div>
        <div>
          <p className="dark:text-white font-medium text-base py-2">
            Phone Number
          </p>
          <InputGroup>
            <InputLeftAddon children="+250" />
            <Input
              type="tel"
              placeholder="phone number"
              className="dark:text-white"
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>

          <br />
        </div>

        <div className="">
          <p className="dark:text-white font-medium text-base pb-2">
            Your password
          </p>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              className="dark:text-white"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <br />
        </div>

        <button
          className="px-8 py-3 rounded-md bg-[#3359DF] text-white font-bold w-full"
          //   onClick={onSubmit}
        >
          <Link href="/dashboard">Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Register;
