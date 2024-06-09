import { Grid, styled, Container, Typography, Button } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "Black",
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
              <Typography color="primary" variant="h1" textAlign="center">
                {" "}
                Kaio Eduardo
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                {" "}
                I'm a FullStack Developer
              </Typography>

              <Grid container display="flex" justifyContent="center">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button>
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button>
                    <EmailIcon />
                    Conctact Me
                  </Button>
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
