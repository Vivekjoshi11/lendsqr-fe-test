import React, { useState, useRef, useEffect } from "react";
import "../../styles/navbar.scss";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="https://pecunia.lendsqr.com/assets/logo.svg" alt="Lendsqr" />
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <input type="text" placeholder="Search for anything" />
          <button className="search-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.3541 0.000553316C3.94043 0.0214743 2.59056 0.59363 1.5911 1.59554C0.572324 2.6165 0 4.00108 0 5.44478C0 6.88848 0.572324 8.27307 1.5911 9.29402C2.5152 10.2183 3.74056 10.7782 5.04297 10.8714C6.34537 10.9645 7.6377 10.5847 8.68348 9.80138L12.874 14L13.9717 12.9002L9.77963 8.70008C10.5612 7.65258 10.9403 6.35818 10.8476 5.05362C10.7549 3.74905 10.1966 2.52153 9.27477 1.59554C8.76094 1.08047 8.1492 0.673917 7.47576 0.39995C6.80232 0.125984 6.08086 -0.00982865 5.3541 0.000553316ZM5.48903 1.55605C6.49887 1.57093 7.46314 1.97962 8.1771 2.69533C8.9048 3.42458 9.3136 4.41357 9.3136 5.44478C9.3136 6.476 8.9048 7.46498 8.1771 8.19424C7.44925 8.92334 6.46216 9.33293 5.43293 9.33293C4.4037 9.33293 3.41662 8.92334 2.68877 8.19424C1.96107 7.46498 1.55227 6.476 1.55227 5.44478C1.55227 4.41357 1.96107 3.42458 2.68877 2.69533C3.05576 2.32744 3.49268 2.03706 3.97367 1.84137C4.45466 1.64568 4.96995 1.54866 5.48903 1.55605Z" fill="white"/>
</svg>
</button>
        </div>

        {/* Navbar Actions */}
        <div className="navbar-actions">
          <a href="/docs" className="docs-link">Docs</a>

          {/* Notification Icon */}
          <span className="notification-icon"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7001 13.6913C19.718 16.5178 20.8518 19.2235 22.8584 21.2183C23.0327 21.3912 23.0856 21.6531 22.9916 21.8804L22.9912 21.8815C22.8964 22.107 22.676 22.2561 22.4284 22.2549M19.7001 13.6913L22.429 22.0549M19.7001 13.6913V13.5968V11.6642C19.7176 10.1275 19.2154 8.63071 18.275 7.41524C17.3984 6.28217 16.1892 5.45625 14.821 5.05095C15.2642 4.42355 15.3572 3.60324 15.0487 2.88438L15.0486 2.88426C14.6962 2.06444 13.8907 1.53333 12.9982 1.53333C12.1057 1.53333 11.3002 2.06444 10.9477 2.88426L10.9477 2.88438C10.6397 3.60199 10.7318 4.42065 11.173 5.04761C9.82501 5.42985 8.62769 6.22584 7.75338 7.32787C6.81219 8.51196 6.30025 9.97972 6.30025 11.4925L6.30025 13.5968L6.30025 13.5973C6.30723 16.4578 5.17063 19.2015 3.14175 21.2183C2.96749 21.3912 2.91459 21.6531 3.00854 21.8804L3.00898 21.8814C3.10373 22.107 3.32419 22.2561 3.57172 22.2549M19.7001 13.6913L10.0221 22.2549M22.4284 22.2549C22.4282 22.2549 22.428 22.2549 22.4278 22.2549L22.429 22.0549M22.4284 22.2549H22.429V22.0549M22.4284 22.2549H15.9781M22.429 22.0549H15.8112M15.9781 22.2549C15.9899 22.1989 16.0002 22.1422 16.0089 22.085L15.8112 22.0549M15.9781 22.2549C15.6832 23.6549 14.4456 24.67 13.0001 24.67C11.5546 24.67 10.3171 23.6549 10.0221 22.2549M15.9781 22.2549H15.8112V22.0549M15.8112 22.0549L10.0221 22.2549M10.0221 22.2549H10.189V22.0549L9.99125 22.0851C9.99999 22.1423 10.0103 22.1989 10.0221 22.2549ZM10.0221 22.2549H3.57172M3.57172 22.2549C3.57195 22.2549 3.57218 22.2549 3.57241 22.2549L3.57118 22.0549V22.2549H3.57172ZM14.7285 22.2549C14.4747 22.9799 13.7867 23.4798 13.0001 23.4798H13C12.2133 23.4798 11.5254 22.9799 11.2716 22.2549H14.7285ZM7.51233 11.4924L7.51233 11.4921C7.51037 9.98893 8.12478 8.55137 9.21241 7.51489L9.21249 7.51481C10.2998 6.47745 11.7643 5.93259 13.2651 6.00474C14.6959 6.09328 16.0376 6.73143 17.0099 7.78408L17.0099 7.78409C17.9834 8.83803 18.5119 10.2253 18.4874 11.6596L18.4873 11.6596V11.663L18.4873 13.5961C18.4873 13.5962 18.4873 13.5963 18.4873 13.5964C18.4786 16.3045 19.3944 18.9297 21.0743 21.0424H4.92542C6.60545 18.9296 7.52131 16.3045 7.51233 13.5964L7.51233 11.4924ZM13.0001 2.75485C13.4119 2.75485 13.7837 3.00277 13.9416 3.38396C14.0986 3.76431 14.012 4.20235 13.7209 4.49448C13.4287 4.7856 12.9906 4.87214 12.6103 4.71506C12.2292 4.5571 11.9813 4.1853 11.9813 3.7736C11.9813 3.21071 12.4372 2.75485 13.0001 2.75485Z" fill="#213F7D" stroke="#213F7D" stroke-width="0.4"/>
</svg>
</span>

          {/* User Profile & Dropdown */}
          <div className="user-profile" ref={profileRef} onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
            <span className="username">
              Adedeji ▼
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.39229 12.0516C9.72823 12.425 10.2751 12.4219 10.6079 12.0516L13.4829 8.857..."
                  fill="#213F7D"
                />
              </svg>
            </span>

            {/* Dropdown Menu (Fixed Position) */}
            {dropdownOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li><a href="/settings">Settings</a></li>
                  <li><a href="/">Logout</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
