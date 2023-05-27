import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const LoginPage = () => {
  const [page, setPage] = useState("login");

  console.log(page);
  return (
    <>
      <div className="nav p-4 shadow-lg flex flex-col bg-white justify-center items-center">
        <div className="logo w-[30]">
          <h1 className="text-primary font-bold text-3xl">Socialme</h1>
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-[100%]">
        {page === "register" && (
          <div className="w-[80%] md:w-1/2 bg-white p-4 rounded-xl shadow-lg">
            <p>Welcome to socialme, a social mmedia for programmers...</p>

            <form>
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
                    id="password"
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
              <div className="justify-between flex flex-col md:flex-row gap-6 mb-6">
                <label class="block md:mt-4 flex-1">
                  <span class="block text-sm text-slate-700 font-bold">
                    Password
                  </span>
                  <input
                    id="picture"
                    type="file"
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
                Register
              </button>
            </form>
            <p
              className="text-primary mt-6 cursor-pointer"
              onClick={() => setPage("login")}
            >
              If you have an account with us Login
            </p>
          </div>
        )}
        {page === "login" && (
          <div className="w-[80%] md:w-1/2 bg-white p-4 rounded-xl shadow-lg">
            <p>Welcome to socialme, a social mmedia for programmers...</p>

            <form>
              <label class="block mt-4">
                <span class="block text-sm text-slate-700 font-bold">
                  Email
                </span>
                <input
                  id="email"
                  type="text"
                  placeholder="Email address"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none"
                />
              </label>
              <label class="block mt-4">
                <span class="block text-sm text-slate-700 font-bold">
                  Password
                </span>
                <input
                  id="password"
                  type="password"
                  placeholder="Email address"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none"
                />
              </label>
              <button
                type="button"
                className="mt-4 p-2 w-full  bg-primary rounded-lg text-white text-xl font-bold"
              >
                Login
              </button>
            </form>
            <p
              className="text-primary mt-6 cursor-pointer"
              onClick={() => setPage("register")}
            >
              If your dont have an account with us Register
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginPage;
