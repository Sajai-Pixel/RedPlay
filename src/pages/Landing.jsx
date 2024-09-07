import React from 'react'
import { Col, Row } from 'react-bootstrap'
import gif from '../assets/giphy.gif'
import { Link } from 'react-router-dom'
import img1 from '../assets/feature1.jpg'
import img2 from '../assets/feature2.jpg'
import img3 from '../assets/feature3.jpg'
import img4 from '../assets/feature4.jpg'


function Landing() {
  return (
    <div style={{ marginTop: "100px" }} className='container'>
      <Row className='align-items-center'>
        <Col sm={true}>
          <h1>welcome to <span style={{ color: 'red' }}>redplay</span></h1>
          <p>REDPLAY App will allow user to add or remove their uploaded videos from YouTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'}><button type="button" className="btn btn-primary btn-sm">Get Started</button></Link>
        </Col>
        <Col sm={2} />
        <Col sm={true}>
          <img src={gif} alt="" className='img-fluid' />
        </Col>
      </Row>

      <Row className='my-5'>
        <Col><h1 className="text-center">Features</h1></Col>
        <Row className='mt-4'>
          <Col sm={3}>
            <div className="card mb-3">
              <h4 className="card-header text-center">Video Management</h4>
              <img className='p-2' src={img1} alt="" />
              <div className="card-body">
                <p className="card-text">Upload, remove, and organize your YouTube videos easily with our intuitive drag-and-drop interface.</p>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div className="card mb-3">
              <h4 className="card-header text-center">Categorization</h4>
              <img className='p-2' src={img2} alt="" />
              <div className="card-body">
                <p className="card-text">Effortlessly categorize your videos by themes or topics, ensuring a seamless browsing experience.</p>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div className="card mb-3">
              <h4 className="card-header text-center">Watch History</h4>
              <img className='p-2' src={img3} alt="" />
              <div className="card-body">
                <p className="card-text">Keep track of your viewing habits with easy access to and management of your watch history.</p>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div className="card mb-3">
              <h4 className="card-header text-center">User-Friendly</h4>
              <img className='p-2' src={img4} alt="" />
              <div className="card-body">
                <p className="card-text">Explore a clean, responsive design that simplifies video organization and enhances your overall experience.</p>
              </div>
            </div>
          </Col>

        </Row>
      </Row>

      <Row className='p-3 bg-primary'>
        <Col sm={6} className='card'>
          <h3 className='text-center my-3'>Simple, Fast and Powerful</h3>
          <h5>Simple Navigation</h5>
          <p>Navigate through your video library with ease, thanks to our straightforward and intuitive interface.</p>
          <h5>Fast Performance</h5>
          <p>Enjoy lightning-fast loading times and smooth transitions, ensuring a seamless video management experience.</p>
          <h5>Powerful Customization</h5>
          <p>Tailor your video categories and playlists with powerful tools designed for maximum control and flexibility.</p>
        </Col>
        <Col sm={6} className='d-flex justify-content-center align-items-center" style="height: 100%;"'>
          <iframe width="615" height="350" src="https://www.youtube.com/embed/3wDiqlTNlfQ"></iframe>
        </Col>
      </Row>

    </div>
  )
}

export default Landing
