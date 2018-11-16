import React, { Component, Fragment } from "react";
import { isEmpty, isEqual } from "lodash";
import "../style/App.css";

const Indent = props => {
  return (
    <div
      style={{
        display: "inline-block",
        width: `${props.width}px`
      }}
    />
  );
};

const InfoItem = props => {
  let {
    title,
    info,
    infoLink,
    titleIndent,
    titleUpper,
    infoUpper,
    infoClick
  } = props;
  title = titleUpper ? title.toUpperCase() : title;
  info = infoUpper ? info.toUpperCase() : info;
  return (
    <div>
      <div className="title">
        {titleIndent && <Indent width="16" />}
        <span>{title}</span>
      </div>
      <div className="info">
        {infoLink && infoClick ? (
          <span
            className={infoLink ? "link" : "normal"}
            onClick={() => {
              infoClick(info);
            }}
          >
            {info}
          </span>
        ) : (
          <span className={infoLink ? "link" : "normal"}>{info}</span>
        )}
      </div>
    </div>
  );
};

export default class OverviewGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let preTitle = "";
    let {
      overviewInfo,
      titleUpper,
      infoUpper,
      subInfoUpper,
      linkClick
    } = this.props;
    return (
      <Fragment>
        {overviewInfo.map((item, index) => {
          let { title, info, subInfo, infoLink } = item;
          return (
            <div key={`info-${index}`}>
              <InfoItem
                title={title}
                info={info}
                infoLink={infoLink}
                titleUpper={titleUpper}
                infoUpper={infoUpper}
                infoClick={linkClick}
              />
              {!isEmpty(subInfo) &&
                subInfo.map((subItem, index) => {
                  let { title, info, infoLink } = subItem;
                  isEqual(preTitle, title) ? (title = "") : (preTitle = title);
                  return (
                    <InfoItem
                      key={`subInfo-${index}`}
                      title={title}
                      info={info}
                      infoLink={infoLink}
                      titleIndent={true}
                      titleUpper={titleUpper}
                      infoUpper={subInfoUpper}
                      infoClick={linkClick}
                    />
                  );
                })}
            </div>
          );
        })}
      </Fragment>
    );
  }
}
