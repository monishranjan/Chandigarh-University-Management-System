import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import CUIMSLogo from "../assets/cuimslogo.png";
import ProfileLogo from "../assets/results/Monish Picture.png";

import { IoSettings } from "react-icons/io5";
import { FaBell, FaBook, FaHome } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import ResultPrint from "./ResultPrint";
import { useReactToPrint } from "react-to-print";

const semesters = [
  {
    number: 8,
    sgpa: "SGPA : 9.38",
    subjects: [
      {
        code: "20CSM-452",
        name: "MOOCs",
        credits: "2.00",
        grade: "Qualified",
      },
      {
        code: "20CSP-461",
        name: "Data Visualization Lab",
        credits: "1.00",
        grade: "A",
      },
      {
        code: "20CSP-471",
        name: "Big Data Analytics Lab",
        credits: "1.00",
        grade: "A+",
      },
      {
        code: "20CSR-451",
        name: "Project-V",
        credits: "3.00",
        grade: "A+",
      },
      {
        code: "20CST-461",
        name: "Data Visualization",
        credits: "2.00",
        grade: "A",
      },
      {
        code: "20CST-471",
        name: "Big Data Analytics",
        credits: "2.00",
        grade: "A",
      },
      {
        code: "20SMP-460",
        name: "Statistical Methods using R Lab",
        credits: "1.00",
        grade: "A+",
      },
      {
        code: "20SMT-460",
        name: "Statistical Methods using R",
        credits: "3.00",
        grade: "A",
      },
      {
        code: "20AEO-363",
        name: "Smart Vehicles",
        credits: "3.00",
        grade: "A",
      },
    ],
  },
  {
    number: 7,
    sgpa: "SGPA : 8.90",
    subjects: [
      {
        code: "20CSI-415",
        name: "Industrial Summer Training",
        credits: "2.00",
        grade: "A",
      },
      {
        code: "20CSP-422",
        name: "Computer Vision Lab",
        credits: "1.00",
        grade: "A+",
      },
      {
        code: "20CST-411",
        name: "Cloud Computing",
        credits: "3.00",
        grade: "A",
      },
      {
        code: "20CSR-414",
        name: "Project-IV",
        credits: "3.00",
        grade: "A",
      },
      {
        code: "20CST-412",
        name: "Blockchain Technology",
        credits: "3.00",
        grade: "B+",
      },
      {
        code: "20CST-422",
        name: "Computer Vision",
        credits: "3.00",
        grade: "A",
      },
      {
        code: "20UCY-401",
        name: "Environmental Science and Disaster Management",
        credits: "2.00",
        grade: "A",
      },
      {
        code: "20ELO-412",
        name: "Electrical Energy Conservation & Auditing",
        credits: "3.00",
        grade: "A",
      },
    ],
  },
  {
    number: 6,
    sgpa: "SGPA : 8.70",
    subjects: [
      {
        code: "20CSM-361",
        name: "MOOCs",
        credits: "4.00",
        grade: "A",
      },
      {
        code: "20CSP-351",
        name: "Competitive Coding-II",
        credits: "1.00",
        grade: "A",
      },
      {
        code: "20CSP-356",
        name: "Mobile Application Development Lab",
        credits: "1.00",
        grade: "A+",
      },
      {
        code: "20CSP-358",
        name: "Internet of Things Lab",
        credits: "1.00",
        grade: "B+",
      },
      {
        code: "20CSP-376",
        name: "Data Mining Lab",
        credits: "1.00",
        grade: "A",
      },
      {
        code: "20CSR-359",
        name: "Project-III",
        credits: "3.00",
        grade: "A+",
      },
      {
        code: "20CST-352",
        name: "Discrete Mathematics and Graph Theory",
        credits: "4.00",
        grade: "B+",
      },
      {
        code: "20CST-353",
        name: "Theory of Computation",
        credits: "3.00",
        grade: "B",
      },
      {
        code: "20CST-354",
        name: "Information Security and Cryptography",
        credits: "3.00",
        grade: "B+",
      },
      {
        code: "20CST-355",
        name: "Mobile Application Development",
        credits: "2.00",
        grade: "A",
      },
      {
        code: "20CST-357",
        name: "Internet of Things",
        credits: "3.00",
        grade: "B+",
      },
      {
        code: "20CST-371",
        name: "Data Mining (Through SWAYAM)",
        credits: "2.00",
        grade: "B+",
      },
      {
        code: "20TDY-351",
        name: "Soft Skills",
        credits: "1.00",
        grade: "A",
      },
      {
        code: "20TDY-352",
        name: "Aptitude",
        credits: "2.00",
        grade: "B+",
      },
    ],
  },
  {
    number: 5,
    sgpa: "SGPA : 9.12",
    subjects: [
      {
        code: "20CSI-322",
        name: "Institute/Industrial Summer Training",
        credits: "2.00",
        grade: "A+",
      },
      {
        code: "20CSP-312",
        name: "Design and Analysis of Algorithms Lab",
        credits: "1.00",
        grade: "B+",
      },
      {
        code: "20CSP-314",
        name: "Competitive Coding-I",
        credits: "1.00",
        grade: "A",
      },
      {
        code: "20CSP-317",
        name: "Machine Learning Lab",
        credits: "1.00",
        grade: "A",
      },
      {
        code: "20CSP-321",
        name: "Project Based Learning in Java Lab",
        credits: "2.00",
        grade: "A+",
      },
      {
        code: "20CSP-338",
        name: "Web and Mobile Security Lab",
        credits: "1.00",
        grade: "A+",
      },
      {
        code: "20CSR-318",
        name: "Project-II",
        credits: "3.00",
        grade: "A+",
      },
      {
        code: "20CST-311",
        name: "Design and Analysis of Algorithms",
        credits: "3.00",
        grade: "B+",
      },
      {
        code: "20CST-313",
        name: "Operating Systems",
        credits: "3.00",
        grade: "A",
      },
      {
        code: "20CST-315",
        name: "System Programming",
        credits: "3.00",
        grade: "B+",
      },
      {
        code: "20CST-316",
        name: "Machine Learning",
        credits: "3.00",
        grade: "A",
      },
      {
        code: "20CST-319",
        name: "Project Base Learning in Java",
        credits: "2.00",
        grade: "A+",
      },
      {
        code: "20CST-333",
        name: "Web and Mobile Security",
        credits: "2.00",
        grade: "A",
      },
      {
        code: "20TDY-301",
        name: "Soft Skills",
        credits: "1.00",
        grade: "A+",
      },
      {
        code: "20TDY-302",
        name: "Aptitude",
        credits: "2.00",
        grade: "A",
      },
    ],
  },
  {
    number: 4,
    sgpa: "SGPA : 8.65",
    subjects: [
      {
        code: "20CSM-266",
        name: "MOOCs",
        credits: "4.00",
        grade: "A",
      },
      {
        code: "20CSP-253",
        name: "Microprocessor and Interfacing Lab",
        credits: "1.00",
        grade: "B+",
      },
      {
        code: "20CSP-255",
        name: "Software Engineering Lab",
        credits: "1.00",
        grade: "B+",
      },
      {
        code: "20CSP-257",
        name: "Computer Networks Lab",
        credits: "1.00",
        grade: "A",
      },
      {
        code: "20CSP-259",
        name: "Programming in Python Lab",
        credits: "2.00",
        grade: "A+",
      },
      {
        code: "20CSR-264",
        name: "Project-I",
        credits: "2.00",
        grade: "A+",
      },
      {
        code: "20CST-252",
        name: "Microprocessor and Interfacing",
        credits: "3.00",
        grade: "B+",
      },
      {
        code: "20CST-254",
        name: "Software Engineering",
        credits: "3.00",
        grade: "A",
      },
      {
        code: "20CST-256",
        name: "Computer Networks",
        credits: "3.00",
        grade: "B+",
      },
      {
        code: "20CST-258",
        name: "Principles of Artificial Intelligence",
        credits: "3.00",
        grade: "A",
      },
      {
        code: "20CSY-251",
        name: "Data Structures and Algorithm Analysis",
        credits: "1.00",
        grade: "A",
      },
      {
        code: "20SMT-275",
        name: "Probability and Statistics",
        credits: "4.00",
        grade: "B+",
      },
      {
        code: "20TDP-251",
        name: "Soft Skills",
        credits: "1.00",
        grade: "A",
      },
      {
        code: "20UCY-293",
        name: "Creativity and Critical Thinking",
        credits: "1.00",
        grade: "A+",
      },
      {
        code: "20UCY-296",
        name: "Life Skills and Mentoring-4",
        credits: "1.00",
        grade: "A",
      },
    ],
  },
  {
    number: 3,
    sgpa: "SGPA : 9.24",
    subjects: [
      {
        code: "20CSI-225",
        name: "Institutional/Summer Training",
        credits: "2.00",
        grade: "A+",
      },
      {
        code: "20CSP-212",
        name: "Data Structures Lab",
        credits: "2.00",
        grade: "A",
      },
      {
        code: "20CSP-215",
        name: "Database Management System Lab",
        credits: "1.00",
        grade: "B+",
      },
      {
        code: "20CSP-219",
        name: "Java Programming Lab",
        credits: "1.00",
        grade: "A+",
      },
      {
        code: "20CST-211",
        name: "Data Structures",
        credits: "3.00",
        grade: "A",
      },
      {
        code: "20CST-212",
        name: "Computer Organization and Architecture",
        credits: "3.00",
        grade: "A",
      },
      {
        code: "20CST-214",
        name: "Database Management System",
        credits: "3.00",
        grade: "A",
      },
      {
        code: "20CST-218",
        name: "Java Programming",
        credits: "2.00",
        grade: "A+",
      },
      {
        code: "20SMT-236",
        name: "Numerical and Optimization Techniques",
        credits: "4.00",
        grade: "A",
      },
      {
        code: "20TDT-202",
        name: "Aptitude",
        credits: "2.00",
        grade: "A",
      },
      {
        code: "20UCX-242",
        name: "Introduction to Management and Leadership",
        credits: "1.00",
        grade: "A",
      },
      {
        code: "20UCX-249",
        name: "Entrepreneurship",
        credits: "1.00",
        grade: "A+",
      },
      {
        code: "20UCY-246",
        name: "Life Skills and Mentoring-3",
        credits: "1.00",
        grade: "A+",
      },
    ],
  },
  {
    number: 2,
    sgpa: "SGPA : 8.79",
    subjects: [
      {
        code: "20CSP-152",
        name: "Object Oriented Programming Using C++ Lab",
        credits: "2.00",
        grade: "A+",
      },
      {
        code: "20CSP-155",
        name: "Computer Workshop",
        credits: "2.00",
        grade: "A",
      },
      {
        code: "20CST-151",
        name: "Object Oriented Programming Using C++",
        credits: "2.00",
        grade: "A",
      },
      {
        code: "20ECP-154",
        name: "Foundation of IOT Lab",
        credits: "1.00",
        grade: "B+",
      },
      {
        code: "20ELP-152",
        name: "Basic Electrical and Electronics Engineering Lab",
        credits: "1.00",
        grade: "B+",
      },
      {
        code: "20ELT-151",
        name: "Basic Electrical & Electronics Engineering",
        credits: "3.00",
        grade: "B+",
      },
      {
        code: "20PCP-158",
        name: "Professional Communication Skills Lab",
        credits: "1.00",
        grade: "A",
      },
      {
        code: "20PCT-154",
        name: "Professional Communication Skills",
        credits: "2.00",
        grade: "A",
      },
      {
        code: "20SMT-175",
        name: "Calculus and Vector Spaces",
        credits: "5.00",
        grade: "B+",
      },
      {
        code: "20SPP-182",
        name: "Quantum and Semiconductor Physics Lab",
        credits: "1.00",
        grade: "B+",
      },
      {
        code: "20SPT-181",
        name: "Quantum and Semiconductor Physics",
        credits: "3.00",
        grade: "B+",
      },
      {
        code: "20UCY-196",
        name: "Life Skills and Mentoring-2",
        credits: "1.00",
        grade: "A+",
      },
    ],
  },
  {
    number: 1,
    sgpa: "SGPA : 8.47",
    subjects: [
      {
        code: "20CSP-112",
        name: "Problem Solving with Programming Lab",
        credits: "2.00",
        grade: "A+",
      },
      {
        code: "20CST-111",
        name: "Problem Solving with Programming",
        credits: "2.00",
        grade: "A",
      },
      {
        code: "20ECP-116",
        name: "Digital Electronics Lab",
        credits: "1.00",
        grade: "B+",
      },
      {
        code: "20ECP-118",
        name: "Foundations of AI Applications Lab",
        credits: "1.00",
        grade: "A+",
      },
      {
        code: "20ECT-115",
        name: "Digital Electronics",
        credits: "3.00",
        grade: "B+",
      },
      {
        code: "20MEP-114",
        name: "Computer Graphics Using CAD Lab",
        credits: "2.00",
        grade: "A",
      },
      {
        code: "20SMT-125",
        name: "Computational Mathematics",
        credits: "4.00",
        grade: "B",
      },
      {
        code: "20SZT-148",
        name: "Biology for Engineers",
        credits: "3.00",
        grade: "B+",
      },
      {
        code: "20UCP-142",
        name: "Communication Skills Lab",
        credits: "1.00",
        grade: "A",
      },
      {
        code: "20UCT-141",
        name: "Communication Skills",
        credits: "2.00",
        grade: "A",
      },
      {
        code: "20UCY-146",
        name: "Life Skills and Mentoring-1",
        credits: "1.00",
        grade: "A",
      },
    ],
  },
];

