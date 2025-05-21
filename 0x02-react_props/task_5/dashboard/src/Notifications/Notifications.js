import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer, listNotifications, handleButtonClick }) {
  return (
    <React.Fragment>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <ul>
            {listNotifications && listNotifications.length > 0 ? (
              listNotifications.map(({ id, html, type, value }) => (
                <NotificationItem key={id} type={type} value={value} html={html} />
              ))
            ) : (
              <NotificationItem value="No new notification for now" />
            )}
          </ul>
          <button
            style={{ 
              color: "#3a3a3a", 
              fontWeight: "bold", 
              background: "none", 
              border: "none", 
              fontSize: "10px", 
              position: "absolute", 
              right: "2px", 
              top: "2px", 
              cursor: "pointer" 
            }}
            aria-label="Close"
            onClick={() => handleButtonClick()}
          >
            <img src={closeIcon} alt="closeIcon" width="10px" />
          </button>
        </div>
      )}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleButtonClick: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleButtonClick: () => console.log("Close button has been clicked"),
};

export default Notifications;