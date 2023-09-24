//@ts-nocheck
"use client";
import axios from "axios";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { setCookie } from "cookies-next";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const router = useRouter();
  const [value, setValue] = useState<any>({
    username: "",
    password: "",
  });
  const handleChange = (name, newValue) => {
    setValue({ ...value, [name]: newValue });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const test = await axios.post(
      "http://14.225.5.61/iEnterprise/login",
      { ...value },
      {
        headers: {
          Authorization: "Basic bXNiOm1zYjEyM2FBQCoj",
          "Content-Type": "application/json",
        },
      }
    );
    if (test.data.access_token) {
      setCookie("Authorization", test.data.access_token);
      router.push("/tra-cuu/danh-sach");
    }
    setValue({
      username: "",
      password: "",
    });
    console.log("123");
  };
  return (
    <form className="w-1/4 flex flex-col gap-4 mx-auto mt-10" onSubmit={handleSubmit}>
      <Input
        placeholder="username"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        className=" border-black"
        type="text"
        value={value.username}
        name="username"
      />
      <Input
        placeholder="password"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        className=" border-black"
        type="password"
        
        value={value.password}
        name="password"
      />
      <Button className="w-1/2 mx-auto" type="submit">
        Login
      </Button>
    </form>
  );
};

export default Login;