const SemesterCard = ({ semester }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 mt-4">
      <div
        className="flex justify-between items-center p-4 bg-gray-300 rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="text-lg font-bold">Semester: {semester.number}</h3>
          <p>{semester.sgpa}</p>
        </div>
        <div className="text-lg text-textColor">{isOpen ? "▲" : "▼"}</div>
      </div>
      {isOpen && (
        <div className="bg-gray-100 p-4 mt-2 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-400">
                <th className="p-2 border border-gray-600">Subject Code</th>
                <th className="p-2 border border-gray-600">Subject Name</th>
                <th className="p-2 border border-gray-600">Credits</th>
                <th className="p-2 border border-gray-600">Grade</th>
              </tr>
            </thead>
            <tbody>
              {semester.subjects.map((subject, index) => (
                <tr key={index} className="bg-gray-200">
                  <td className="p-2 border border-gray-400">{subject.code}</td>
                  <td className="p-2 border border-gray-400">{subject.name}</td>
                  <td className="p-2 border border-gray-400">
                    {subject.credits}
                  </td>
                  <td className="p-2 border border-gray-400">
                    {subject.grade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const Result = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handlePDFDownload = () => {
    const link = document.createElement("a");
    link.href = "/src/assets/results/Anti_Ragging_and_Anti_Squad_2019.pdf"; // Update with the actual path to your PDF file
    link.download = "Anti_Ragging_and_Anti_Squad_2019.pdf"; // The name of the file after downloading
    link.click();
  };

  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    pageStyle: `
      @media print {
        @page {
          size: a4; /* Custom page size in mm */
          margin: 10; /* No margins */
          orientation: portrait; /* Force portrait mode */
        }
      }
    `,
  });

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <header className="flex justify-between items-center p-4 bg-white shadow-md relative">
        {/* Left: Logo */}
        <img src={CUIMSLogo} alt="CUIMS Logo" className="w-24" />

        {/* Center: Search Bar */}
        <div className="mx-4 w-1/3">
          <input
            type="text"
            placeholder="Search & Bookmark your page"
            className="w-full p-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Right: Icons and Profile */}
        <div className="flex items-center">
          <IoSettings
            size={24}
            className="text-gray-600 cursor-pointer mr-12"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          <FaBell size={20} className="text-gray-600 mx-2" />
          <FaBook size={20} className="text-gray-600 mx-2" />
          <FaHome size={20} className="text-gray-600 mx-2" />
        </div>

        {/* User Profile with Background Covering Full Header Height */}
        <div
          className="absolute top-0 right-0 h-full bg-gray-200 flex items-center py-2 px-4 cursor-pointer"
          style={{ marginRight: "-16px", paddingRight: "16px" }} // Adjust margin to counter the padding
        >
          <div className="text-right mr-4">
            <h2 className="text-sm font-bold">MONISH</h2>
            <p className="text-xs text-gray-500">20BCS7632</p>
          </div>
          <img
            src={ProfileLogo}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-4"
          />
        </div>

        {isDropdownOpen && (
          <div className="absolute top-16 right-10 mt-2 bg-white border rounded shadow-lg">
            <button
              onClick={handleLogout}
              className="block px-8 py-2 text-red-600 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </header>

      <main className="p-8">
        <div className="grid grid-cols-2 gap-4">
          {/* First Card */}
          <div
            className="p-4 bg-white shadow-md rounded-xl cursor-pointer"
            onClick={() =>
              (window.location.href = "https://www.cuchd.in/online-request/")
            }
          >
            <h3 className="text-lg font-bold text-textColor">
              Student Facilitation
            </h3>
            <div className="flex justify-between">
              <p className="text-secondaryColor mt-2 cursor-pointer text-sm">
                CLICK TO VIEW
              </p>
              <BsFillCameraVideoFill size={24} className="text-gray-500" />
            </div>
          </div>

          {/* Second Card */}
          <div
            className="p-4 bg-white shadow-md rounded-xl cursor-pointer"
            onClick={handlePDFDownload}
          >
            <h3 className="text-lg font-bold text-textColor">Anti Ragging</h3>
            <div className="flex justify-between">
              <p className="text-secondaryColor mt-2 cursor-pointer text-sm">
                READ NOW
              </p>
              <ImCancelCircle size={24} className="text-gray-500" />
            </div>
          </div>
        </div>

        <div className="py-2 text-lg font-semibold bg-textColor text-tertiaryColor text-center rounded-xl mt-8">
          Student's Final Result
        </div>

        <div className="my-8 font-semibold text-gray-800 text-lg text-center">
          CS201-BACHELOR OF ENGINEERING (COMPUTER SCIENCE & ENGINEERING)
        </div>

        <div className="flex justify-between items-center">
          <div className="flex-col text-base">
            <h1 className="mb-1">
              <strong>UID: </strong>20BCS7632
            </h1>
            <h1 className="mb-1">
              <strong>Student's Name: </strong>MONISH RANJAN
            </h1>
            <h1 className="mb-1">
              <strong>Father's Name: </strong>MUNNA KUMAR SINGH
            </h1>
            <h1 className="mb-1">
              <strong>Mother's Name: </strong>KALPANA SINGH
            </h1>
            <h1 className="mb-1">
              <strong>CGPA: </strong>8.91
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <img src={ProfileLogo} alt="Profile Image" className="w-32 h-32" />
            <button
              onClick={handlePrint}
              className="px-8 py-2 bg-textColor text-tertiaryColor rounded-lg mt-4"
            >
              Print Result
            </button>
          </div>
        </div>

        {/* Marks Here */}
        {semesters.map((semester, index) => (
          <SemesterCard key={index} semester={semester} />
        ))}

      </main>

      <footer className="px-8">
        <div className="text-sm">
          <strong>Disclaimer: </strong>
          Chandigarh University is not responsible for any inadvertent error
          that may have crept in the results being published on the UIMS. The
          results published on the UIMS are for immediate information to the
          examinees & not for legal purpose. These cannot be treated as original
          marks. Original marks shall be issued by the University separately .
          In case of any discrepancy, University records shall be final. For any
          query you can raise your Query.
        </div>
        <hr className="my-8 mt-24" />
        <div className="text-center text-xs mb-8">
          Chandigarh University, Gharuan, Mohali (Punjab)
          <br />
          Email Id: studentcare@cumail.in
        </div>
      </footer>
      <div className="hidden">
          <ResultPrint ref={printRef} result={semesters} />
        </div>
    </div>
  );
};

export default Result;
