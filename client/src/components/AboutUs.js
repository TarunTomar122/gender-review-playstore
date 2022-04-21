import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const AboutUs = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Develope width={40} height={40} /> Tarun Singh Tomar
</Title>
<Description>
Hi, I am Tarun Singh Tomar! I am a third year Computer Science and Engineering Student at IITJ.
</Description>
<Description>
<strong>Here is how you can describe me: </strong>
<ul>

    <li>
      Code lover
    </li>
    <li>
       Sexy Developer
    </li>
    <li>
        Valorant Player
    </li>
    <li>
       Upcoming SWE intern @Adobe
    </li>
    <li>
         Chess lover
    </li>
    <li>
        Listens to Billie Eilish
    </li>
    

</ul>
</Description>


            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Neeraj Anand
</Title>
<Description>
Hi, I am Neeraj Anand! I am one of Tarun's batchmates :D
</Description>
<Description>
<strong>Here is how you can describe me: </strong>
<ul>
    <li>
       Code Addict
    </li>
    <li>
       Bug Creator
    </li>
    <li>
       Upcoming SDE intern @Microsoft
    </li>
    <li>
         Chess lover
    </li>
    <li>
        Listens to Harry Styles, Jeremy Zucker, and Justin Bieber
    </li>
</ul>
</Description>

            </Main>

            <BigTitle text="Thank you" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default AboutUs
