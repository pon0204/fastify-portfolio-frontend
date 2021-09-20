import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useAppDispatch } from '../../../app/hooks';
import { setEditedIsMe } from '../../../slices/chatSlice';

export default function UserSelectTabs() {
  const [value, setValue] = React.useState(1);
  const dispatch = useAppDispatch()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    dispatch(setEditedIsMe())
  };

  return (
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" variant="fullWidth" style={{backgroundColor: 'white'}} >
        <Tab icon={<PersonPinIcon />} label="相手" />
        <Tab icon={<PersonPinIcon />} label="自分" />
      </Tabs>
  );
}