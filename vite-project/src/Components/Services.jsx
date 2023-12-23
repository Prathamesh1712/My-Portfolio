import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-4xl font-bold text-center underline">
          My Projects
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            <i class=" text-5xl fa-brands fa-android"></i>
            <h1 className="text-4xl">Quiz App (Android Application)</h1>
            <p className="text-justify">
            
The Quiz app is an Android-based platform featuring User and Admin modules. Users can take quizzes across categories like Java, .NET each with subcategories. This app offers interactive learning and assessment, allowing administrators 
to create and manage quizzes, providing an educational and informative experience.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-mobile"></i>
            <h1 className="text-4xl">E-servicing-Web Application</h1>
            <p className="text-justify">
            E-servicing is a web application that enables users to schedule home servicing/repair for electronic devices seamlessly. It consists of three main modules: User, Service Expert, and Admin. Users can book appointments without physical visits or calls, 
            streamlining the electronic product servicing process for convenience and efficiency.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Bus Seat Booking System</h1>
            <p className="text-justify">
            This project successfully implemented a passenger seat booking system with three key roles: Passengers, Admin, and Bus Staff. Additionally, it includes features for report generation and automated 
            communication of seat booking details via WhatsApp and email using Chat API and PHPMailer.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>


        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            <i class=" text-5xl fa-brands fa-android"></i>
            <h1 className="text-4xl">Doctor Appointment Book System</h1>
            <p className="text-justify">
            This project introduces an application for managing doctor appointments, involving Receptionist, Doctor, and Patient roles. It includes features for report generation and automated appointment date notifications sent via WhatsApp and email using ChatAPI and PHPMailer. The system ensures 
            efficient record-keeping and communication in the healthcare appointment booking process.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-mobile"></i>
            <h1 className="text-4xl">Library Management System</h1>
            <p className="text-justify">
            This project encompasses a desktop application for cataloging diverse books and users. Additionally, it features a report generation system, providing insights and data analysis capabilities. The application efficiently manages book records and user information 
            while offering comprehensive reporting for informed decision-making and organization.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Quiz Application(Web Application)</h1>
            <p className="text-justify">
            The Quiz Application, built with Asp.Net and MySQL, facilitates educational preparation by offering subject-wise quizzes for school/college exams. Admins create quizzes and multiple-choice questions, manage user data, and generate reports. Users can access and complete quizzes, r
            eview correct answers, and enhance their subject knowledge efficiently.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;