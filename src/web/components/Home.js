import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

const About = () => (
  <div>
    <Row>
      <Jumbotron className="bg-primary text-white">
        <h1>
          MC2 Serverless Client Stack - React Web + Native
        </h1>
        <p className="lead">
          Veggies es bonus vobis, proinde vos postulo essum magis
        </p>
        <p>
        Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens 
        dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini. Turnip greens yarrow ricebean rutabaga 
        endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. 
        </p>
      </Jumbotron>
    </Row>
    <Row className="pt-5">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-map" />
          {' '}
          Routing
        </h3>
        <p>
          React Router is used to handle all web-side routing.
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/ReactTraining/react-router" className="btn btn-primary">
            React Router Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-fire" />
          {' '}
          Firebase
        </h3>
        <p>
          Basic Firebase is all ready to go.
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/database/web/start" className="btn btn-primary">
            Firebase Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-organization" />
          {' '}
          Mobx
        </h3>
        <p>
          State management the clean way.
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://mobx.js.org/" className="btn btn-primary">
            Mobx Docs
          </a>
        </p>
      </Col>
    </Row>
    <Row className="pt-md-5 pb-5">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-layers" />
          {' '}
          Mobx Dev tools
        </h3>
        <p>
          Dev tools for Mobx
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/mobxjs/mobx-react-devtools" className="btn btn-primary">
            Mobx Devtools Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-drop" />
          {' '}
          Web Styles
        </h3>
        <p>
          Webpack, SCSS, Bootstrap and ReactStrap for getting started.
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://reactstrap.github.io/components/alerts/" className="btn btn-primary">
            ReactStrap Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-user-following" />
          {' '}
          Auth
        </h3>
        <p>
          Ready to go with Firebase authentication
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/auth/" className="btn btn-primary">
            Firebase Auth Docs
          </a>
        </p>
      </Col>
    </Row>
  </div>
);

export default About;
