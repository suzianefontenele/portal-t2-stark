import { Box, Container, IconButton, Typography } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {

    return (
        <>
            <Box pt={2} pb={2}>
                <Container maxWidth="sm">
                    <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                        <IconButton href="mailto:t2starkconsultoria@gmail.com" target="_blank">
                            <EmailIcon />
                        </IconButton>
                    </Box>
                    <Typography textAlign="center">
                        © 2025 T2 Stark Consultoria em Tecnologia LTDA - All rights reserved
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer
