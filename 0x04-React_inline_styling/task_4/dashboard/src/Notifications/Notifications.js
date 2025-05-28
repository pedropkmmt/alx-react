import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite/no-important';


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.state = {
      isMobile: window.innerWidth >= 900
    };
  }

  componentDidMount() {
    
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isMobile: window.innerWidth <= 900
    });
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  handleMenuClick() {
    console.log('Menu clicked!');
    console.log('Is mobile:', this.state.isMobile);
    console.log('handleDisplayDrawer exists:', !!this.props.handleDisplayDrawer);
    console.log('Current displayDrawer:', this.props.displayDrawer);
    
    if (this.props.handleDisplayDrawer) {
      this.props.handleDisplayDrawer();
    } else {
      console.error('handleDisplayDrawer prop is missing!');
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.listNotifications.length > this.props.listNotifications.length ||
           nextProps.displayDrawer !== this.props.displayDrawer ||
           nextState.isMobile !== this.state.isMobile;
  }

  render() {
    console.log('Notifications render - displayDrawer:', this.props.displayDrawer);
    console.log('Is mobile:', this.state.isMobile);
    
    return (
      <div className={css(styles.Wrapper)}>
       
        <div 
          className={css(
            styles.menuItem,
            this.state.isMobile ? styles.menuItemMobile : styles.menuItemDesktop
          )}
          onClick={this.handleMenuClick}
        >
          Your notifications {this.props.listNotifications.length > 0 && `(${this.props.listNotifications.length})`}
        </div>
        
        {this.props.displayDrawer && (
          <>
            
            {this.state.isMobile && (
              <div 
                className={css(styles.backdrop)} 
                onClick={() => this.props.handleHideDrawer && this.props.handleHideDrawer()}
              />
            )}
            
            <div className={css(
              styles.Notifications,
              this.state.isMobile ? styles.NotificationsMobile : styles.NotificationsDesktop
            )}>
              <button 
                className={css(
                  styles.NotificationsBtn,
                  this.state.isMobile ? styles.NotificationsBtnMobile : null
                )}
                aria-label="Close"
                onClick={() => {
                  console.log('Close button clicked');
                  if (this.props.handleHideDrawer) {
                    this.props.handleHideDrawer();
                  }
                }}
              >
                <img src={closeIcon} alt="close icon" width={this.state.isMobile ? "20px" : "15px"} />
              </button>
              
              {this.props.listNotifications.length !== 0 && (
                <p className={css(styles.notiHeader)}>Here is the list of notifications</p>
              )}
              
              <ul className={css(styles.notificationsList)}>
                {this.props.listNotifications.length === 0 ? (
                  <NotificationItem type="default" value="No new notification for now" />
                ) : (
                  this.props.listNotifications.map((val) => (
                    <NotificationItem
                      type={val.type}
                      value={val.value}
                      html={val.html}
                      key={val.id}
                      markAsRead={this.markAsRead}
                      id={val.id}
                    />
                  ))
                )}
              </ul>
            </div>
          </>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  Wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    position: 'relative',
    zIndex: 1000
  },
  
  menuItem: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 'bold',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'all 0.3s ease',
    ':hover': {
      opacity: 0.8
    }
  },
  
  menuItemDesktop: {
    textAlign: 'right',
    padding: '5px',
    fontSize: '14px'
  },
  
  menuItemMobile: {
    position: 'fixed',
    top: '10px',
    left: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '20px',
    fontSize: '14px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    zIndex: 1000
  },
  
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1001
  },
  
  Notifications: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    backgroundColor: '#fff',
    position: 'relative'
  },
  
  NotificationsDesktop: {
    border: '3px dotted #e1484c',
    padding: '6px 12px',
    marginTop: '12px',
    minWidth: '300px',
    maxWidth: '400px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    borderRadius: '4px'
  },
  
  NotificationsMobile: {
    position: 'fixed',
    top: '60px', 
    left: '10px',
    right: '10px',
    maxHeight: 'calc(100vh - 80px)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    zIndex: 1002,
    overflow: 'auto'
  },
  
  NotificationsBtn: {
    color: '#3a3a3a',
    fontWeight: 'bold',
    background: 'none',
    border: 'none',
    position: 'absolute',
    cursor: 'pointer',
    outline: 'none',
    transition: 'transform 0.2s ease',
    ':hover': {
      transform: 'scale(1.1)'
    }
  },
  
  NotificationsBtnMobile: {
    fontSize: '18px',
    right: '15px',
    top: '15px',
    padding: '5px'
  },
  
  notiHeader: {
    margin: '0 0 15px 0',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333'
  },
  
  notificationsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func
};

export default Notifications;