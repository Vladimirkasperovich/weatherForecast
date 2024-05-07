import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { InputWrapper } from "./InputWrapper";
import { ButtonWrapper } from "./ButtonWrapper";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import { cityAction } from "reducers/city.reducer";
import { FormikErrors, useFormik, FormikValues} from "formik";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 220,
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  boxShadow: 24,
  p: 4,
};

export type TransitionsModalPropsType = {
  toggleTransitionsModal: () => void;
  isOpenTransitionsModal: boolean;
};

export const TransitionsModal = ({
  isOpenTransitionsModal,
  toggleTransitionsModal,
}: TransitionsModalPropsType) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClose = () => toggleTransitionsModal();

  const formik = useFormik({
    initialValues: {
      code: "",
      label: "",
    },
    validate: (values) => {
      const errors: FormikErrors<FormikValues> = {};
      if (!values) {
      }
      return errors;
    },
    onSubmit: (values) => {
      dispatch(cityAction(values));
      formik.resetForm();
      handleClose();
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          <Fade in={isOpenTransitionsModal}>
            <Box sx={style}>
              <InputWrapper
                label="Your city"
                variant="outlined"
                getFieldProps={formik.getFieldProps("label")}
              />
              <InputWrapper
                label="Country code"
                variant="outlined"
                getFieldProps={formik.getFieldProps("code")}
              />
              <ButtonWrapper text="ok" variant="contained" type="submit" />
            </Box>
          </Fade>
        </form>
      </Modal>
    </div>
  );
};
