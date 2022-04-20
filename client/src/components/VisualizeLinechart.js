import React, { useEffect, useRef, useState } from "react";
import { Route, Switch, useLocation } from "react-router";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Categories } from "../data/CategoryData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";
import {
  Bar,
  Doughnut,
  PolarArea,
  Radar,
  Scatter,
  Bubble,
} from "react-chartjs-2";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import PolarChart from "./PolarChart";
import RadarChart from "./RadarChart";
import DoughnutChart from "./DoughnutChart";
import d1 from "../data/mainData.json";
import astronaut from "../assets/Images/spaceman.png";
import ParticleComponent from "../subComponents/ParticleComponent";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  color:'#fff',
  scales: {
    y: {
      ticks: {
        color: 'white'
      }
    },
    x: {
      ticks: {
        color: 'white'
      }
    }
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Reviews of Men and Women for different categories of App",
      color: "#fff",
    },
  },
};

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const App = () => {
  console.log(typeof d1);
  // loop through d1
  // for each item in d1
  // create a new object
  // add the item to the new object
  // add the new object to the new array
  // create an array
  const label_array = [];
  const data_female_review = [];
  const data_male_review = [];
  const data_total_female_review = [];
  const data_total_male_review = [];
  const data_int_reviews=[];
  for (const item in d1) {
    // console.log(item);
    console.log(d1[item]["total_reviews"]);
    label_array.push(item);
    data_female_review.push(d1[item]["total_female_positive_reviews"]);
    data_male_review.push(d1[item]["total_male_positive_reviews"]);
    data_total_female_review.push(d1[item]["total_female_reviews"]);
    data_total_male_review.push(d1[item]["total_male_reviews"]);
    data_int_reviews.push(d1[item]["top_women_positive_reviews"][1]);
  }

  console.log(data_int_reviews[0][1]);
  const [userData, setUserData] = useState({
    labels: label_array,
    color:"#fff",
    datasets: [
      {
        label: "Female Positive Review",
        // loop through objects of d1 and select totoal_female_positive_reviews

        data: data_female_review,
        color:"#fff",
        backgroundColor: `rgba(10, 80, 161,${0.3})`,
      },
      {
        label: "Male Positive Review",
        data: data_male_review,
        backgroundColor: `rgba(112, 219, 237,${0.3})`,
      },
      {
        label: "Total Female Reviews",
        data: data_total_female_review,
        backgroundColor: `rgba(10, 67, 124,${0.3})`,
      },
      {
        label: "Total Male Reviews",
        data: data_total_male_review,
        backgroundColor: `rgb(10, 80, 161)`,
      },
    ],
  });

  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateY(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {
            <div>
              <div style={{ width: 800 , height:700}}>
                <LineChart options={options} chartData={userData} />
              </div>
              {/* <div style={{ width: 700 }}>
   <LineChart chartData={userData} />
 </div> */}
              {/* <div style={{ width: 300 }}>
   <PieChart options={options} chartData={userData} />
 </div>
 <div style={{ width: 300 }}>
   <PolarChart options={options} chartData={userData} />
   </div>
 <div style={{ width: 300 }}>
   <RadarChart options={options} chartData={userData} />
   </div>
 <div style={{ width: 300 }}>
   <DoughnutChart options={options} chartData={userData} />
   </div> */}
   <br></br><br></br>


   
       
   </div>
 
           
          }
        </Main>
    

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="Visualize" top="5%" right="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default App;
