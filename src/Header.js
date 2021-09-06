import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import mglass from "./search.png";
import bbclogo from "./BBC_logo.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: "",
    };
  }

  render() {
    return (
      <div className="cont-div">
        <div></div>
        <div className="link-div">
          <Link to="/home">
            <img className="bbclogo" src={bbclogo} />
          </Link>
          <ul>
            <div>
              <li>
                <Link to="/home">Home</Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/politics">Politics</Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/economy">Economy</Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/sport">Sport</Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/tech">Tech</Link>
              </li>
            </div>
          </ul>
          <form className="search-form" action="/action_page.php">
            <input
              type="text"
              value={this.state.searched}
              placeholder="Search.."
            />
            <button type="submit" class="search-button">
              <img src={mglass} />
            </button>
          </form>
        </div>
      </div>
    );
  }
}
