import React from 'react';
import { BounceLoader } from 'react-spinners';
import './ViewStates.css';

const LoadingState = () => (
  <div className="view-state">
    <BounceLoader
      size={60}
      color="#e9e9e9"
    />
    <p className="view-state-message">Loading page</p>
  </div>
);

export default LoadingState;
