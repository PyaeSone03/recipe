import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("Veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("Veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div>
      <Box sx={{ margin: "4rem 0rem" }}>
        <h3>Veggie Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Box
                sx={{
                  minHeight: "25rem",
                  borderRadius: "3rem",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Link to={`/recipe/${recipe.id}`}>
                <Typography
                  sx={{
                    position: "absolute",
                    zIndex: "10",
                    left: "50%",
                    bottom: "0%",
                    transform: "translate(-50%,0%)",
                    color: "white",
                    width: "100%",
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: "1rem",
                    height: "100%",
                    display: "flex", 
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderBottomLeftRadius: "rem",
                    borderBottomRightRadius: "2rem",
                    padding: "0.5rem",
                  }}
                >
                  {recipe.title}
                </Typography>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  style={{
                    borderRadius: "3rem",
                    position: "absolute",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                </Link>
                <Gradient />
              </Box>
            </SplideSlide>
          ))}
        </Splide>
      </Box>
    </div>
  );
};

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
