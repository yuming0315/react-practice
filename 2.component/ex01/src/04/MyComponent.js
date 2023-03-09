import React, { Fragment } from "react";
import { PropTypes } from "prop-types";

function MyComponent({
  props01,
  props02,
  props03,
  props04,
  props05,
  props06,
  props07,
  props08,
  props09,
}) {
  return (
    <Fragment>
      <h2>Property Validation</h2>

      <span>props01: {props01 ? props01 : "--- not set ---"}</span>
      <br />

      <span>props02: {props02 ? props02 : "--- not set ---"}</span>
      <br />

      <span>props03: {props03 ? `${props03}` : "--- not set ---"}</span>
      <br />
      {
        // true의 경우 화면에 찍어내지 않음 템플릿 리터럴 써줘야함 이럴땐
      }
      <span>props04: {props04 ? props04.name : "--- not set ---"}</span>
      <br />
      <span>
        props05:{" "}
        {props05.map((e, idx) => (
          <b key={idx}>{e}</b>
        ))}
      </span>
      <br />
      <span>props06: {props06 ? props06() : "--- not set ---"}</span>
      <br />
      <span>props07: {props07 ? props07 : "--- not set ---"}</span>
      <br />
      <span>
        props08:{" "}
        {props08.map((e, idx) => (
          <b key={idx}>{`${e}`}</b>
        ))}
      </span>
      <br />

      <span>
        props09: {props09 ? JSON.stringify(props09) : "--- not set ---"}
      </span>
    </Fragment>
  );
}

// property type and required
MyComponent.propTypes = {
  // JavaScript Data Type
  props01: PropTypes.string,
  props02: PropTypes.number.isRequired,
  props03: PropTypes.bool.isRequired,
  props04: PropTypes.object.isRequired,
  props05: PropTypes.array.isRequired,
  props06: PropTypes.func.isRequired,

  // Combined with JavaScript Data Type
  props07: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  props08: PropTypes.arrayOf(PropTypes.bool).isRequired,
  props09: PropTypes.shape({
    no: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

// property default value
MyComponent.defaultProps = {
  props01: "기본값",
  props02: 10,
  props03: false,
  props04: {},
  props05: [],
  props06: () => {}, // dummy function
};

export default MyComponent;
