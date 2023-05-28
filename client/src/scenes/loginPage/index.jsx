import React, { useState } from "react";
import { useFormik } from "formik";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  // hadling th submit function
  // handleSubmit
  const onSubmitForm = (values, actions) => {
    console.log(values);
    console.log(actions);
    alert("Submitted...");
  };

  // initial Register values
  const registerInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    password: "",
    picture: null,
  };

  const loginInitialValues = {
    email: "",
    password: "",
  };
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    setFieldValue,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: isLogin ? loginInitialValues : registerInitialValues,
    onSubmit: onSubmitForm,
  });

  console.log(isLogin);
  console.log(values);

  return (
    <>
      <div className="nav p-4 shadow-lg flex flex-col bg-white justify-center items-center">
        <div className="logo w-[30]">
          <h1 className="text-primary font-bold text-3xl">Socialme</h1>
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-[100%]">
        <div className="w-[80%] md:w-1/2 bg-white p-4 rounded-xl shadow-lg">
          <p>Welcome to socialme, a social mmedia for programmers...</p>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <label class="block mt-4 flex-1">
                    <span class="block text-sm text-slate-700 font-bold">
                      FirstName
                    </span>
                    <input
                      id="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      type="text"
                      placeholder="Firstname"
                      class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none"
                    />
                  </label>
                  <label class="block md:mt-4 flex-1">
                    <span class="block text-sm text-slate-700 font-bold">
                      LastName
                    </span>
                    <input
                      id="lastName"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      placeholder="LastName"
                      class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none"
                    />
                  </label>
                </div>

                <div className="justify-between flex flex-col md:flex-row gap-6">
                  <label class="block mt-4 flex-1">
                    <span class="block text-sm text-slate-700 font-bold">
                      Occupation
                    </span>
                    <input
                      id="occupation"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.occupation}
                      placeholder="Occupation"
                      class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none"
                    />
                  </label>
                  <label class="block md:mt-4 flex-1">
                    <span class="block text-sm text-slate-700 font-bold">
                      Location
                    </span>
                    <input
                      id="location"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.location}
                      placeholder="Location"
                      class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none"
                    />
                  </label>
                </div>
                <div className="justify-between flex flex-col md:flex-row gap-6">
                  <label class="block md:mt-4 flex-1">
                    <span class="block text-sm text-slate-700 font-bold">
                      Profile Image
                    </span>
                    <input
                      id="picture"
                      type="file"
                      class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none"
                    />
                  </label>
                </div>
              </>
            )}
            <div
              className={`justify-between flex flex-col ${
                isLogin ? "md:flex-col" : "md:flex-row"
              } gap-4`}
            >
              <label class="block mt-4 flex-1">
                <span class="block text-sm text-slate-700 font-bold">
                  Email
                </span>
                <input
                  id="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email Address"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none"
                />
              </label>
              <label class="block md:mt-4 flex-1">
                <span class="block text-sm text-slate-700 font-bold">
                  Password
                </span>
                <input
                  id="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 p-2 w-full  bg-primary rounded-lg text-white text-xl font-bold"
            >
              {isLogin ? "login" : "register"}
            </button>
          </form>
          <p
            className="text-primary mt-6 cursor-pointer"
            onClick={() => {
              setIsLogin(!isLogin);
              resetForm();
            }}
          >
            {isLogin
              ? "If you dont have an account with us Register"
              : "If you have an account with us Login"}
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
