import { useState } from "react";
import { images } from "../Images";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MailOutline,
  PhoneIphone,
  CalendarToday,
  LocationOnOutlined,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";

function Sidebar() {
  const [openContent, setOpenContent] = useState(false);

  return (
    <aside className={openContent ? "sidebar active" : "sidebar"} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            style={{ borderRadius: "1rem", objectFit: "cover" }}
            src="/image.png"
            alt="Mallikarjun Kadagoudra"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Mallikarjun Kadagoudra">
            Mallikarjun Kadagoudra
          </h1>

          <p className="title">Software Engineer</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setOpenContent((prev) => !prev)}
          data-sidebar-btn
        >
          <span>Show Contacts</span>

          {openContent ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MailOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:kgoudar.ms@gmail.com" className="contact-link">
                kgoudar.ms@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <PhoneIphone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+91 7483089210" className="contact-link">
                +91 7483089210
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <CalendarToday />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="2006-06-18">June 18, 2006</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocationOnOutlined />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Gokak, Karnataka, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/Mallikarjun-Kadagoudra/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://github.com/Mallikarjun-64"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
