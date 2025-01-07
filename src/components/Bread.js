import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Jika di Home ("/"), tidak menampilkan breadcrumb
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="bg-gradient-to-br from-blue-50 to-blue-100 px-5 py-3 rounded-md w-full overflow-x-hidden ">
      <ol className="list-reset flex text-gray-700 m-0 p-0">
        <li className="m-0">
          <Link to="/" className="text-blue-600 hover:text-orange-400"> {/* Hover orange */}
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center m-0">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-500">{value}</span>
              ) : (
                <Link to={to} className="text-blue-600 hover:text-orange-600"> {/* Hover orange */}
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
