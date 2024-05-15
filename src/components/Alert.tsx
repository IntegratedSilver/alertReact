import React, { useState } from 'react';

interface AlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  const [show, setShow] = useState(false);

  const toggleAlert = () => {
    setShow(!show);
  };

  return (
    <div>
      <button className="btn btn-warning" onClick={toggleAlert}>
        {show ? 'Click to hide Alert!' : 'Click to show Alert!'}
      </button>
      {show && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {message}
          <button type="button" className="btn-close" aria-label="Close" onClick={toggleAlert}></button>
        </div>
      )}
    </div>
  );
};

export default Alert;
