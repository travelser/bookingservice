import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "About",
      links: ["How we work", "Newsroom", "Investors", "Careers", "Terms & Conditions", "Partner Help"]
    },
    {
      title: "Property Types",
      links: ["Hotels", "Apartments", "Resorts", "Villas", "Hostels", "B&Bs"]
    },
    {
      title: "Support",
      links: ["Help Center", "Safety Resource Center", "Cancellation options", "COVID-19 FAQs"]
    },
    {
      title: "Apps & Social",
      links: ["iPhone App", "Android App", "Facebook", "Twitter", "Instagram"]
    }
  ];

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-bold text-gray-800 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 hover:text-blue-600 hover:underline text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-6 border-t border-gray-300">
          <button className="bg-[#0071c2] text-white font-medium py-2 px-4 rounded mb-4 hover:bg-blue-700 transition-colors">
            List your property
          </button>
          <p className="text-sm text-gray-600">
            Copyright &copy; {new Date().getFullYear()} Booking.clone. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            This is a clone project for educational purposes only. Not affiliated with Booking.com.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;