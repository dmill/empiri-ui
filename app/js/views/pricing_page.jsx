import React, { Component } from 'react'
import { Link } from 'react-router'

const PricingPage = () => {
  return(
    <div className="pricing-page">
      <div className="container">
        <h2>Start Publishing Today</h2>
        <h1>Pick your membership</h1>
        <div className="row">
            <div className="box">
              <div className="header">
                <div className="title">Single Publication</div>
                <span className="price">$299/ea</span>
                <ul>
                  <li>Publish Instantly</li>
                  <li>Revise Indefinitely</li>
                  <li>Receive Unlimited Peer Reviews</li>
                </ul>
                <button id="customButton">Publish Now</button>
              </div>
            </div>
            <div className="box">
              <div className="header">
                <div className="title">Individual Membership</div>
                <span className="price">$240/mo</span>
                <ul>
                  <li>Unlimited Publications</li>
                  <li>Give and Receive Peer Reviews</li>
                  <li>Invite collaborators to contribute to your papers</li>
                </ul>
                <Link to="/membership"><button>Apply for Membership</button></Link>
                <div>All members must first undergo a screening process to ensure their credibility in the scientific community.  The process is usually completed within 24 hours and membership is granted immediatly thereafter.  Your card will not be charged until you pass the screening process.</div>
              </div>
            </div>
            <div className="box">
              <div className="header">
                <div className="title">Group Membership</div>
                <span className="price">$2000/mo</span>
                <ul>
                  <li>Great for labs and teams</li>
                  <li>Support up to 10 members</li>
                  <li>Additional $99/mo per member after first 10</li>
                </ul>
                <Link to="/membership"><button>Apply for Membership</button></Link>
                <div>All members must first undergo a screening process to ensure their credibility in the scientific community.  The process is usually completed within 24 hours and membership is granted immediatly thereafter.  Your card will not be charged until you pass the screening process.</div>
              </div>
            </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <h1>Frequently Asked Questions</h1>
            <ul>
              <li>Why do we charge for this service?</li>
              <li>It is important for us to be a profitable company so that we can continue to provide the best service to our customers as well as treat our hard-working employees with respect and fair compensation for their talents</li>
              <li>Are you non-profit?</li>
              <li>Empiri is a for profit company. We have chosen profit-making as a competitive advantage over other non-profits that have failed at solving the problems with academic publishing. We use the profits we make to improve our product and company.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage
