'use client';
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Verification = () => {
  const router = useRouter();
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');

  const inputRefs = useRef([]);

  const handleVerify = () => {
    // Check if the verification code is empty
    if (verificationCode.some((code) => code === '')) {
      setErrorMessage('Please enter the verification code.');
    } else {
      // Clear the error message if the code is not empty
      setErrorMessage('');

      // Perform any verification logic here, e.g., API calls, code validation, etc.
      // For this example, we'll navigate to the home page directly.
      router.push('/home');
    }
  };

  const handleInputChange = (index, value) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);

    // Move focus to the next input box
    if (value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div>
      {/* Container at the top with shadow */}
      {/* ... your existing code ... */}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
          backgroundColor: '#fffdf8',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>
            Enter the code sent to your mail to verify your Email Id.
          </h2>
          <p style={{ marginBottom: '20px' }}>
            Our team will get in touch with you to verify company details and
            create your Impactboard!
          </p>
          {/* Five white boxes for entering verification code */}
          <div style={{ marginBottom: '20px' }}>
            {verificationCode.map((value, index) => (
              <input
                key={index}
                type="text"
                style={{
                  width: '40px',
                  height: '40px',
                  marginRight: '10px',
                  border: '1px solid black',
                  textAlign: 'center',
                  fontSize: '18px',
                  borderRadius: '5px',
                }}
                maxLength={1}
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                ref={(inputRef) => (inputRefs.current[index] = inputRef)}
              />
            ))}
          </div>
          {/* Error message */}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button
            type="button"
            onClick={handleVerify}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#99c170',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;


