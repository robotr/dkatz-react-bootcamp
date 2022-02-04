import React, { Component } from 'react';

import SOCIAL_PROFILES from './data/socialProfiles.js';

class SocialProfile extends Component {
  render() {
    const { title, icon, link } = this.props.profile;
    return(
      <span className='social-profile'>
        <a title={title} href={link} target='_blank' rel='noreferrer'>
          <img src={icon} alt={title} />
        </a>
      </span>
    );
  }
}

class SocialProfiles extends Component {
  render() {
    return(
      <section>
        <h2>Get in contact!</h2>
        {
          SOCIAL_PROFILES.map(pr => {
            return (
              <SocialProfile key={pr.id} profile={pr} />
            );
        })}
      </section>
    );
  }
}

export default SocialProfiles;