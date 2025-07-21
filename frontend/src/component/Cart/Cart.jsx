import React from 'react';
import CartItem from './CartItem';
import {
  Divider,
  Modal,
  Box,
  Card,
  Button,
  TextField,
  Grid
} from '@mui/material';
import AddressCard from './AddressCard';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',           // responsive
  maxWidth: 400,           // allow enough width for fields
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};


const initialValues = {
  streetAddress: '',
  state: '',
  pincode: '',
  city: '',
};

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required('Street address is required'),
  state: Yup.string().required('State is required'),
  pincode: Yup.string().required('Pincode is required'),
  city: Yup.string().required('City is required'),
});

const items = [1, 1];

const Cart = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenAddressModel = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (values) => {
    console.log('Submitted values:', values);
    handleClose();
  };

  const createOrderUsingSelectedAddress = () => {
    alert('Address selected!');
  };

  return (
    <>
      <main className="flex flex-col lg:flex-row lg:justify-between">
        {/* Left Section */}
        <section className="w-full lg:w-[30%] space-y-6 pt-10 px-4">
          {items.map((item, index) => (
            <CartItem key={index} />
          ))}

          <Divider />

          <div className="billlDetails text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Deliver Fee</p>
                <p>₹21</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>₹33</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-gray-400 pt-3">
              <p>Total pay</p>
              <p>₹3300</p>
            </div>
          </div>
        </section>

        {/* Divider for large screens */}
        <Divider orientation="vertical" flexItem className="hidden lg:block" />

        {/* Right Section */}
        <section className="w-full lg:w-[70%] flex justify-center px-4 pb-10">
          <div className="w-full max-w-5xl">
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
  {[1, 2, 3, 4, 5].map((item, index) => (
    <AddressCard
      key={index}
      handleSelectAddress={createOrderUsingSelectedAddress}
      item={item}
      showButton={true}
    />
  ))}

  {/* Add New Address Card */}
  <Card className="flex flex-col items-center text-center justify-between w-60 p-5 bg-neutral-900 text-white">
    <AddLocationIcon fontSize="large" />
    <div className="flex flex-col items-center pt-2">
      <h1 className="font-semibold text-lg">Add New Address</h1>
    </div>
    <Button
      variant="outlined"
      fullWidth
      onClick={handleOpenAddressModel}
      className="mt-4"
    >
      Add
    </Button>
  </Card>
</div>
            
          </div>
        </section>
      </main>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} className="w-full">
                    <Field
                      as={TextField}
                      name="streetAddress"
                      label="Street Address"
                      fullWidth
                      variant="outlined"
                      helperText={<ErrorMessage name="streetAddress" component="div" className="text-red-600" />}
                    />
                  </Grid>
                  <Grid item xs={12} className="w-full">
                    <Field
                      as={TextField}
                      name="city"
                      label="City"
                      fullWidth
                      variant="outlined"
                      helperText={<ErrorMessage name="city" component="div" className="text-red-600" />}
                    />
                  </Grid>
                  <Grid item xs={12} className="w-full">
                    <Field
                      as={TextField}
                      name="state"
                      label="State"
                      fullWidth
                      variant="outlined"
                      helperText={<ErrorMessage name="state" component="div" className="text-red-600" />}
                    />
                  </Grid>
                  <Grid item xs={12} className="w-full">
                    <Field
                      as={TextField}
                      name="pincode"
                      label="Pincode"
                      fullWidth
                      variant="outlined"
                      helperText={<ErrorMessage name="pincode" component="div" className="text-red-600" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" type="submit" fullWidth>
                      Save Address
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
