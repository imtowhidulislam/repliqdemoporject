"use client";
import React, { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaCopyright } from "react-icons/fa";
import Link from "next/link";
// import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare, FaCopyright } from 'react-icons/fa';

const Footer = () => {
  const [footerForm, setFooterForm] = useState({ email: "" });
  const [newsletterUser, setNewsletterUser] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFooterForm({ ...footerForm, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (footerForm.email) {
      const id = new Date().getTime().toString();
      const newUser = { ...footerForm, id };
      const updatedData = [...newsletterUser, newUser];
      setNewsletterUser(updatedData);

      setFooterForm({ email: "" });
    }
  };

  // !! Storing Newsletter Data into the localStorage.
  useEffect(() => {
    localStorage.setItem("newsletteruser", JSON.stringify(newsletterUser));
  }, [newsletterUser]);

  return (
    <div className="px-4 py-8 bg-nutral3">
      <div className="container">
        <div className="flex items-center justify-start mb-10 text-6xl text-gray-100">
          <div>
            <Link href="/" className="cursor-pointer">
              <h2 className="flex items-center gap-2 text-3xl font-bold uppercase text-primary">
                <span className="text-4xl text-primary">
                  <RiShoppingBagFill />
                </span>
                repliq
              </h2>
            </Link>
          </div>
        </div>
        <div className="grid gap-12 grid-cols-footerLayout">
          <div className="footerStyle">
            <h2 className="text-2xl text-nutral2">Privacy Policy</h2>
            <p className="text-sm">Terms & Condition</p>
            <p className="text-sm">contacts</p>
            <p className="text-sm">support</p>
            <p className="text-sm">feedback</p>
          </div>
          <div className="footerStyle">
            <h2 className="text-2xl text-nutral2">Navigate</h2>
            <div className="flex flex-col items-start ">
              <Link
                className="text-sm transition-all duration-200 ease-in-out hover:font-semibold hover:text-primary"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-sm transition-all duration-200 ease-in-out hover:font-semibold hover:text-primary"
                href="/product"
              >
                Product
              </Link>
              <Link
                className="text-sm transition-all duration-200 ease-in-out hover:font-semibold hover:text-primary"
                href="/dashboard"
              >
                Dashboard
              </Link>
            </div>

          </div>
          <div className="footerStyle">
            <h2 className="text-2xl text-nutral2">Follow Us</h2>

            <div className="flex gap-2 mt-2 text-3xl text-primary">
              <FaFacebookSquare className="footerSocialIcon" />
              <FaTwitterSquare className="footerSocialIcon " />
              <FaInstagramSquare className="footerSocialIcon" />
              <FaLinkedin className="footerSocialIcon" />
            </div>
            <p className="mt-2 lowercase">
              <span className="capitalize">email : </span>repliq@gmail.com
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-1 mt-12 capitalize text-baseClr2">
          <FaCopyright className="text-small sm:text-lg" />
          <p className="font-semibold text-small sm:text-base">
            copyright <span>2023. </span>all rights reserve to Repliq
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
