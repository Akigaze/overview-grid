import React, { Component, Fragment } from "react";
import { isEmpty } from "lodash";
import "../style/App.css";

const Indent = props => {
  return <div style={{ display: "inline-block", width: `${props.width}px` }} />;
};

const InfoItem = props => {
  let { title, info, infoLink, isIndent } = props;
  return (
    <Fragment>
      <div className="title">
        {isIndent && <Indent width="20" />}
        <span>{title}</span>
        {info.map(content => <br/>)}
      </div>
      <div className="info">
        {info.map(content => {
          return (
            <span className={infoLink ? "link" : "normal"}>
              {content}
              <br />
            </span>
          );
        })}
      </div>
    </Fragment>
  );
};

export default class OverviewGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {this.props.data.map(item => {
          let { title, info, subInfo, infoLink } = item;
          return (
            <div>
              <InfoItem title={title} info={info} infoLink={infoLink} />
              <br />
              <div>
                {!isEmpty(subInfo) &&
                  subInfo.map(subItem => {
                    let { title, info, infoLink } = subItem;
                    return (
                      <InfoItem
                        title={title}
                        info={info}
                        infoLink={infoLink}
                        isIndent={true}
                      />
                    );
                  })}
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}
