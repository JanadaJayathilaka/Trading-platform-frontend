import React from "react";
import "./Auth.css";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import SigninForm from "./SigninForm";
import SignUpForm from "./SignupForm";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="h-screen w-screen relative authContainer">
      <div className="overlay"></div>

      <div
        className="bgBlur absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        flex flex-col items-center justify-center 
        h-[35rem] w-[25rem] rounded-lg z-20 
        bg-white/10 backdrop-blur-md shadow-2xl shadow-amber-100"
      >
        <h1 className="text-6xl pb-9 font-bold">J.J Trading</h1>

        {location.pathname == "/signup" ? (
          <section className="w-full">
            <SignUpForm />
            <div className="flex items-center justify-center">
              <span>already have account?</span>
              <Button variant={"ghost"} onClick={() => navigate("/signin")}>
                signin
              </Button>
            </div>
          </section>
        ) : location.pathname == "/forgot-password" ? (
          <section>
            <ForgotPasswordForm />
          </section>
        ) : (
          <section className="w-full">
            <SigninForm />
            <div className="flex items-center justify-center">
              <span>back to login?</span>
              <Button variant={"ghost"} onClick={() => navigate("/signup")}>
                signup
              </Button>
            </div>

            <div className="flex items-center justify-center w-full">
              <Button
                className={"w-full py-5 bg-opacity-50 border-none mt-4"}
                variant={"outline"}
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password
              </Button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Auth;
