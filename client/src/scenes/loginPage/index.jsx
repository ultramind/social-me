import React, { useState } from "react";
// import { useFormik } from "formik";

const LoginPage = () => {
  const [page, setPage] = useState("register");
  // initial Register values
  // const loginInitialValues = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   occupation: "",
  //   password: "",
  //   picture: null,
  // };

  // const registerInitialValues = {
  //   email: "",
  //   password: "",
  // };
  // const { values } = useFormik({
  //   initialValues,
  // });

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

          <form>
            {page === "register" && (
              <>
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <label class="block mt-4 flex-1">
                    <span class="block text-sm text-slate-700 font-bold">
                      FirstName
                    </span>
                    <input
                      id="firstName"
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
                      id="text"
                      type="text"
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
                page === "login" ? "md:flex-col" : "md:flex-row"
              } gap-4`}
            >
              <label class="block mt-4 flex-1">
                <span class="block text-sm text-slate-700 font-bold">
                  Email
                </span>
                <input
                  id="email"
                  type="email"
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
                  placeholder="Password"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none"
                />
              </label>
            </div>
            <button
              type="button"
              className="mt-4 p-2 w-full  bg-primary rounded-lg text-white text-xl font-bold"
            >
              {page === "register" ? "Register" : "Login"}
            </button>
          </form>
          {page === "register" && (
            <p
              className="text-primary mt-6 cursor-pointer"
              onClick={() => setPage("login")}
            >
              If you have an account with us Login
            </p>
          )}
          {page === "login" && (
            <p
              className="text-primary mt-6 cursor-pointer"
              onClick={() => setPage("register")}
            >
              If you dont have an account with us Register
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
