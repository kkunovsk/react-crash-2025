import React from 'react';
import { ClipLoader } from 'react-spinners';

interface SpinnerProps {
  loading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  const override: React.CSSProperties = {
    display: 'block',
    margin: '100px auto',
  };

  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;