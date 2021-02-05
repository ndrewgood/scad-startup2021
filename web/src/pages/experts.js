import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'
import ComingSoon from '../assets/images/coming-soon.png'
import SampleImage from '../assets/images/placeholder.png'

import '../styles/partners-team.scss'

const ExpertCard = (props) => {
  
  return(
    <a rel="noopener noreferrer" target="_blank" href={props.link} className={props.type == "judge" ? "judge-card" : "mentor-card"}>
      <img src={props.picture} alt="" srcset=""/>
      <div>
        <h3>{props.fname}<br/>{props.lname}</h3>
        <p>{props.company}</p>
      </div>
    </a>
  )
}

const ExpertsPage = (props) => {

  return (
    <Page>
      <Hero 
        smallHeader={"Shout out to our"} 
        bigHeader={["Experts and", <br key="ugh"/>, "Mentors"]}
      />
      <div className="experts-judgesSection container">
        <h2>Our Knowledgeable<br /><span>Judges</span></h2>
        <div className="experts-judgesCardGrid">
            <ExpertCard fname="Julia" lname="Niro" picture={SampleImage} type="judge" company="MilkRun"/>
            <ExpertCard fname="Mike" lname="Buzzard" picture={SampleImage} type="judge" company="Google"/>
            <ExpertCard fname="Angela" lname="Benton" picture={SampleImage} type="judge" company="Streamlytics"/>
            <ExpertCard fname="Jen" lname="Bonnett" picture={SampleImage} type="judge" company="SEDA"/>
            <ExpertCard fname="Karim" lname="Elsahy" picture={SampleImage} type="judge" company="elves"/>
            <ExpertCard fname="David" lname="Heredia" picture={SampleImage} type="judge" company="Heroes of Color"/>
            <ExpertCard fname="Lauren" lname="Wang" picture={SampleImage} type="judge" company="The Flex Company"/>
            <ExpertCard fname="Eufaula" lname="Garrett" picture={SampleImage} type="judge" company="The Benjamin Company"/>
            <ExpertCard fname="James" lname="Helms" picture={SampleImage} type="judge"company="Intuit"/>
            <ExpertCard fname="Julia" lname="Kemp" picture={SampleImage} type="judge" company="PauliMer"/>
            <ExpertCard fname="Zach" lname="Singleton" picture={SampleImage} type="judge" company="Uber"/>
            <ExpertCard fname="Gordon" lname="Lawson" picture={SampleImage} type="judge" company="Rangeforce"/>
            <ExpertCard fname="Jessica" lname="Belfry" picture={SampleImage} type="judge" company="SCORE"/>
            <ExpertCard fname="Ned" lname="Duffy" picture={SampleImage} type="judge" company="SCORE"/>
            <ExpertCard fname="Joey" lname="Womack" picture={SampleImage} type="judge" company="Goodie Nation"/>
            <ExpertCard fname="Kris" lname="Perpich" picture={SampleImage} type="judge" company="Adonit"/>
            <ExpertCard fname="Grant" lname="Perry" picture={SampleImage} type="judge" company="Dimensional Design, INC"/>
            <ExpertCard fname="Ugwem I." lname="Eneyo" picture={SampleImage} type="judge" company="SHYFT Power Solutions"/>
        </div>
      </div>
      <div className="experts-mentorSection container">
        <h2>Our Helpful<br /><span>Mentors</span></h2>
        <div className="experts-mentorCardGrid">
            <ExpertCard fname="Aditi" lname="Vyas" picture={SampleImage} company="Clear"/>
            <ExpertCard fname="Dane" lname="Galbraith" picture={SampleImage} company="Google"/>
            <ExpertCard fname="Erica" lname="Cardenas" picture={SampleImage} company="Consultant"/>
            <ExpertCard fname="Jagriti" lname="Kumar" picture={SampleImage} company="Microsoft"/>
            <ExpertCard fname="Jenny" lname="Lanier" picture={SampleImage} company="IBM"/>
            <ExpertCard fname="Joe" lname="Kennedy" picture={SampleImage} company="Apex"/>
            <ExpertCard fname="Mitzi" lname="Okou" picture={SampleImage} company="HP"/>
            <ExpertCard fname="Nick" lname="Pellegrino" picture={SampleImage} company="Google"/>
            <ExpertCard fname="Nolan" lname="Canady" picture={SampleImage} company="IBM"/>
            <ExpertCard fname="Patricia" lname="Bell" picture={SampleImage} company="SCAD"/>
            <ExpertCard fname="Abi" lname="Lierheimer" picture={SampleImage} company="Bobblehaus"/>
            <ExpertCard fname="Allan" lname="Holmes" picture={SampleImage} company="Liist"/>
            <ExpertCard fname="Brian" lname="Ahmes" picture={SampleImage} company="Parafin"/>
            <ExpertCard fname="Gonzo" lname="Gelso" picture={SampleImage} company="Founder"/>
            <ExpertCard fname="Ivan" lname="Reyes" picture={SampleImage} company="SAP Digital Factory"/>
            <ExpertCard fname="Jamieson" lname="Parker" picture={SampleImage} company="Upscale Threads"/>
            <ExpertCard fname="Jody" lname="Buelterman" picture={SampleImage} company="SCAD"/>
            <ExpertCard fname="Joshua" lname="Crafford" picture={SampleImage} company="Synchrony"/>
            <ExpertCard fname="Larry" lname="Rubin" picture={SampleImage} company="Thnks"/>
            <ExpertCard fname="Paul" lname="Lafata" picture={SampleImage} company="Lab1886 USA"/>
            <ExpertCard fname="Quintin" lname="Williams" picture={SampleImage} company="Q4 Sports"/>
            <ExpertCard fname="Victor" lname="Ermoli" picture={SampleImage} company="SCAD"/>
            <ExpertCard fname="Hanna" lname="Toler" picture={SampleImage} company="Deloitte Digital"/>
            <ExpertCard fname="Susan" lname="Dove" picture={SampleImage} company=""/>
            <ExpertCard fname="Daniel" lname="Grein" picture={SampleImage} company="BMW"/>
            <ExpertCard fname="Jessica" lname="Wheeler" picture={SampleImage} company="Fifth Third Bank"/>
            <ExpertCard fname="Joel" lname="Dixon" picture={SampleImage} company="EnrichHER"/>
            <ExpertCard fname="Beth" lname="Godfrey" picture={SampleImage} company="Google"/>
            <ExpertCard fname="Alan" lname="Liu" picture={SampleImage} company=""/>
            <ExpertCard fname="Galyn" lname="Bunnell" picture={SampleImage} company="Amazon"/>
            <ExpertCard fname="Austin" lname="Webster" picture={SampleImage} company="Deepr"/>
            <ExpertCard fname="Drura" lname="Parrish" picture={SampleImage} company="RSLP"/>
            <ExpertCard fname="Eleanor" lname="Turner" picture={SampleImage} company="The Big Favorite"/>
            <ExpertCard fname="Eric" lname="Shumate" picture={SampleImage} company="SCAD"/>
            <ExpertCard fname="India" lname="Hayes" picture={SampleImage} company="Mini City"/>
            <ExpertCard fname="Lauren" lname="Demarest" picture={SampleImage} company="Sweatvaca"/>
            <ExpertCard fname="Mfon" lname="Akpan" picture={SampleImage} company="SCAD"/>
            <ExpertCard fname="Beverly" lname="Barnes" picture={SampleImage} company="Sweatvaca"/>
            <ExpertCard fname="Angela" lname="Martin" picture={SampleImage} company="Lenovo"/>
            <ExpertCard fname="Allan" lname="Meade, Jr." picture={SampleImage} company="SCAD"/>
            <ExpertCard fname="Dwayne" lname="Stephens" picture={SampleImage} company="LiFO Corp"/>
            <ExpertCard fname="Stacey" lname="Roach" picture={SampleImage} company="Inventure"/>
            <ExpertCard fname="Daniel Van" lname="Geffen" picture={SampleImage} company="Creative Circle"/>
            <ExpertCard fname="Clark" lname="Delashmet" picture={SampleImage} company="SCAD"/>
            <ExpertCard fname="Cliff" lname="Curry" picture={SampleImage} company="YouTube"/>
            <ExpertCard fname="Darrell" lname="Thompson" picture={SampleImage} company="Deepr"/>
            <ExpertCard fname="Devin" lname="O'Bryan" picture={SampleImage} company="IBM"/>
            <ExpertCard fname="Joseph" lname="Willet" picture={SampleImage} company="Edgewood Ave."/>
            <ExpertCard fname="Marialexandra" lname="Garcia" picture={SampleImage} company="Outplay"/>
            <ExpertCard fname="Simon" lname="Chamorro" picture={SampleImage} company="Valiu (YC19)"/>
            <ExpertCard fname="Jay" lname="Jackson" picture={SampleImage} company="RYSE"/>
        </div>
      </div>
    </Page>
  );
};

export default ExpertsPage;
