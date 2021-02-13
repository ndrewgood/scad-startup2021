import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'
import ComingSoon from '../assets/images/coming-soon.png'
import SampleImage from '../assets/images/placeholder.png'

import abil from '../assets/images/experts/abil.png'
import aditiv from '../assets/images/experts/aditiv.png'
import alanaw from '../assets/images/experts/alanaw.png'
import alanl from '../assets/images/experts/alanl.png'
import allanh from '../assets/images/experts/allanh.png'
import allanm from '../assets/images/experts/allanm.png'
import angelab from '../assets/images/experts/angelab.png'
import angelam from '../assets/images/experts/angelam.png'
import austinw from '../assets/images/experts/austinw.png'
import bethg from '../assets/images/experts/bethg.png'
import benl from '../assets/images/experts/benl.png'
import beverlyb from '../assets/images/experts/beverlyb.png'
import briana from '../assets/images/experts/briana.png'
import clark from '../assets/images/experts/clark.png'
import cliffc from '../assets/images/experts/cliffc.png'
import dane from '../assets/images/experts/dane.png'
import danielgeffen from '../assets/images/experts/danielgeffen.png'
import danielgrein from '../assets/images/experts/danielgrein.png'
import daniellet from '../assets/images/experts/daniellet.png'
import darrellt from '../assets/images/experts/darrellt.png'
import davidh from '../assets/images/experts/davidh.png'
import devino from '../assets/images/experts/devino.png'
import drurap from '../assets/images/experts/drurap.png'
import dwaynes from '../assets/images/experts/dwaynes.png'
import eleanort from '../assets/images/experts/eleanort.png'
import eliskas from '../assets/images/experts/eliskas.png'
import ericac from '../assets/images/experts/ericac.png'
import erics from '../assets/images/experts/erics.png'
import eufaulag from '../assets/images/experts/eufaulag.png'
import galynb from '../assets/images/experts/galynb.png'
import gonzo from '../assets/images/experts/gonzo.png'
import gordonl from '../assets/images/experts/gordonl.png'
import grantp from '../assets/images/experts/grantp.png'
import hannat from '../assets/images/experts/hannat.png'
import indiah from '../assets/images/experts/indiah.png'
import ivanr from '../assets/images/experts/ivanr.png'
import jagritik from '../assets/images/experts/jagritik.png'
import jamesh from '../assets/images/experts/jamesh.png'
import jamiesonp from '../assets/images/experts/jamiesonp.png'
import jayj from '../assets/images/experts/jayj.png'
import jaylons from '../assets/images/experts/jaylons.png'
import jenb from '../assets/images/experts/jenb.png'
import jennyl from '../assets/images/experts/jennyl.png'
import jessicab from '../assets/images/experts/jessicab.png'
import jessicaw from '../assets/images/experts/jessicaw.png'
import jodyb from '../assets/images/experts/jodyb.png'
import joek from '../assets/images/experts/joek.png'
import joeld from '../assets/images/experts/joeld.png'
import joeyw from '../assets/images/experts/joeyw.png'
import josephw from '../assets/images/experts/josephw.png'
import joshuac from '../assets/images/experts/joshuac.png'
import juliak from '../assets/images/experts/juliak.png'
import julian from '../assets/images/experts/julian.png'
import karime from '../assets/images/experts/karime.png'
import krisp from '../assets/images/experts/krisp.png'
import larryr from '../assets/images/experts/larryr.png'
import laurend from '../assets/images/experts/laurend.png'
import laurenw from '../assets/images/experts/laurenw.png'
import marial from '../assets/images/experts/marial.png'
import mfona from '../assets/images/experts/mfona.png'
import mikeb from '../assets/images/experts/mikeb.png'
import mitzio from '../assets/images/experts/mitzio.png'
import nedd from '../assets/images/experts/nedd.png'
import nickp from '../assets/images/experts/nickp.png'
import nolanc from '../assets/images/experts/nolanc.png'
import patb from '../assets/images/experts/patb.png'
import paull from '../assets/images/experts/paull.png'
import quintinw from '../assets/images/experts/quintinw.png'
import simonc from '../assets/images/experts/simonc.png'
import staceyr from '../assets/images/experts/staceyr.png'
import theot from '../assets/images/experts/theot.png'
import ugweme from '../assets/images/experts/ugweme.png'
import victor from '../assets/images/experts/victor.png'
import zachs from '../assets/images/experts/zachs.png'





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
            <ExpertCard fname="Angela" lname="Benton" picture={angelab} type="judge" company="Streamlytics" link="https://www.linkedin.com/in/abenton/"/>
            <ExpertCard fname="Mike" lname="Buzzard" picture={mikeb} type="judge" company="Google" link="https://www.linkedin.com/in/buzzard/"/>
            <ExpertCard fname="Julia" lname="Niro" picture={julian} type="judge" company="MilkRun" link="https://www.linkedin.com/in/julianiiro/"/>
            <ExpertCard fname="Jen" lname="Bonnett" picture={jenb} type="judge" company="SEDA" link="https://www.linkedin.com/in/jenniferbonnett/"/>
            {/* <ExpertCard fname="Karim" lname="Elsahy" picture={karime} type="judge" company="elves" link="https://www.linkedin.com/in/elsahy/"/> */}
            <ExpertCard fname="David" lname="Heredia" picture={davidh} type="judge" company="Heroes of Color" link="https://www.linkedin.com/in/davidheredia/"/>
            {/* <ExpertCard fname="Lauren" lname="Wang" picture={SampleImage} type="judge" company="The Flex Company" link="https://www.linkedin.com/in/laurenschulte/"/> */}
            <ExpertCard fname="Eufaula" lname="Garrett" picture={eufaulag} type="judge" company="The Benjamin Company" link="https://www.linkedin.com/in/eufaulagarrett/"/>
            {/*<ExpertCard fname="James" lname="Helms" picture={jamesh} type="judge"company="Intuit" link="https://www.linkedin.com/in/jameshelmsad/"/>*/}
            <ExpertCard fname="Julia" lname="Kemp" picture={juliak} type="judge" company="Pauli Mer" link="https://www.linkedin.com/in/juliakemp/"/>
            <ExpertCard fname="India" lname="Hayes" picture={indiah} type="judge" company="Mini City" link="https://www.linkedin.com/in/india-hayes-8350a623/"/>
            <ExpertCard fname="Alana" lname="Washington" picture={alanaw} type="judge" company="Uber" link="https://www.linkedin.com/in/alanawashington/"/>
            <ExpertCard fname="Gordon" lname="Lawson" picture={gordonl} type="judge" company="Rangeforce" link="https://www.linkedin.com/in/gordon-lawson-58679710/"/>
            <ExpertCard fname="Jessica" lname="Belfry" picture={jessicab} type="judge" company="SCORE" link="https://www.linkedin.com/in/jessica-belfry-462b0b17/"/>
            <ExpertCard fname="Ned" lname="Duffy" picture={nedd} type="judge" company="SCORE" link="https://savannah.score.org/mentors/ned-duffy"/>
            <ExpertCard fname="Joey" lname="Womack" picture={joeyw} type="judge" company="Goodie Nation" link="https://www.linkedin.com/in/joeywomack/"/>
            <ExpertCard fname="Kris" lname="Perpich" picture={krisp} type="judge" company="Adonit" link="https://www.linkedin.com/in/krisperpich/"/>
            <ExpertCard fname="Grant" lname="Perry" picture={grantp} type="judge" company="Dimensional Design, INC" link="https://www.linkedin.com/in/grantperry/"/>
            <ExpertCard fname="Ugwem I." lname="Eneyo" picture={ugweme} type="judge" company="SHYFT Power Solutions" link="https://www.linkedin.com/in/ugwem-i-eneyo-24b14aba/"/>
        </div>
      </div>
      <div className="experts-mentorSection container">
        <h2>Our Helpful<br /><span>Mentors</span></h2>
        <div className="experts-mentorCardGrid">
            <ExpertCard fname="Abi" lname="Lierheimer" picture={abil} company="Bobblehaus" link="https://www.linkedin.com/in/abilierheimer/"/>
            <ExpertCard fname="Aditi" lname="Vyas" picture={aditiv} company="Clear" link="https://www.linkedin.com/in/vyasaditi/"/>
            <ExpertCard fname="Larry" lname="Rubin" picture={larryr} company="Thnks" link="https://www.linkedin.com/in/larry-rubin-57577712/"/>
            <ExpertCard fname="Dane" lname="Galbraith" picture={dane} company="Google" link="https://www.linkedin.com/in/danegalbraith/"/>
            <ExpertCard fname="Erica" lname="Cardenas" picture={ericac} company="Consultant" link="https://www.linkedin.com/in/ericamcardenas/"/>
            <ExpertCard fname="Jagriti" lname="Kumar" picture={jagritik} company="Microsoft" link="https://www.linkedin.com/in/kumarjagriti/"/>
            <ExpertCard fname="Jenny" lname="Lanier" picture={jennyl} company="IBM" link="https://www.linkedin.com/in/jennylanier/"/>
            <ExpertCard fname="Theo" lname="Tyson" picture={theot} company="Boston Athenæum" link="https://www.linkedin.com/in/theotyson/"/>
            <ExpertCard fname="Ben" lname="Landrum" picture={benl} company="IBM" link="https://www.linkedin.com/in/benlandrum1/"/>
            <ExpertCard fname="Joe" lname="Kennedy" picture={joek} company="Apex" link="https://www.linkedin.com/in/joekndy/"/>
            <ExpertCard fname="Mitzi" lname="Okou" picture={mitzio} company="Spotify" link="https://www.linkedin.com/in/mitzi-okou-30918b144/"/>
            <ExpertCard fname="Nick" lname="Pellegrino" picture={nickp} company="Google" link="https://www.linkedin.com/in/nicolas-pellegrino-20b74914a/"/>
            <ExpertCard fname="Nolan" lname="Canady" picture={nolanc} company="IBM" link="https://www.linkedin.com/in/nolan-canady/"/>
            <ExpertCard fname="Patricia" lname="Bell" picture={patb} company="SCAD" link="https://www.linkedin.com/in/tobeanova/"/>
            <ExpertCard fname="Allan" lname="Holmes" picture={allanh} company="Liist" link="https://www.linkedin.com/in/allanholmes/"/>
            <ExpertCard fname="Brian" lname="Ahmes" picture={briana} company="Parafin" link="https://www.linkedin.com/in/brian-ahmes/"/>
            <ExpertCard fname="Gonzo" lname="Gelso" picture={gonzo} company="Founder" link="https://www.linkedin.com/in/gonzalogelso"/>
            <ExpertCard fname="Ivan" lname="Reyes" picture={ivanr} company="SAP Digital Factory" link="https://www.linkedin.com/in/ivanreyes/"/>
            <ExpertCard fname="Jamieson" lname="Parker" picture={jamiesonp} company="Upscale Threads" link="https://www.linkedin.com/in/jamieson-parker-7a984521/"/>
            <ExpertCard fname="Jody" lname="Buelterman" picture={jodyb} company="SCAD" link="https://www.linkedin.com/in/jodybuelterman/"/>
            <ExpertCard fname="Danielle" lname="Torres" picture={daniellet} company="Google" link="https://www.linkedin.com/in/dtorrvis/"/>
            <ExpertCard fname="Joshua" lname="Crafford" picture={joshuac} company="Synchrony" link="https://www.linkedin.com/in/joshua-crafford-ab88349/"/>
            <ExpertCard fname="Eliška" lname="Skarolková" picture={eliskas} company="IdeaSense" link="https://www.linkedin.com/in/eliskaskarolkova/"/>
            <ExpertCard fname="Paul" lname="Lafata" picture={paull} company="Lab1886 USA" link="https://www.linkedin.com/in/palafata/"/>
            <ExpertCard fname="Quintin" lname="Williams" picture={quintinw} company="Q4 Sports" link="https://www.linkedin.com/in/qdesignsfootwear/"/>
            <ExpertCard fname="Victor" lname="Ermoli" picture={victor} company="SCAD" link="https://www.linkedin.com/in/victor-ermoli-6027b1/"/>
            <ExpertCard fname="Hanna" lname="Toler" picture={hannat} company="Deloitte Digital" link="https://www.linkedin.com/in/hannatoler/"/>
            {/* <ExpertCard fname="Susan" lname="Dove" picture={SampleImage} company=""/> */}
            <ExpertCard fname="Daniel" lname="Grein" picture={danielgrein} company="BMW" link="https://www.linkedin.com/in/danielgrein/"/>
            <ExpertCard fname="Jessica" lname="Wheeler" picture={jessicaw} company="Fifth Third Bank" link="https://www.linkedin.com/in/jessicaawheeler/"/>
            {/* <ExpertCard fname="Joel" lname="Dixon" picture={joeld} company="EnrichHER" link=""/> */}
            <ExpertCard fname="Beth" lname="Godfrey" picture={bethg} company="Google" link="https://www.linkedin.com/in/bethgodfrey/"/>
            <ExpertCard fname="Alan" lname="Liu" picture={alanl} company="EY" link="https://www.linkedin.com/in/alan-liu-mfa-189b5b109/"/>
            <ExpertCard fname="Galyn" lname="Bunnell" picture={galynb} company="Amazon" link="https://www.linkedin.com/in/galynbunnell/"/>
            <ExpertCard fname="Austin" lname="Webster" picture={austinw} company="Deepr" link="https://www.linkedin.com/in/austinwebster/"/>
            <ExpertCard fname="Drura" lname="Parrish" picture={drurap} company="RSLP" link="https://www.linkedin.com/in/drura-parrish-b7b5bb52/"/>
            <ExpertCard fname="Eleanor" lname="Turner" picture={eleanort} company="The Big Favorite" link="https://www.linkedin.com/in/eleanor-turner/"/>
            <ExpertCard fname="Jaylon" lname="Smith" picture={jaylons} company="RIISE" link="https://www.linkedin.com/in/jaylonsmith/"/>
            <ExpertCard fname="Eric" lname="Shumate" picture={erics} company="SCAD" link="https://www.linkedin.com/in/eric-shumate-6a72b02/"/>
            <ExpertCard fname="Lauren" lname="Demarest" picture={laurend} company="Sweat Vacay" link="https://www.linkedin.com/in/lauren-demarest-9363b71a/"/>
            <ExpertCard fname="Mfon" lname="Akpan" picture={mfona} company="SCAD" link="https://www.linkedin.com/in/mfon-akpan-5702325/"/>
            <ExpertCard fname="Beverly" lname="Barnes" picture={beverlyb} company="Sweat Vacay" link="https://www.linkedin.com/in/beverley-barnes-9a1a7415/"/>
            <ExpertCard fname="Angela" lname="Martin" picture={angelam} company="Lenovo" link="https://www.linkedin.com/in/angelamartin98/"/>
            <ExpertCard fname="Allan" lname="Meade, Jr." picture={allanm} company="SCAD" link="https://www.linkedin.com/in/allanmeade/"/>
            <ExpertCard fname="Dwayne" lname="Stephens" picture={dwaynes} company="LiFO Corp" link="https://www.linkedin.com/in/dwayne-stephens-0a924a7a/"/>
            <ExpertCard fname="Stacey" lname="Roach" picture={staceyr} company="Inventure" link="https://www.linkedin.com/in/staceyroach/"/>
            <ExpertCard fname="Daniel Van" lname="Geffen" picture={danielgeffen} company="Creative Circle" link="https://www.linkedin.com/in/daniel-van-geffen/"/>
            <ExpertCard fname="Clark" lname="Delashmet" picture={clark} company="SCAD" link="https://www.linkedin.com/in/clark-delashmet-745590156/"/>
            <ExpertCard fname="Cliff" lname="Curry" picture={cliffc} company="YouTube" link="https://www.linkedin.com/in/cliffcurry/"/>
            <ExpertCard fname="Darrell" lname="Thompson" picture={darrellt} company="Deepr" link="https://www.linkedin.com/in/darrell-thompson-b6687613b/"/>
            <ExpertCard fname="Devin" lname="O'Bryan" picture={devino} company="IBM" link="https://www.linkedin.com/in/devinobryan/"/>
            <ExpertCard fname="Joseph" lname="Willet" picture={josephw} company="Edgewood Ave." link="https://www.linkedin.com/in/josephwillet/"/>
            <ExpertCard fname="Marialexandra" lname="Garcia" picture={marial} company="Outplay" link="https://www.linkedin.com/in/marialexandra/"/>
            <ExpertCard fname="Simon" lname="Chamorro" picture={simonc} company="Valiu (YC19)" link="https://www.linkedin.com/in/simonchamorro/"/>
            <ExpertCard fname="Jay" lname="Jackson" picture={jayj} company="RYSE" link="https://www.linkedin.com/in/jayjacksoninc/"/>
        </div>
      </div>
    </Page>
  );
};

export default ExpertsPage;
