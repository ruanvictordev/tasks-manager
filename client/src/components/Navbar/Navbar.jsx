import React from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Button from "../Buttons/Button";
import Cookies from "js-cookie";

export default function Navbar() {
  const navigate = useNavigate();
  const token = Cookies.get("jwt");

  const handleLogout = () => {
    Cookies.remove("jwt");
    toast.success("Logout Successfuly!");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <nav className="flex w-full py-6 px-10 justify-between bg-brand-secondaryColor text-brand-whiteColor max-sm:px-4">
        <div className="flex items-center gap-2 font-bold cursor-pointer" onClick={() => navigate("/")}>
          <img src="square-check-solid.svg" className="w-4" />
          <h1>Tasks Manager</h1>
        </div>
        <div className="flex justify-center items-center">
          {token ? (
            <Button bgColor="bg-brand-whiteColor" fontColor="text-brand-primaryColor"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <div className="flex justify-center items-center gap-8 max-md:gap-4">
              <Button bgColor="bg-brand-whiteColor" fontColor="text-brand-primaryColor"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
              <Button bgColor="bg-brand-whiteColor" fontColor="text-brand-primaryColor"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </div>
          )}
        </div>
      </nav>
      <Toaster />
    </>
  );
}
