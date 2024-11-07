import { useSelector } from 'react-redux';
import './Display.css';
import { RootState } from '../../app/store.ts';

const Display = () => {
  const input = useSelector((state: RootState) => state.password.input);
  const isAccessGranted = useSelector((state: RootState) => state.password.isAccessGranted);

  return (
      <div className={`screen ${isAccessGranted === true ? 'granted' : isAccessGranted === false ? 'denied' : ''}`}>
        <div>{'*'.repeat(input.length)}</div>
        {isAccessGranted !== null && (
            <div className="status">{isAccessGranted ? 'Access Granted' : 'Access Denied'}</div>
        )}
      </div>
  );
};

export default Display;
