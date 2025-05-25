import { Box, Container, Typography } from "@mui/material";

const ProjectsSection: React.FC = () => {

    return (
        <Container maxWidth="lg">
            <hr />
            <Box id="projects" pt={5} pb={3}>
                <Typography variant="h2" textAlign="center">Nossos Serviços</Typography>
            </Box>
            <Box mb={5}>
                <Typography variant="h4" textAlign="center">
                    Desenvolvimento de Sistemas
                </Typography>
                <Typography variant="h4" textAlign="center">
                    Aplicações web, app e desktop
                </Typography>
                <Typography variant="h4" textAlign="center">
                    Aplicações sob medida
                </Typography>
                <Typography variant="h4" textAlign="center">
                    Avaliação de arquitetura, performance e segurança
                </Typography>
                <Typography variant="h4" textAlign="center">
                    Integração de sistemas legados
                </Typography>
                <Typography variant="h4" textAlign="center">
                    APIs e plataformas na nuvem
                </Typography>
            </Box>
        </Container>
    )
}

export default ProjectsSection
