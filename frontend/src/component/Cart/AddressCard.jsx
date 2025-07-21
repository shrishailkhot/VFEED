import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Card, Button } from '@mui/material';

const AddressCard = ({ item, showButton, handleSelectAddress }) => {
  return (
    <Card className="flex flex-col justify-between w-60 p-5 bg-neutral-900 text-white flex-shrink-0">
      <div className="flex items-center gap-2">
        <HomeIcon />
        <h1 className="font-semibold text-lg">Home</h1>
      </div>
      <p className="text-sm text-gray-400 mt-2">
        Mumbai, abc, 933939, Maharashtra, India
      </p>
      {showButton && (
        <Button
          variant="outlined"
          fullWidth
          onClick={() => handleSelectAddress(item)}
          className="mt-4"
        >
          Select
        </Button>
      )}
    </Card>
  );
};

export default AddressCard;
