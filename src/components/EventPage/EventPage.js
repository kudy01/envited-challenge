import React from "react";
// import { FcCloseUpMode } from "react-icons/fc";

import Coverphoto from "../../images/Cover-photo.png";

const EventPage = () => {
  let event = JSON.parse(sessionStorage.getItem("event"));
  console.log("event", event);

  return (
    <>
      <div>
        <img
          style={{
            height: "250px",
            width: "1700px",
          }}
          alt="cover-pic"
          className=""
          src={Coverphoto}
        />
      </div>
      <p
        style={{ fontFamily: "OpenSansBold", fontSize: "26px" }}
        className="pl2 tl white"
      >
        🎉 &nbsp;{event.eventName}
      </p>
      <p
        style={{
          fontFamily: "OpenSansSemiBold",
          fontSize: "16px",
          color: "white", //"rgba(80, 31, 193, 0.3)",
          paddingLeft: "2.9rem",
        }}
        className=" tl"
      >
        Hosted by {event.hostName}
      </p>
      <div className="ml4 mr4">
        <div className="flex justify-between">
          <button
            style={{
              fontFamily: "OpenSansRegular",
            }}
            className="b no-underline ph5 mb2 pv2 input-reset ba b--near-white purple grow pointer f3 dib br-pill"
          >
            Invite a friend
          </button>
          <button
            style={{ color: "rgba(117, 117, 117, 1)" }}
            className="b no-underline ph5 mb2 pv2 input-reset ba b--near-white grow pointer f3 dib br-pill"
          >
            ...
          </button>
        </div>
        <p
          className="tl white"
          style={{
            fontFamily: "OpenSansRegular",
            fontSize: "16px",
          }}
        >
          {event.startDate.toString()}
        </p>
        <p
          style={{
            fontFamily: "OpenSansRegular",
            fontSize: "16px",
          }}
          className="tl white"
        >
          to {event.endDate.toString()}
        </p>
        <p
          className="tl white pointer"
          style={{
            fontFamily: "OpenSansRegular",
            fontSize: "16px",
            opacity: "40%",
          }}
        >
          Add to calendar
        </p>
        <p
          className="tl white"
          style={{
            fontFamily: "OpenSansRegular",
            fontSize: "16px",
          }}
        >
          {event.location}
        </p>
        <p
          className="tl white pointer"
          style={{
            fontFamily: "OpenSansRegular",
            fontSize: "16px",
            opacity: "40%",
          }}
        >
          Open in maps
        </p>
        <div className="flex justify-between mt6">
          <button
            style={{
              fontFamily: "OpenSansLight",
              fontSize: "14px",
            }}
            className="b no-underline ph5 mb2 pv2 input-reset ba b--near-white grow pointer f3 dib br-pill purple"
          >
            Details
          </button>
          <button
            style={{
              fontFamily: "OpenSansLight",
              fontSize: "14px",
            }}
            className="b no-underline ph5 mb2 pv2 input-reset ba b--near-white grow pointer f3 dib br-pill purple"
          >
            Posts
          </button>
        </div>
        <footer
          className="mt2"
          style={{
            color: "background: rgba(117, 117, 117, 1)",
            fontFamily: "OpenSansLight",
            fontSize: "14px",
            textAlign: "left",
          }}
        >
          {event.eventFooter}
        </footer>
      </div>
    </>
  );
};

export default EventPage;
