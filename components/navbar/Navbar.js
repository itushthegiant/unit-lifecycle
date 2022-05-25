import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import logo from "../../public/assets/logo.png";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.profile}>
          <Image
            height="100px"
            width="140px"
            src={logo}
            alt="profile_picture"
          />
        </div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <a href="#" className="active">
                <span className="icon">
                  <FontAwesomeIcon icon={faHouseChimney} pull="left" />
                </span>
                <span className="item">Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <i className="fas fa-desktop"></i>
                </span>
                <span className="item">My Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <i className="fas fa-user-friends"></i>
                </span>
                <span className="item">People</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <i className="fas fa-tachometer-alt"></i>
                </span>
                <span className="item">Perfomance</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <i className="fas fa-database"></i>
                </span>
                <span className="item">Development</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <i className="fas fa-chart-line"></i>
                </span>
                <span className="item">Reports</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <i className="fas fa-user-shield"></i>
                </span>
                <span className="item">Admin</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <i className="fas fa-cog"></i>
                </span>
                <span className="item">Settings</span>
              </a>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default Navbar;
