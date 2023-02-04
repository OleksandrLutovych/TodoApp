import * as React from "react";
import Switch from "@mui/material/Switch";

interface INightmodeToggleProps {
  checked: boolean;
  onChange: () => void;
}

export default function NightmodeToogle(props: INightmodeToggleProps) {
  const { checked, onChange } = props;

  return (
    <Switch
      checked={checked}
      onChange={onChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
