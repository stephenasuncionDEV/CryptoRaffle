import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme  } from '@mui/material';

const ConfirmationDialog = (props, ref) => {
    const {onSuccess} = props;
    const [confirmationData, setConfirmationData] = useState({
        title: "",
        body: ""
    });
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    useImperativeHandle(ref, () => ({
        handleOpen(title, body) {
            setConfirmationData({
                title: title,
                body: body
            })
            setOpen(true);
        }
    }), [])

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        onSuccess();
        setOpen(false);
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
            {confirmationData.title}
            </DialogTitle>
            <DialogContent>
            <DialogContentText>
                {confirmationData.body}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button variant="contained" color="error" onClick={handleClose} autoFocus>
                Cancle
            </Button>
            <Button variant="contained" color="success" onClick={handleConfirm} autoFocus>
                Confirm
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default forwardRef(ConfirmationDialog)