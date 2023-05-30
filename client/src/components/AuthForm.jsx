import React, { useState } from "react";
import { useFormik } from "formik";
import { loginValidationSchema, registerValidationSchema } from "../schema";
import { setLogin } from "../state";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// initial Register values
const registerInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  occupation: "",
  password: "",
  picture: "",
};

const loginInitialValues = {
  email: "",
  password: "",
};

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleFormSubmit = async (e, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (!isLogin) await register(values, onSubmitProps);
  };

  const login = async (values, formikActions) => {
    console.log(values);
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    formikActions.resetForm();
    if (loggedIn) {
      dispatch(setLogin({ user: loggedIn.user, token: loggedIn.token }));
      navigate("/home");
    }
  };

  // register function
  const register = async (values, actions) => {
    // console.log(values);
    // console.log(actions);
    try {
      const formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }
      formData.append("picturePath", values.picture.name);

      const saveUserResponse = await fetch(
        "http://localhost:3001/auth/register",
        {
          method: "POST",
          body: formData,
        }
      );
      const savedUser = await saveUserResponse.json();
      actions.resetForm();
      if (savedUser) {
        setIsLogin(true);
        alert("Registration Successful!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    errors,
    setFieldValue,
    onSubmit,
    touched,
  } = useFormik({
    initialValues: isLogin ? loginInitialValues : registerInitialValues,
    validationSchema: isLogin
      ? loginValidationSchema
      : registerValidationSchema,
    onSubmit: handleFormSubmit,
  });

  return (
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
                    class={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none ${errors.firstName && "border-primary"}`}
                  />
                  <span className="text-xs text-primary">
                    {touched.firstName && errors.firstName}
                  </span>
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
                    class={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none ${errors.lastName && "bordeer-primary"}`}
                  />
                  <span className="text-xs text-primary">
                    {touched.lastName && errors.lastName}
                  </span>
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
                    class={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none ${errors.occupation && "border-primary"}`}
                  />
                  <span className="text-xs text-primary">
                    {touched.occuaption && errors.occupation}
                  </span>
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
                    class={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none ${errors.location && "border-primary"}`}
                  />
                  <span className="text-xs text-primary">
                    {touched.location && errors.location}
                  </span>
                </label>
              </div>
              <div className="justify-between flex flex-col md:flex-row gap-6">
                <label class="block md:mt-4 flex-1">
                  <span class="block text-sm text-slate-700 font-bold">
                    Profile Image
                  </span>
                  <input
                    id="picture"
                    name="picture"
                    type="file"
                    onChange={(e) =>
                      setFieldValue("picture", e.target.files[0])
                    }
                    onBlur={handleBlur}
                    class={`"mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none ${errors.picture && "border-primary"}`}
                  />
                  <span className="text-xs text-primary">
                    {touched.picture && errors.picture}
                  </span>
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
              <span class="block text-sm text-slate-700 font-bold">Email</span>
              <input
                id="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email Address"
                class={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none ${errors.email && "border-primary"}`}
              />
              <span className="text-xs text-primary">
                {touched.email && errors.email}
              </span>
            </label>
            <label class={`block flex-1 ${!isLogin && "mt-4"}`}>
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
                autoComplete="true"
                class={`mt-1 block w-full  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none ${errors.password && "border-primary"}`}
              />
              <span className="text-xs text-primary">
                {touched.password && errors.password}
              </span>
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
  );
};

export default AuthForm;
