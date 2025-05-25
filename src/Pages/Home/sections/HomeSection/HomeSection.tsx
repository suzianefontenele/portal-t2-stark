import { Box, Container, Grid, Typography, styled } from "@mui/material"
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground"
import Typewriter from "../../../../components/Typewriter/Typewriter"
import Avatar from "../../../../assets/images/logot2.png"
import { FaWhatsapp } from 'react-icons/fa';
import StyledButton from "../../../../components/StyledButton/StyledButton";

const HomeSection: React.FC = () => {

    const StyledImg = styled("img")(() => ({
        width: "100%",
        position: "relative"
    }));

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
    }));

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box position="relative" pb={4}>
                                <Box width={"160%"} position="absolute" top={-100} left={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box textAlign="left">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <Typewriter text="Consultoria em TI" delay={120} variant="h2" color="primary.contrastText" />
                            <Box mt={3}>
                                <Grid container spacing={3} display="flex" justifyContent="center">
                                    <Grid item xs={10} md={4}>
                                        <StyledButton
                                            onClick={() =>
                                                window.location.href = 'https://wa.me/5521995161474?text=Olá%2C+gostaria+de+mais+informações!'
                                            }
                                        >
                                            <FaWhatsapp />
                                            <Typography>
                                                Fale conosco
                                            </Typography>
                                        </StyledButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default HomeSection
