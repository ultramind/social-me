import React, { useState } from "react";
import AuthForm from "../../components/AuthForm";

const LoginPage = () => {
  return (
    <>
      <div className="nav p-4 shadow-lg flex flex-col bg-white justify-center items-center">
        <div className="logo w-[30]">
          <h1 className="text-primary font-bold text-3xl">Socialme</h1>
        </div>
      </div>
      <AuthForm />
    </>
  );
};

export default LoginPage;
