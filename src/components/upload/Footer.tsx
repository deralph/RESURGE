import React from "react";
import {
  FiInstagram,
  FiLinkedin,
  FiX,
  FiMapPin,
  FiPhone,
  FiMail,
  FiLink,
  FiFileText,
  FiHelpCircle,
} from "react-icons/fi";
import { MobileOnlyLayout } from "../Layout/MobileOnlyLayout/MobileOnlyLayout";
import resurgeLogo from '../../assets/resurge001.png';

 const Footer= ({
  
  copyrightText = "©2025 RESURGE – All Rights Reserved",
}) => {
  return (
      <footer className="bg-[#1A1A1A] text-gray-200 px-4 py-6 space-y-6">
        {/* Logo */}
        <div>
          <img
            src={resurgeLogo}
            alt="Resurge logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Tagline */}
        <p className="text-base font-monserrat font-medium">Wear Your Memories</p>

        {/* Social & Location */}
        <div className="flex items-center space-x-4">
          <button aria-label="Close" className="text-gray-400">
            <FiX size={20} aria-hidden="true" />
          </button>
          <a
            href="https://instagram.com/resurge"
            aria-label="Instagram"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram size={20} aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/company/resurge"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={20} aria-hidden="true" />
          </a>
          <div className="flex items-center space-x-1 text-xs text-gray-400 ml-auto">
            <FiMapPin size={20} aria-hidden="true" />
            <span>Lagos, Nigeria</span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          {/* Quick Links */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <FiLink aria-hidden="true" />
              <span className="font-semibold">Quick Links</span>
            </div>
            <ul className="space-y-1">
              {["Home", "Endsars Project", "What we do", "Contact Us", "FAQs"].map(
                (text) => (
                  <li key={text}>
                    <a
                      href={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:underline"
                    >
                      {text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <FiFileText aria-hidden="true" />
              <span className="font-semibold">Legal</span>
            </div>
            <ul className="space-y-1">
              {["Terms of Service", "Privacy Policy", "Refund Policy"].map(
                (text) => (
                  <li key={text}>
                    <a
                      href={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:underline"
                    >
                      {text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Support */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <FiHelpCircle aria-hidden="true" />
            <span className="font-semibold">Support</span>
          </div>
          <ul className="space-y-1 ml-6">
            {["FAQs", "Contact Us", "Track Item"].map((text) => (
              <li key={text}>
                <a
                  href={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:underline"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-1 text-sm">
          <div className="flex items-center space-x-2">
            <FiPhone aria-hidden="true" />
            <span>+234 810 486 8709</span>
            <span>|</span>
            <span>+234 813 895 6133</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiMail aria-hidden="true" />
            <a
              href="mailto:resurge.fun@gmail.com"
              className="hover:underline"
            >
              resur­ge.fun@gmail.com
            </a>
          </div>
        </div>

        {/* Divider & Copyright */}
        <hr className="border-gray-700" />
        <p className="text-center text-xs text-gray-500">{copyrightText}</p>
      </footer>
  );
};

export default Footer