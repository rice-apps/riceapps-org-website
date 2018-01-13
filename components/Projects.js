// styles
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';

// animate
import Anime from 'react-anime';

const Example = (props) => {
  return (
    <div>
      <CardColumns className="portfolio">
        <Anime>
          <Card body inverse style={{ backgroundColor: 'rgba(85, 85, 85, 0.25)', borderColor: '#333' }}>
            <CardBody>
              <CardTitle>Owlections</CardTitle>
              <CardText>Rice Elections is a simple, secure, and transparent way for student organizations to hold online elections.</CardText>
              <Button style={{ backgroundColor: 'rgba(173, 209, 197, 0.7)'}}>visit</Button>
            </CardBody>
          </Card>
        </Anime>
        <Card body inverse style={{ backgroundColor: 'rgba(85, 85, 85, 0.25)', borderColor: '#333' }}>
          <CardBody>
            <CardTitle>Roommate Finder</CardTitle>
            <CardText>Need help finding a roommate? The Roommate Finder app connects Rice students looking for a roommate to live with either on or off campus.</CardText>
            <Button style={{ backgroundColor: 'rgba(173, 209, 197, 0.7)'}}>visit</Button>
          </CardBody>
        </Card>
        <Card body inverse style={{ backgroundColor: 'rgba(85, 85, 85, 0.25)', borderColor: '#333' }}>
          <CardBody>
            <CardTitle>Petition</CardTitle>
            <CardText>The Petition App provides Rice students with a simple and secure platform to let their voices be heard.</CardText>
            <Button style={{ backgroundColor: 'rgba(85, 85, 85, 0.25)'}}>in progress</Button>
          </CardBody>
        </Card>
        <Card body inverse style={{ backgroundColor: 'rgba(85, 85, 85, 0.25)', borderColor: '#333' }}>
          <CardBody>
            <CardTitle>Rice Atlas</CardTitle>
            <CardText>The Rice Atlas app is an interactive and user-friendly way to locate any building on the Rice campus.</CardText>
            <Button style={{ backgroundColor: 'rgba(173, 209, 197, 0.7)'}}>visit</Button>
          </CardBody>
        </Card>
        <Card body inverse style={{ backgroundColor: 'rgba(85, 85, 85, 0.25)', borderColor: '#333' }}>
          <CardBody>
            <CardTitle>Rice Bikes</CardTitle>
            <CardText>The Rice Bikes App is a user-friendly way for employees of Rice Bikes, the student-run bike shop, to manage their business.</CardText>
            <Button style={{ backgroundColor: 'rgba(173, 209, 197, 0.7)'}}>visit</Button>
          </CardBody>
        </Card>
        <Card body inverse style={{ backgroundColor: 'rgba(85, 85, 85, 0.25)', borderColor: '#333' }}>
          <CardBody>
            <CardTitle>Schedule Planner</CardTitle>
            <CardText>The Scheduleplanner app pulls Rice University courses to help students plan their course schedule for the upcoming semester.</CardText>
            <Button style={{ backgroundColor: 'rgba(173, 209, 197, 0.7)'}}>visit</Button>
          </CardBody>
        </Card>
        <Card body inverse style={{ backgroundColor: 'rgba(85, 85, 85, 0.25)', borderColor: '#333' }}>
          <CardBody>
            <CardTitle>Carpool</CardTitle>
            <CardText>A web app designed to help Rice students stranded at the airport at the end of holidays to find other returning students and share a cab or SuperShuttle back to campus.</CardText>
            <Button style={{ backgroundColor: 'rgba(85, 85, 85, 0.25)'}}>in progress</Button>
          </CardBody>
        </Card>
      </CardColumns>
      <style jsx global>{`
        .portfolio {
          margin-top: 5em;
        }
      `}
      </style>
    </div>
  );
};

export default Example;
