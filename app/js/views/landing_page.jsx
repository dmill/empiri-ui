import React, { Component } from 'react'
import { Link } from 'react-router'

export default class LandingPage extends Component {
  showSignup() {
    this.props.route.lock.showSignup({
      icon: 'https://s3-us-west-1.amazonaws.com/www.empiri.co/images/symbol.png',
      socialBigButtons: true,
      authParams: {
        scope: 'openid email given_name family_name picture'
      },
      dict: {
        signup: {
          title: 'Join the Beta'
        }
      }
    })
  }

  render() {
    return (
      <div id="landing-page">
        <section className="gradient" id="intro">
          <div className="container">
            <img src="/buid/images/symbol.png" />
            <h1 className="heading">Empiri</h1>
            <h2>Open Science Publishing Platform</h2>
            <h2>Transparent, Merit-Based, and Empirical</h2>
            <button onClick={this.showSignup.bind(this)}>Help US Test the Beta</button>
          </div>
        </section>

        <section className="grey" id="features">
          <div className="container">
            <h2>A publishing process that supports Open Science</h2>
            <div className="row">
              <div className="four columns">
                <i className="material-icons">web</i>
                <h3>Instantaneous Publishing</h3>
              </div>
              <div className="four columns">
                <i className="material-icons">loop</i>
                <h3>Indefinite Versioning</h3>
              </div>
              <div className="four columns">
                <i className="material-icons">feedback</i>
                <h3>Open Peer Reviews</h3>
              </div>
            </div>

            <div className="row">
              <div className="four columns">
                <p>With Empiri&#39;s iterative publishing platform you can publish your results as fast as you can generate them. The moment you submit your work it becomes available for the public to read and your peers to review. You can add new supporting research or discussion to your paper at any time and respond to reviewer requests for revision immediately.</p>
              </div>

              <div className="four columns">
                <p>Empiri employs a versioning system that allows readers to see the full history of a line of research. Authors are able to publish experiments frequently by submitting small changes for peer review as new versions of an original publication. Research does not happen in discrete blocks, it happens on a continuum, and we believe that the publishing process should reflect this reality.</p>
              </div>

              <div className="four columns">
                <p>Public peer reviews with identifiable authors are at the core of our open science philosophy. On Empiri, you know who your reviewers are, and publications are open for review in perpetuity. This reduces bias, encourages discussion, and dramtically increases the sample size of peer reviews to produce a true community consensus on a publication&#39;s validity.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="gradient" id="info">
          <div className="container">
            <div className="row">
              <div className="six columns">
                <h1>Focus on your research rather than bureaucracy</h1>

                <p>We are passionate about providing a transparent, community-driven
                publishing model that makes distributing information seamless and
                inexpensive. We believe that your work should be judged on its merits
                in an open forum - not by anonymous reviewers or unilateral editorial
                decisions. For more detailed information on how this works, check out
                our <Link to="/faq" className="white-link">FAQ</Link>.</p>

                <button><Link to="/faq" className="white-link">Read FAQ</Link></button>
              </div>

              <div className="six columns">
                <img src="/build/images/mock.png" />
              </div>
            </div>
          </div>
        </section>

        <section className="grey">
          <div className="container">
            <div className="row">
                <h1>Meet the Founders</h1>
                <div className="profile">
                  <h2>Doug Mill</h2>
                  <h6><a className="white-link" href="mailto:doug@empiri.co">doug@empiri.co</a></h6>
                  <a target="_blank" href="https://www.linkedin.com/in/doug-mill-b5643249">
                    <img src="/build/images/doug-circle.png" width="250" />
                  </a>
                </div>
                <div className="profile">
                  <h2>Andrew Wong</h2>
                  <h6><a className="white-link" href="mailto:andrew@empiri.co">andrew@empiri.co</a></h6>
                  <a target="_blank" href="https://www.linkedin.com/in/arwong09">
                    <img src="/build/images/andrew-circle.png" width="250" />
                  </a>
                </div>

                <p>
                  We left our jobs in software development to create this company for one reason - to transform scientific publishing. Before our software careers, we both worked in science and experienced the inertia and politics involved in the publishing process first-hand. Finally, in mid-2015 we started Empiri as our solution to offer a transparent, collaborative, and fast-paced alternative.
                </p>
            </div>
          </div>
        </section>

        <section className="white" id="form">
          <div className="container">
            <h1>We Need Your Help!</h1>
            <p>Empiri is currently in the beta testing phase.  This means the majority of the software development has been done, and we need <em>your</em> feedback to tell us what more you would like to see from the publishing system.</p>
            <p>We believe science should be open, transparent, and community-driven.  Likewise we run Empiri the same way.  We value each and every one of your inputs and we will personally respond to any feedback you have on how this platform can best serve Open Science.</p>
            <button onClick={this.showSignup.bind(this)}>Help Us test the beta</button>
          </div>
        </section>

        <section className="gradient" id="contact">
          <div className="container">
            <div className="row">
              <div className="twelve columns">
                <h1>Contact Us</h1>
                <br />
                <br />
                <p>Our mission at Empiri is to create a platform that empowers the scientific community to publish painlessly and collaborate openly. Our company is in its infancy, and we need your help in order to make this dream a reality. If you have feedback, questions, or ideas for how we can improve your experience we would love to hear from you. Shoot one of us an email, and we&#39;ll get back to you as soon as possible:</p>
                <p><a className="white-link" href="mailto:doug@empiri.co">doug@empiri.co</a> or <a className="white-link" href="mailto:andrew@empiri.co">andrew@empiri.co</a></p>

              </div>
            </div>
            <image className="footer" src="/build/images/symbol.png" />
          </div>
        </section>
      </div>
    )
  }
}
