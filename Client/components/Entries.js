import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { Card, CardContent, Typography, ListItem, Chip } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { FixedSizeList } from 'react-window';
import { AutoSizer } from 'react-virtualized';
import style from "../styles/Entries.module.scss"

const renderRow = (props) => {
    const { data, index, style } = props;
    const item = data[index];

    const onClick = (hash) => {
        window.open(`https://rinkeby.etherscan.io/tx/${hash}`);
    }

    return (
        <ListItem style={style} button key={index} component="div" onClick={() => onClick(item.hash)} disablePadding>
            <Chip
                variant="outlined"
                size="small"
                icon={<OpenInNewIcon />}
                label={item.address}
                clickable
                style={{
                    border: '1px solid rgb(230, 230, 230)',
                    color: 'rgb(90, 90, 90)',
                    fontSize: 12,
                }}
            />
        </ListItem>
    )
}

const Entries = (props, ref) => {
    const [addressList, setAddressList] = useState([]);
    const outerListRef = useRef();

    useEffect(() => {
        if (outerListRef.current == null) return;
        outerListRef.current.scrollTop = outerListRef.current.scrollHeight;
    }, [addressList])

    useImperativeHandle(ref, () => ({
        sendToEntryList(addresses) {
            setAddressList(addresses);
        }
    }), [])

    return (
        <Card className={style.card}>
            <CardContent className={style.content}>
                <Typography variant="h6" gutterBottom>
                    Entries
                </Typography>
                <div className={style.list}>
                    <AutoSizer>
                        {({ height, width }) => { 
                            return (
                                <FixedSizeList
                                    outerRef={outerListRef}
                                    height={height}
                                    width={width}
                                    itemSize={25}
                                    itemCount={addressList.length}
                                    itemData={addressList}
                                >
                                    {renderRow}
                                </FixedSizeList>
                            )
                        }}
                    </AutoSizer>
                </div>
            </CardContent>
        </Card>
    )
}

export default forwardRef(Entries)