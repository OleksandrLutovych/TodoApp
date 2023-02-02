import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function ControlledSwitches(props: any) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={props.checked}
      onChange={props.onChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}