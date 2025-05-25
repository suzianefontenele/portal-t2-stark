import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Java", "Python", "PHP", "VB6", "Primefaces", "Angular", "React", "JavaJavascript", "HTML", "CSS", "Material UI", "AWS", "Azure", "GCP", "Git", "SVN", "Confluence", "Figma"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre a T2 Stark</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiência</Typography>
                                <Typography textAlign="center">4 anos</Typography>
                                <Typography textAlign="center">Consultoria em TI</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography sx={{ textAlign: 'justify' }}>
                        Fundada em 2020, a T2 STARK Consultoria em Tecnologia LTDA nasceu com o propósito de impulsionar a transformação digital de empresas através de soluções inteligentes, personalizadas e escaláveis.
                        Somos especialistas em consultoria em tecnologia da informação, com forte atuação no desenvolvimento de sistemas sob medida, aplicações web, desktop e mobile, e integrações com sistemas legados. 
                        Combinamos experiência técnica, visão estratégica e agilidade para entregar valor real aos nossos clientes.
                        Nosso portfólio abrange desde projetos de web design e plataformas na nuvem, até avaliações de arquitetura, performance e segurança. Também oferecemos serviços de hospedagem, tratamento de dados e treinamentos em informática, sempre com foco na inovação e excelência operacional.
                        Na T2 STARK, acreditamos que a tecnologia é um meio poderoso para transformar negócios. Por isso, atuamos lado a lado com nossos clientes para criar soluções robustas, seguras e preparadas para o futuro.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Tecnologias</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection
