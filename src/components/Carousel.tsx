"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

interface CarouselProps {
  items: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", position: "relative" }}>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={items[currentIndex].imageUrl}
          alt={items[currentIndex].title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {items[currentIndex].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {items[currentIndex].description}
          </Typography>
        </CardContent>
      </Card>
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;
