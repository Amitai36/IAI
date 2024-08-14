import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import useMediaQuery from "@mui/material/useMediaQuery";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import { Close } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import * as React from "react";

interface DialogComponentProps {
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  content: React.ReactNode;
  title: { text: string; color: string };
  whenClose?: () => void;
}

export default function DialogComponent(props: DialogComponentProps) {
  const {
    content,
    open,
    setOpen,
    title: { text, color },
    whenClose,
  } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen?.(false);
    whenClose?.();
  };

  return (
    <Dialog fullWidth fullScreen={fullScreen} open={open} onClose={handleClose}>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          <Close />
        </Button>
      </DialogActions>
      <DialogTitle color={color}>{text}</DialogTitle>
      <DialogContent>
        {content}
      </DialogContent>
    </Dialog>
  );
}
