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
    // Container at the top with shadow
    <div>
     {/* Container at the top with shadow */}
      <div style={{ 
        height: '90px',
        boxShadow: '3px 0px 16px rgba(0, 0, 0, 0.5)',
        backgroundColor: 'white',
        position: 'relative', // Needed for positioning the logo
      }}>

     <img
      src="https://static.wixstatic.com/media/9ecf7a_bc1e2afa5a684e41ab1ef3e3189089d6~mv2.png/v1/crop/x_0,y_365,w_1080,h_315/fill/w_926,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Add%20a%20heading%20(1).png"
      alt="Add a heading (1).png"
      style={{ 
        width: '300px', 
        height: 'auto',
        position: 'absolute',
        top: 5,
        left: 10,
         }}
      ></img>
      </div>

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



