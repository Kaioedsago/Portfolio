import { Grid, styled, Container, Typography, Button,  } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {
  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    color: "White",
    height: "100vh",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary.contrasText" variant="h1" textAlign="center">
                {" "}
                Kaio Eduardo
              </Typography>
              <Typography color="primary.contrasText" variant="h2" textAlign="center">
                {" "}
                I'm a FullStack Developer
              </Typography>

              <Grid container display="flex" justifyContent="center" spacing={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                    <EmailIcon />
                    <Typography>Conctact Me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
