import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, Typography, Button } from '@mui/material';
import style from "../styles/ShakeMachine.module.scss"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ConfirmationDialog from "./ConfirmationDialog";
import EntryAnimation from "./EntryAnimation";

const ShakeMachine = ({onConfirm}) => {
    const dialogRef = useRef();
    const entryAnimation = useRef();

    const openDialog = () => {
        dialogRef.current.handleOpen("Enter the raffle?", "Are you sure you want to enter the raffle for $1 USD worth of Ethereum?");
    }

    return (
        <Card className={style.card}>
            <ConfirmationDialog ref={dialogRef} onSuccess={onConfirm}/>
            <CardContent className={style.cardContent}>
                <EntryAnimation ref={entryAnimation}/>
                <Button variant="contained" color="success" sx={{ mt: 4, width: 240, ml: "auto" }} endIcon={<KeyboardArrowRightIcon />} onClick={openDialog}>
                    Enter Raffle
                </Button>
                <Typography sx={{ mt: 0.5, fontSize: 12, textAlign: "right" }} color="text.secondary">
                    Reminder that when you enter the raffle you will be charged $1 USD worth of Ethereum.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ShakeMachine