import { Box, Container, Grid, Typography, styled } from "@mui/material"

const  Home = () => {
  
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }
    }))


    return (
      <>
        <StyledHero>
            Hi
        </StyledHero>
      </>
    )
  }
  
  export default Home
  