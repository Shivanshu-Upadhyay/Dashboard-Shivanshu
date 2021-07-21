import React from "react";
import { connect } from "react-redux";

function PointingError(props) {
  const renderError = (input, meta) => {
    // console.log(input, meta);
    if (meta.touched && meta.error)
      return <div className="ui pointing red basic label">{meta.error}</div>;
    else if (props.errors && props.errors[input.name])
      return (
        <div className="ui pointing red basic label">
          {props.errors[input.name]}
        </div>
      );

    return undefined;
  };

  return <div>{renderError(props.input, props.meta)}</div>;
}

const mapStateToProps = (state) => {
  return { errors: state.errors };
};

export default connect(mapStateToProps)(PointingError);
