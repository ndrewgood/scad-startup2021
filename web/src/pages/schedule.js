import React from "react";
import {Link, graphql, useStaticQuery} from 'gatsby';
import Page from "../templates/page";

import Hero from '../components/hero'
import ResourceCardGrid from '../components/resource-card-grid'
import ResourceCard from '../components/resource-card'

import "../styles/schedule.scss"

const ScheduleCard = ({span, bg, type, title, rsvp, date, description, attendance, imagePosition, image}) => {
  return (
    <ResourceCard span={span} bg={bg} type={imagePosition ? "schedule-flipped" : "schedule"}>
        <div className="schedule-card-content">
          <div>
            <h3 className="schedule-card-date">{date}</h3>
            <h2 className="schedule-card-title">{title}</h2>
            <div className="schedule-card-body">
              <p className="schedule-card-description">{description}</p>
              {attendance ? (<p className="schedule-card-attendance">{"* " + attendance} </p>) : null}
            </div>
          </div>
          { 
            image ? (
              <div className="schedule-card-imageMobile">
                <img src={image.imageMobile.asset.url} alt=""/>
              </div>
            ) : null
          }
          {
            rsvp ?
            <p className="schedule-card-timeLink timeLinkUpdated">{rsvp}</p> 
            :
            <p className="schedule-card-timeLink">Time & meeting link will be announced soon!</p> 
          }
        </div>
        { 
          image ? (
            <div className="schedule-card-imageWeb">
              <img src={image.imageWeb.asset.url} alt=""/>
            </div>
          ) : null
        }
    </ResourceCard>
  );
};

const Schedule = (props) => {
  const data = useStaticQuery(graphql`
    query scheduleQuery{
      allSanitySchedule(sort: {fields: order, order: ASC}) {
        edges {
          node {
            _id
            background
            linkShown
            link
            title
            size
            time
            rsvp
            description
            requiredAttendance
            image {
              imageMobile {
                asset {
                  url
                }
              }
              imageWeb {
                asset {
                  url
                }
              }
            }
            imagePosition
          }
        }
      }
    }
  `)

  const scheduleArray = data.allSanitySchedule.edges;
  //console.log(scheduleArray)

  return (
    <Page>
      <Hero 
        smallHeader={"Event Schedule"} 
        bigHeader={["What to", <br key="ugh"/>,  "Expect"]}
      />
      <div className="container">
        <ResourceCardGrid>
          {
            scheduleArray.map((edge) => (
              <ScheduleCard
                key={edge.node._id} 
                span={edge.node.size}
                bg={edge.node.background ? "gradient" : null}
                title={edge.node.title}
                date={edge.node.time}
                rsvp={edge.node.rsvp}
                description={edge.node.description}
                attendance={edge.node.requiredAttendance}
                image={edge.node.image}
                imagePosition={edge.node.imagePosition}
              />
            ))
          }
        </ResourceCardGrid>
      </div>
    </Page>
  );
};

export default Schedule;
