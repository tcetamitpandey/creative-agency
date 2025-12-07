import "../style/footer.css";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-left">© {new Date().getFullYear()} All rights reserved.</p>

        <p className="footer-right">
          Made with <FaHeart className="heart" /> by 
          <a href="https://your-link.com" target="_blank" rel="noopener noreferrer">
            &nbsp;Amit Pandey
          </a>
        </p>
      </div>
    </footer>
  );
}
