import { useState } from "react";

interface ToggleButtonProps {
  label: string;
  toggled: boolean;
  onClick: (value: boolean) => void;
}

export function ToggleButton({ label, toggled, onClick }: ToggleButtonProps) {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };
  return (
    <label className="toggle-button-wrapper">
      <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
      <span></span>
      <br />
      <div>
        <strong>{label}</strong>
      </div>
    </label>
  );
}
