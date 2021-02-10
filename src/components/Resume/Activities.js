import React from 'react';
import PropTypes from 'prop-types';

import Activity from './Experience/Activity';

const Activities = ({ data }) => (
  <div className="Activities">
    <div className="link-to" id="activities" />
    <div className="title">
      <h3>Activities</h3>
    </div>
    {data.map((activity) => (
      <Activity
        data={activity}
        key={activity.company}
      />
    ))}
  </div>
);

Activities.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Activities.defaultProps = {
  data: [],
};

export default Activities;
