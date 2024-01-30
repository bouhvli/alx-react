import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const closeNotification = () => {
    console.log('Close button has been clicked')
  };
  return (
    <div className='Notifications'>
      <button style={
        {
          position: 'absolute',
          top: '15px',
          right: '10px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
        }
      }
        aria-label='Close'
        onClick={closeNotification}
      >
        <img src={closeIcon} alt='Close icon' width='20px'/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification() }} />
      </ul>
    </div>
  )
}

export { Notifications };
