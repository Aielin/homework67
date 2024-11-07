import { useDispatch } from 'react-redux';
import './Keypad.css';
import { addDigit, checkPassword, removeDigit } from '../../containers/password/passwordSlice.ts';

const Keypad = () => {
  const dispatch = useDispatch();

  const handleDigitClick = (digit: string) => {
    dispatch(addDigit(digit));
  };

  const handleDelete = () => {
    dispatch(removeDigit());
  };

  const handleEnter = () => {
    dispatch(checkPassword());
  };

  return (
    <div className="keypad">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
        <button key={digit} onClick={() => handleDigitClick(digit.toString())} className="btn btn-dark">
          {digit}
        </button>
      ))}
      <button onClick={handleDelete} className="btn btn-dark">{'<'}</button>
      <button onClick={handleEnter} className="btn btn-dark">E</button>
    </div>
  );
};

export default Keypad;
