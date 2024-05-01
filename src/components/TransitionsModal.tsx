import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { InputWrapper } from './InputWrapper';
import { ButtonWrapper } from './ButtonWrapper';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import { cityAction } from 'reducers/city.reducer';
import { log } from 'console';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 220,
  bgcolor: 'background.paper',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  boxShadow: 24,
  p: 4,
};


export type  TransitionsModalPropsType = {
  toggleTransitionsModal: () => void
  isOpenTransitionsModal: boolean
}


export const TransitionsModal = ({isOpenTransitionsModal, toggleTransitionsModal}: TransitionsModalPropsType) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClose = () => toggleTransitionsModal();
  const [city, setCity] = React.useState('');
  const [countryCode, setCountryCode] = React.useState('');


  const addCurrentCity = () => {
    // dispatch(cityAction({}))
  }

  const setCurrentCity = (value: string) => {
     setCity(value)
  }

  const setCurrentCountryCode = (value: string) => {
      setCountryCode(value)
  }
   
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpenTransitionsModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpenTransitionsModal}>
          <Box sx={style}> 
               <InputWrapper label='Your city' variant='outlined' onInputChange={setCurrentCity}/>
               <InputWrapper label='Country code' variant='outlined' onInputChange={setCurrentCountryCode}/>
               <ButtonWrapper text='ok' variant='contained' clickHandler={addCurrentCity}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}