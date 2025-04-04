import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Footer Column 1 */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">RESURGE</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tempus urna vel consequat ultricies.
            </p>
          </div>

          {/* Footer Column 2 */}
          <div>
            <h4 className="font-semibold font-montserrat mb-2">Useful Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white">
                  Collections
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 3 */}
          <div>
            <h4 className="font-semibold font-montserrat mb-2">Contact Us</h4>
            <p className="text-sm">123 Fashion Street</p>
            <p className="text-sm">New York, NY 10001</p>
            <p className="text-sm">+1 (123) 456-7890</p>
            <p className="text-sm">info@RESURGE.com</p>
          </div>

          {/* Footer Column 4: Social Icons */}
          <div>
            <h4 className="font-semibold font-montserrat mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="hover:text-white" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="hover:text-white" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
          © 2025 RESURGE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
