import React, { useState } from "react";
import Link from "next/link";
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

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="w-full md:w-2/5 mx-auto mt-20">
      <div>
        <p className="dark:text-white text-center text-lg font-semibold">
          Sign in to your account 🌞
        </p>

        <div className="mt-8">
          <p className="dark:text-white font-medium text-base py-2">
            Your email address
          </p>
          <Input
            placeholder="Enter your email address"
            className="border h-10 px-2 py-4 border-gray text-gray dark:text-white outline-none rounded font-light"
            onBlur={(e) => setEmail(e.target.value)}
          />
          <br />
        </div>

        <div className="mt-6">
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
          <Link href="/dashboard">Sign in</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
