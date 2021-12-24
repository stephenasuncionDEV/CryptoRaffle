import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header"
import Login from "../components/Login"
import Alert from "../components/Alert"
import Layout from "../components/Layout"
import Raffle from "../components/pages/Raffle"
import About from "../components/pages/About"
import { addUser } from "../utils/firebase"

const Index = () => {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [userData, setUserData] = useState({});
    const [isConnected, setIsConnected] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const alertRef = useRef();

    useEffect(() => {
        if (Object.keys(userData).length === 0) return;
        addUser(userData.address)
        .then(res => {
            setIsConnected(true);
        })
        .catch(err => {
            alertRef.current.handleOpen("error", err.message, 5000);
        })
    }, [userData])

    return (
        <div>
            <Header 
                title="Crypto Raffle"
                keywords="Crypto Raffle, CrpytoRaffle, Ethereum, Ether, Ethereum Raffle, Ethereum Gambling, Crypto Gambling, Crypto Currency"
            />
            <Alert ref={alertRef}/>
            {isConnected ? (
                <Layout 
                    userData={userData}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    poolAmount="0.00"
                >
                    {currentPage == 0 && (
                        <Raffle 
                            userData={userData}
                            signer={signer}
                        />
                    )}
                    {currentPage == 1 && (<About />)}
                </Layout>
            ) : (
                <Login
                    alertRef={alertRef}
                    setUserData={setUserData}
                    setProvider={setProvider}
                    setSigner={setSigner}
                />
            )}
        </div>
    )
}

export default Index