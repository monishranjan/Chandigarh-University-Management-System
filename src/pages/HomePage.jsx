import React from "react";
import { useNavigate } from "react-router-dom";

import CUIMSLogo from "../assets/cuimslogo.png";
import Stafflogin from "../assets/staffLogin-icon.png";
import StudentLogin from "../assets/studentLogin-icon.png";
import CUVerse from "../assets/cuverse-logo.png";
import Admissionlogo from "../assets/admissionLogin-icon.png";
import { IoIosJournal } from "react-icons/io";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="bg-tertiaryColor h-1/2 w-full absolute top-0 left-0 -z-10"></div>

      {/* Header Section */}
      <header className="flex justify-center py-8 absolute right-1/2">
        <img src={CUIMSLogo} alt="CUIMS Logo" className="h-24" />
      </header>

      {/* Main Content Section */}
      <main className="flex justify-center items-center flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-24">
          {/* Card 1: Student Login */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src={StudentLogin}
              alt="Student Icon"
              className="h-12 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Student Login</h2>
            <p className="text-gray-600 mb-6">
              Login with your UID and Password to access your Student Services
              and Account.
            </p>
            <button
              className="mt-4 bg-primaryColor text-white px-4 py-2 rounded-full"
              onClick={() => window.location.href = "https://lms.cuchd.in/"}
            >
              Login Now
            </button>
          </div>

          {/* Card 2: Student Result Login */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <IoIosJournal className="mx-auto mb-4" size={48}/>
            <h2 className="text-xl font-semibold mb-2">Result Portal</h2>
            <p className="text-gray-600 mb-6">
              Login to your result portal using your UID and CUIMS password.
            </p>
            <button
              className="mt-4 bg-primaryColor text-white px-4 py-2 rounded-full"
              onClick={() => navigate("/login")}
            >
              Login Now
            </button>
          </div>

          {/* Card 3: Staff Login */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src={Stafflogin}
              alt="Staff Icon"
              className="h-12 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Staff Login</h2>
            <p className="text-gray-600 mb-6">
              Login using your Employee Code and Password to access your
              account.
            </p>
            <button
              className="mt-4 bg-primaryColor text-white px-4 py-2 rounded-full"
              onClick={() => window.location.href = "https://staff.cuchd.in/"}
            >
              Login Now
            </button>
          </div>

          {/* Card 4: Admission Login */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src={Admissionlogo}
              alt="Admission Icon"
              className="h-12 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Admission Login</h2>
            <p className="text-gray-600 mb-6">
              Use your Employee Code and Password to log in for
              admission-related services.
            </p>
            <button
              className="mt-4 bg-primaryColor text-white px-4 py-2 rounded-full"
              onClick={() => window.location.href = "https://admissions.cuchd.in/"}
            >
              Login Now
            </button>
          </div>
        </div>
      </main>

      <footer className="text-center mb-24">
        <h1 className="text-tertiaryColor">2018 Copyright Reserved | CGC | Chandigarh University</h1>
      </footer>
      {/* Bottom Half (Red) */}
      <div className="bg-primaryColor h-1/2 w-full absolute bottom-0 left-0 -z-10"></div>
    </div>
  );
};

export default HomePage;
