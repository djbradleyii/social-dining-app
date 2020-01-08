import React from 'react';
import { withRouter } from 'react-router-dom';
import './LandingPage.css';

function LangingPage(props) {
  return (
    <section className="landing-page">
      <p>The Social Dining App is where you can plan events to eat delicious food and mingle with like-minded individuals.  After you have created an account, you can begin your journey to expanding your social network.</p>

      <p>As a User, you have access to the following features:</p>

      <p>
        <b>Create Events</b>
        {' '}
- You will have the power to schedule an upcoming event on the date and at the time you desired. The purpose of the event can be Social, Networking, Singles Night, or Game Night.
      </p>

      <p>
        <b>View Events</b>
        {' '}
- Navigate to the search page to search for upcoming events. Once you have located one you want to attend, click the name to see the event details. You can then check out to Restaurant and RSVP to the event.
      </p>

      <p>
        <b>Manage your Events</b>
        {' '}
- After creating, viewing, and RSVPing to events, you can return to your Dashboard to see all of your upcoming events. Here you can cancel an event you created, remove yourself from the RSVP list or edit your information.
      </p>

      <p>The goal is to have fun, meet interesting people, and eat delicious food.</p>

      <p>Enjoy!</p>
    </section>
  );
}

export default withRouter(LangingPage);
