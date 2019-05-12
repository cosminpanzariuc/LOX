/**
 * Created by Cosmin on 12-05-2019.
 */
import React from 'react';

const Spinner = (props) => {
  return (
      <div className="ui active dimmer">
          <div className="ui big text loader">
              {props.message}
          </div>
      </div>
  );
};


Spinner.defaultProps = {
    message: 'Loading...'
};
export default Spinner;