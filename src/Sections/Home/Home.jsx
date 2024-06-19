import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../assets/images/avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../../components/StyledButton/StyledButton";

const Home = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      // >= mobile
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
              {" "}
              {/* Linha modificada */}
              <Box>
                <Typography
                  color="primary.contrastText"
                  variant="h1"
                  marginTop={"50px"}
                  textAlign="left"
                  pb={2}
                >
                  Kaio Eduardo
                </Typography>
                <Typography color="primary.contrastText"
                  variant="h"
                  marginTop={"3px"}
                  textAlign="left"
                >
                  I'm a FullStack Developer
                </Typography>
              </Box>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton>
                  <MailOutlineIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
              {" "}
              {/* Linha modificada */}
              <Box position="relative" textAlign="center">
                <StyledImg src={Avatar} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Home;
