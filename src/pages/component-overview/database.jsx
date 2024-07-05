import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tableee from './table';
import TextField from '@mui/material/TextField';

function Databases() {
  const [isCheckedCheckBox, setIsCheckedCheckBox] = useState(false);
  const [isCheckedButton, setIsCheckedButton] = useState(true);
  // const [isIpAddress, setIsIpAddress] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [isHelperText, setIsHelperText] = useState('');

  const handleCheckboxChange = (event) => {
    setIsCheckedCheckBox(event.target.checked);
    setIsCheckedButton(!isCheckedButton);
  };

  useEffect(() => {
    const validateEmail = () => {
      if (inputValue != '') {
        const pattern = /^[a-zA-Z]+[0-9]*@gmail\.com(?:(,\s)+[a-zA-Z]+[0-9]*@gmail\.com)*$/;
        if (pattern.test(inputValue)) {
          setIsCheckedButton(false);
          setIsError(false);
          setIsHelperText('');
        } else {
          setIsCheckedButton(true);
          setIsError(true);
          setIsHelperText('Incorrect format.');
        }
      }
    };
    validateEmail(inputValue);
  }, [inputValue]);

  const handleChange = (e) => {
    if (e.target.value == '') {
      setIsCheckedButton(true);
      setIsError(true);
      setIsHelperText('Not null.');
    }
    const newValue = e.target.value.replace(/\n/g, '');
    setInputValue(newValue);
  };

  const handleIpAddressChange = (ip) => {
    setIsIpAddress(ip);
    if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ip)) {
      setIsCheckedButton(false);
    } else {
      setIsCheckedButton(true);
    }
  };

  const handleOnclickButton = () => {
    // alert(isIpAddress);
    alert(inputValue.replace(/\s+/g, ''));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white' }}>
        <div className="aaa" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://www.ctopeage.com/templates/images/supp_04.png" alt="img" width="100" height="100" />
          <div>
            <h3>Please activate database engine service</h3>
            <p>To start, you have to activate the service first. This should be done only once.</p>
            <Button
              sx={{
                backgroundColor: isCheckedButton ? 'lightgray' : 'blue',
                color: isCheckedButton ? 'darkgray' : 'white',
                '&:disabled': {
                  backgroundColor: 'lightgray',
                  color: 'darkgray'
                }
              }}
              disabled={isCheckedButton}
              onClick={handleOnclickButton}
            >
              Submit
            </Button>
            <br />
            <FormControlLabel
              control={<Checkbox inputProps={{ 'aria-label': 'controlled' }} />}
              label="External firewall"
              onChange={handleCheckboxChange}
            />
            {/* <br />
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter Email(s)" />
            <br />
            <br />
            <TextField
              id="filled-multiline-static"
              value={inputValue}
              onChange={handleChange}
              multiline
              rows={4}
              variant="filled"
              placeholder="Enter Email(s)"
            /> */}
            <br />
            <br />
            <TextField
              error={isError}
              id="outlined-error"
              value={inputValue}
              multiline
              rows={4}
              onChange={handleChange}
              helperText={isHelperText}
              placeholder="Enter Email(s)"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
      {isCheckedCheckBox && <Tableee onIpAddressChange={handleIpAddressChange} />}
    </div>
  );
}

export default Databases;
