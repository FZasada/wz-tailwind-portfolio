import PropTypes from 'prop-types';
import Button from './Button';

const PasswordDialog = ({
  showPasswordDialog,
  password,
  passwordError,
  setPassword,
  handlePasswordSubmit,
  handlePasswordCancel,
  handleKeyPress,
}) => {
  if (!showPasswordDialog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h3 className="text-xl font-bold mb-4 text-gray-800">CV Download</h3>
        <p className="text-gray-600 mb-4">
          Please enter the password to download the CV:
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter Password"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2"
          autoFocus
        />
        {passwordError && (
          <p className="text-red-500 text-sm mb-4">{passwordError}</p>
        )}
        <div className="flex gap-3 justify-end">
          <Button text={"Cancel"} variant="secondary" onClick={handlePasswordCancel} />
          <Button text={"Download"} variant="primary" onClick={handlePasswordSubmit} />
        </div>
      </div>
    </div>
  );
};

PasswordDialog.propTypes = {
  showPasswordDialog: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  handlePasswordSubmit: PropTypes.func.isRequired,
  handlePasswordCancel: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};

export default PasswordDialog;