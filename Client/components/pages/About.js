import React, { useState, useEffect, useRef } from "react";
import style from "../../styles/About.module.scss"
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const Home = () => {
    return (
        <div className="main-pane">
            <div className={style.container}>
                <div>
                    <h1>About 🚀</h1>
                    <Card className={style.card}>
                        <CardContent>
                            <h2>Disclaimer</h2>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Updated: December 22, 2021
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Crypto Raffle is a personal project developed and operated by Typedef. It is not regulated in any way, shape, or form. If you require any more information or have any questions about our site's disclaimer, please feel free to contact us on Discord @typedef#2604. Our Disclaimer was generated with the help of the Disclaimer Generator.
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1.5 }} gutterBottom>
                                All the information on this website - CryptoRaffle - is published in good faith and for general information purpose only. Crypto Raffle does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon this website (Crypto Raffle), is strictly at your own risk. Crypto Raffle will not be liable for any losses and/or damages in connection with the use of our website.
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1.5 }} gutterBottom>
                                From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1.5 }} gutterBottom>
                                Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
                            </Typography>
                            <Typography variant="h6" sx={{ mt: 1.5 }} gutterBottom>
                                Consent
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1.5 }} gutterBottom>
                                By using our website, you hereby consent to our disclaimer and agree to its terms.
                            </Typography>
                            <Typography variant="h6" sx={{ mt: 1.5 }} gutterBottom>
                                Update
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1.5 }} gutterBottom>
                                Should we update, amend or make any changes to this document, those changes will be prominently posted here.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={style.card} sx={{ mt: 5 }}>
                        <CardContent>
                            <h2>Privacy Policy</h2>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Updated: December 22, 2021
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                At Crypto Raffle, accessible from CryptoRaffle.io, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Crypto Raffle and how we use it.
                                The only thing Crypto Raffle store from you is your Wallet Address.
                                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1.5 }} gutterBottom>
                                This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Crypto Raffle. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator.
                            </Typography>
                            <Typography variant="h6" sx={{ mt: 1.5 }} gutterBottom>
                                How we use your information
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                We collect your Wallet Address because of the following reasons:
                            </Typography>
                            <List>
                                <ListItem sx={{ paddingBottom: 0 }}><ListItemText primary="- To be able to join the raffle" secondary="the wallet address will be used to receive $1 USD worth of ETH from your account"/></ListItem>
                                <ListItem sx={{ paddingBottom: 0 }}><ListItemText primary="- To receive money from the raffle" secondary="the random winner will be chosen from multiple wallet addresses"/></ListItem>
                            </List>
                            <Typography variant="h6" sx={{ mt: 1.5 }} gutterBottom>
                                Consent
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1.5 }} gutterBottom>
                                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                            </Typography>
                            <Typography variant="h6" sx={{ mt: 1.5 }} gutterBottom>
                                Children's Information
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1.5 }} gutterBottom>
                                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1.5 }} gutterBottom>
                                Crypto Raffle does not knowingly collect any Personal Identifiable Information from children under the age of 19. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Home