/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { observer } from 'mobx-react';
import Panel from '../ui/panel/Panel';
import Button from '../ui/button/Button';
import TextArea from '../ui/inputs/TextArea';

import './JsonPaste.scss';

class JsonPaste extends React.Component {
  render() {
    return (
      <Panel
        show={this.props.show}
        onClickHideHandler={this.props.onClickHideHandler}
      >
        <div className="json-paste">

          <div className="paste-area">
            <TextArea onChange={this.props.onChangeJSONPasteHandler} value={this.props.value} />
          </div>

          <div className="json-controls">
            <Button cls="def standard json-copy" text="Load" onClick={this.props.onClickJSONPasteHandler}>
              <i className="material-icons">add</i>
            </Button>
          </div>
        </div>
      </Panel>
    );
  }
} export default (observer(JsonPaste));
