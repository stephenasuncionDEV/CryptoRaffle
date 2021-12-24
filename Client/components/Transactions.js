import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { Card, CardContent, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import style from "../styles/Transactions.module.scss"

const Transactions = (props, ref) => {
    const [transactionList, setTransactionList] = useState([]);

    useImperativeHandle(ref, () => ({
        sendToTransactionList(transactions) {
            setTransactionList(transactions);
        }
    }), [])

    const onClick = (transactionURL) => {
        window.open(transactionURL);
    }

    return (
        <Card className={style.card}>
            {transactionList.length > 0 && (
                <CardContent className={style.cardContent}>
                    <Typography variant="h6" gutterBottom>
                        Transactions
                    </Typography>
                    <List>
                        {transactionList.map((data, idx) => (
                            <ListItem key={idx} onClick={() => onClick(data.url)} button>
                                <ListItemIcon>
                                    <AccountTreeIcon />
                                </ListItemIcon>
                                <ListItemText primary={data.hash.length > 30 ? `Hash: ${data.hash.substring(0, 30)}...` : data.hash} secondary={`ETH: ${data.value}`}/>
                                <ListItemText primary={data.url.length > 30 ? `${data.url.substring(0, 30)}...` : data.url} secondary={data.date}/>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            )}
        </Card>
    )
}

export default forwardRef(Transactions)