import { Grid, styled, Container, Typography, Button } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";


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
            <Grid item xs={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={8}>
                <Typography color="primary" variant="h1"> Kaio Eduardo</Typography>
                <Typography color="primary" variant="h2"> I'm a FullStack Developer</Typography>
                <Button>Download CV</Button>
                <Button>Conctact Me</Button>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
