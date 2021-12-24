import React, { useRef } from "react";
import { Toolbar, Divider, Button, Typography } from '@mui/material';
import Sidebar from "./Sidebar"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Alert from "../components/Alert"
import style from "../styles/Layout.module.scss"

const Layout = ({children, userData, currentPage, setCurrentPage, poolAmount}) => {
    const alertRef = useRef();

    const onCopyAddress = () => {
        navigator.clipboard.writeText(userData.address);
        alertRef.current.handleOpen("info", "Address copied.");
    }

    return (
        <div className={style.pane}>
            <Alert ref={alertRef}/>
            <Sidebar 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <div className={style.topPane}>
                <Toolbar>
                    <Button 
                        variant="outlined" 
                        startIcon={<ContentCopyIcon/>}
                        style={{
                            borderRadius: 20,
                            border: '1px solid rgb(230, 230, 230)',
                            color: 'rgb(90, 90, 90)',
                            fontSize: 12
                        }}
                        onClick={onCopyAddress}
                    >
                        {userData.address}
                        <Divider sx={{ ml: 1, mr: 1 }} orientation="vertical" flexItem />
                        {`${userData.balance.length > 6 ? userData.balance.substring(0, 6) : userData.balance} ETH`}
                    </Button>
                    <Divider sx={{ ml: 4, mr: 4 }} orientation="vertical" flexItem />
                    <Typography variant="h6" sx={{ mt: 0.5, color: "rgb(90, 90, 90)" }} gutterBottom>
                        Current ETH Pool: ${poolAmount}
                    </Typography>
                </Toolbar>
                <Divider />
                {children}
            </div>
        </div>
    )
}

export default Layout