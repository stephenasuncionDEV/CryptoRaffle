import React, { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import { getEthPriceNow } from "get-eth-price";
import ShakeMachine from "../ShakeMachine";
import Entries from "../Entries"
import Transactions from "../Transactions";
import Alert from "../Alert";
import { getUserData, addTransaction, addEntry, addEntryCollection, getEntries } from "../../utils/firebase"
import style from "../../styles/Raffle.module.scss"

const Raffle = ({userData, signer}) => {
    const alertRef = useRef();
    const entryListRef = useRef();
    const transactionListRef = useRef();

    const getTransactions = () => {
        return getUserData(userData.address)
        .then(res => {
            const transactionList = res.data().transactions;
            let tempList = [];
            transactionList.forEach((transaction) => {
                tempList.push({
                    hash: transaction.hash,
                    url: `https://rinkeby.etherscan.io/tx/${transaction.hash}`,
                    value: transaction.value,
                    date: transaction.date
                });
            });
            transactionListRef.current.sendToTransactionList(tempList);
        })
        .catch(err => {
            alertRef.current.handleOpen("error", err.message, 5000);
        })
    }

    const getEntryList = () => {
        return getEntries()
        .then(res => {
            if (res.exists()) {
                const entryList = res.data().entries;
                entryListRef.current.sendToEntryList(entryList);
            }
        })
        .catch(err => {
            alertRef.current.handleOpen("error", err.message, 5000);
        })
    }

    useEffect(() => {
        getTransactions()
        .then(res => {
            getEntryList();
        });
    }, [])

    const onConfirm = () => {
        try {
            ethers.utils.getAddress(userData.address);
            let hash = "";
            getEthPriceNow()
            .then(data => {
                const ethPrice = 1 / data[Object.keys(data)[0]].ETH.USD;
                const val = ethPrice.toString().substring(0, 11);
    
                return signer.sendTransaction({
                    to: process.env.METAMASK_ADDRESS,
                    value: ethers.utils.parseEther(val)
                });
            })
            .then((transaction) => {
                const date = new Date().toUTCString().trim();
                const dateNow = date.substring(0, date.lastIndexOf(' '));
                hash = transaction.hash;
                console.log(transaction);
                return addTransaction(userData.address, {
                    hash: hash,
                    value: ethers.utils.formatEther(transaction.value.toString()),
                    date: dateNow
                })
            })
            .then(res => {
                const date = new Date();
                const curDay = new Date(date.setHours(0, 0, 0, 0))
                const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
                if (curDay.toString() === firstDay.toString()) {
                    addEntryCollection(`${curDay.getMonth() + 1}-${curDay.getDate()}-${curDay.getYear() - 100}`);
                }

                return getTransactions();
            })
            .then(res => {
                return addEntry({
                    address: userData.address,
                    hash: hash
                });
            })
            .then(res => {
                getEntryList();
            })
            .catch(err => {
                alertRef.current.handleOpen("error", err.message, 5000);
            })
        }
        catch (err) {
            alertRef.current.handleOpen("error", err.message, 5000);
        }
    }

    return (
        <div className="main-pane">
            <Alert ref={alertRef}/>
            <div className={style.container}>
                <div className={style.headerContainer}>
                    <h1>Raffle 🎁</h1>
                </div>
                <div className={style.subContainer}>
                    <ShakeMachine 
                        onConfirm={onConfirm}
                    />
                    <Entries ref={entryListRef} userAddress={userData.address}/>
                </div>
                <div className={style.subContainer}>
                    <Transactions ref={transactionListRef}/>
                </div>
            </div>
        </div>
    )
}

export default Raffle