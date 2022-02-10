import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import '../css/MovieSlider.css'
import a from '../images/Antim.png'
import b from '../images/batman.jpg'
import c from '../images/endgame.jpg'
import d from '../images/Venom.png'
import e from '../images/spoidermon.jpg'
import f from '../images/Sooryavanshi.png'
import Rightarrow from "./Rightarrow";
import Leftarrow from "./Leftarrow";
export default class MovieSlider extends Component {
  render() {
    const movies =[
      {
        name:"Antim",
        image:a
      },
      {
        name:"Batman",
        image:b
      },
      {
        name:"Avengers : Endgame",
        image:c
      },
      {
        name:"Venom",
        image:d
      },
      {
        name:"Spiderman: No way home",
        image:e
      },
      {
        name:"Sooryavanshi",
        image:f
      }];
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      autoplay:true,
      slidesToScroll: 2,
      initialSlide: 0,
      prevArrow: <Leftarrow />,
      nextArrow: <Rightarrow />
    };
    return (
      <div style={{maxWidth:"100%"}}>
        <Slider {...settings} className="slider">
          {movies.map((movie)=>
          {
            return(
              <div>
              <Link to={`/movie-detail/${movie.name}`}><img alt="star" src={movie.image} /></Link>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}