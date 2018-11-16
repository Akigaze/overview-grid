import React, { Component, Fragment } from "react";
import { isEmpty, isEqual } from "lodash";
import {isTrue, isFalse} from "../util/data-check";
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
    clicked,
    titleIndent,
    titleUpper,
    infoUpper,
    infoClick
  } = props;
  titleUpper = !isFalse(titleUpper);
  infoUpper = !isFalse(infoUpper);
  let displayTitle = titleUpper ? title.toUpperCase() : title;
  let displayInfo = infoUpper ? info.toUpperCase() : info;
  return (
    <div>
      <div className="title">
        {titleIndent && <Indent width="16" />}
        <span>{displayTitle}</span>
      </div>
      <div className="info">
        {infoLink && infoClick ? (
          <span
            className={infoLink ? (clicked ? "clicked" :"link") : "normal"}
            onClick={() => {
              infoClick({title, info});
            }}
          >
            {displayInfo}
          </span>
        ) : (
          <span className={infoLink ? (clicked ? "clicked" :"link") : "normal"}>{displayInfo}</span>
        )}
      </div>
    </div>
  );
};

export default class OverviewGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {clickedInfo:{title:"", info:""}};
  }

  clickInfo = (infoItem) => {
      let {clickedInfo} = this.state;
      let {linkClick} = this.props;
      if (!isEmpty(infoItem) && !isEqual(clickedInfo, infoItem)) {
          linkClick(infoItem.info);
          this.setState({clickedInfo:{title:infoItem.title, info:infoItem.info}});
      }
  }

  render() {
    let preTitle = "";
    let {
      overviewInfo,
      titleUpper,
      infoUpper,
      subInfoUpper
    } = this.props;
    let {clickedInfo} = this.state;
    return (
      <Fragment>
        {overviewInfo.map((item, index) => {
          let { title, info, subInfo, infoLink } = item;
          isEqual(preTitle, title) ? (title = "") : (preTitle = title);
          let clicked = infoLink && isEqual(clickedInfo, {title, info})
          return (
            <div key={`info-${index}`}>
              <InfoItem
                title={title}
                info={info}
                infoLink={infoLink}
                clicked={clicked}
                titleUpper={titleUpper}
                infoUpper={infoUpper}
                infoClick={this.clickInfo}/>
              {!isEmpty(subInfo) &&
                subInfo.map((subItem, index) => {
                  let { title, info, infoLink } = subItem;
                  isEqual(preTitle, title) ? (title = "") : (preTitle = title);
                  let clicked = infoLink && isEqual(clickedInfo, {title, info})
                  return (
                    <InfoItem
                      key={`subInfo-${index}`}
                      title={title}
                      info={info}
                      infoLink={infoLink}
                      clicked={clicked}
                      titleIndent={true}
                      titleUpper={titleUpper}
                      infoUpper={subInfoUpper}
                      infoClick={this.clickInfo}
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
