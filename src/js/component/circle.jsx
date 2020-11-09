import React from "react";
import PropTypes from "prop-types";

export const Circle = props => {
	return <div className={props.classContent} onClick={props.eventChange} />;
};

Circle.propTypes = {
	classContent: PropTypes.string,
	eventChange: PropTypes.string
};
