// MyButton.tsx

import React from 'react';
import { 
  Button as MuiButton,
  ButtonProps as MuiButtonProps,

} from '@mui/material';

// Only include variant, size, and color
// type MyButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color'>;
 
// Use all except disableRipple
// type MyButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

// Use all
type MyButtonBaseProps = MuiButtonProps;

export interface MyButtonProps extends MyButtonBaseProps {
  label: string;
}

export const MyButton = ({ label, ...rest }: MyButtonProps) => <MuiButton {...rest}>{label}</MuiButton>;

export default MyButton;
