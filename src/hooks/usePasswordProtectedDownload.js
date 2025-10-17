import { useState } from 'react';

const usePasswordProtectedDownload = (correctPassword = '0203') => {
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleDownloadClick = () => {
    setShowPasswordDialog(true);
    setPassword('');
    setPasswordError('');
  };

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      // Passwort korrekt - Download starten
      const pdfUrl = import.meta.env.VITE_CV_FILE_PATH;
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "CV_Wiktoria_Zasada";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Dialog schließen
      setShowPasswordDialog(false);
      setPassword('');
      setPasswordError('');
    } else {
      setPasswordError('Wrong Password. Please try again.');
    }
  };

  const handlePasswordCancel = () => {
    setShowPasswordDialog(false);
    setPassword('');
    setPasswordError('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handlePasswordSubmit();
    }
  };

  return {
    showPasswordDialog,
    password,
    passwordError,
    setPassword,
    handleDownloadClick,
    handlePasswordSubmit,
    handlePasswordCancel,
    handleKeyPress,
  };
};

export default usePasswordProtectedDownload;