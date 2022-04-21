import React from 'react';
import styled, {keyframes, ThemeProvider} from 'styled-components';
import {motion} from 'framer-motion';
import Me from '../assets/Images/profile-img.png';
import {Form, Button, Modal} from 'react-bootstrap';
import axios from 'axios';
import App from './VisualizeBarchart';
import Analyze from './Analyzeapp';
import {DarkTheme} from './Themes';

// use cors

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`;

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
img{
    width: 100%;
    height: auto;
}
`;

const Box2 = styled.div`
background-color: ${props => props.theme.body};
width: 70vw;
height:100vh;
position: relative;
overflow: hidden;
`;

const Box = styled (motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};

  z-index: 1;
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${props => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
    font-size: calc(0.1rem + 1.3vw);
    font-weight: 200;
  }
`;

const Intro = () => {
  // create handleclose function
  const [show, setShow] = React.useState (false);
  const [analyze, setAnalyze] = React.useState (false);
  const [obj, setObj] = React.useState ({});
  const [arr, setArr] = React.useState ([]);

  const handleClose = link => {
    console.log ('called');

    axios
      .post ('https://sde-api-uwu.herokuapp.com/live-anal?url=' + link)
      .then (res => {
        console.log (res.data);
        setObj (res.data);
        var obj = res.data;
        console.log ('aah', obj);
        let total =
          parseInt (obj.total_male_reviews) +
          parseInt (obj.total_female_reviews);
        //console
        console.log ('ff', total);
        let male_percent = parseInt (obj.total_male_reviews / total * 100 );
        let female_percent = parseInt (obj.total_female_reviews / total * 100);
        let pos_tot =
          obj.total_female_positive_reviews + obj.total_male_positive_reviews;
        let male_po_percent = obj.total_male_positive_reviews / pos_tot * 100;
        let female_po_percent =
          obj.total_female_positive_reviews / pos_tot * 100;

        //push into arr
        const key = [];
        key.push (male_percent);
        key.push (female_percent);
        // key.push(pos_tot);
        // key.push(male_po_percen);
        key.push (parseInt(male_po_percent));
        key.push (parseInt(female_po_percent));
        //update the arr
        console.log ('key', key);
        
        setArr(key);
        console.log ('myarr', arr);
        setAnalyze (true);
        //save the data in  a file
        //save the data in  a file
      });
    // window.location.href = "/analyze";
  };

  const formsubmit = e => {
    e.preventDefault ();
    const formData = new FormData (e.target);
    const formDataObj = Object.fromEntries (formData.entries ());
    console.log ('hmm', formDataObj);
    handleClose (formDataObj.link);
  };
  const handleShow = () => setShow (true);

  return (
    // if analyze is true, then show analyze page
    analyze
      ? <ThemeProvider theme={DarkTheme}>
          <Box2>

            {/* <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>     */}
            <Main>
              App Category: {obj.app_category} <br />
              Total installations: {obj.app_installs}<br />
              App Name: {obj.app_name} <br />

              <br /> <br />
              total_male_reviews: {arr[0]+'%'}  <br />
              total_female_reviews:{arr[1]+'%'}<br />
              total_female_positive_reviews:
              {' '}
              {arr[2]+'%'}
              <br />
              total_male_positive_reviews:
              {' '}
              {arr[3]+'%'}
              <br />

              <br /> <br />

            </Main>

            {/* <BigTitle text="Application" top="10%" left="5%" /> */}

          </Box2>

        </ThemeProvider>
      : <Box
          initial={{height: 0}}
          animate={{height: '55vh'}}
          transition={{type: 'spring', duration: 2, delay: 1}}
        >
          <SubBox>
            {/* create a input text field*/}
            <Text>
              <Modal.Body>
                <Form onSubmit={formsubmit}>

                  <Form.Group className="mb-3" controlId="ControlTextarea1">
                    <h4>
                      Paste your app link here, and see what we got for you
                    </h4>
                    <Form.Control type="text" name="link" />
                  </Form.Group>
                  <br />
                  <Button variant="primary" type="submit" row={3}>
                    Submit
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer />
            </Text>
          </SubBox>
          <SubBox>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1, delay: 2}}
            >
              <img className="pic" src={Me} alt="Profile Pic" />
            </motion.div>
          </SubBox>
        </Box>
  );
};

export default Intro;
