/** @format */

/* @format */
import "../style.css";
import image from "../images/image-jeremy.png";
import Ellipsis from "./Iconellipsis";
import Self from "./SelfCare";
import Work from "./Work";
import Play from "./Play";
import Study from "./Study";
import Exercise from "./Exercise";
import Social from "./Social";
import Data from "../data.json";
import { useState } from "react";

const iconMap = {
  Work: Work,
  Play: Play,
  Study: Study,
  Exercise: Exercise,
  Social: Social,
  SelfCare: Self,
};

export default function Container() {
  const [viewMode, setViewMode] = useState("weekly");

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  function handleDaily(mode) {
    return (
      <>
        {Data.map((data) => {
          const Component = iconMap[data.title];
          return (
            <div key={data.title} className={data.title}>
              <Component />
              <div className='span'>
                <Ellipsis />
                <div>{data.title}</div>
                <div className='hrs'>
                  {" "}
                  {mode === "daily"
                    ? `${data.timeframes.daily.current}hrs`
                    : mode === "weekly"
                    ? `${data.timeframes.weekly.current}hrs`
                    : `${data.timeframes.monthly.current}hrs`}
                </div>
                <span className='lastweek'>
                  {mode === "daily"
                    ? `Last Week - ${data.timeframes.daily.previous}hrs`
                    : mode === "weekly"
                    ? `Last Week - ${data.timeframes.weekly.previous}hrs`
                    : `Last Month - ${data.timeframes.monthly.previous}hrs`}
                </span>
              </div>
            </div>
          );
        })}
      </>
    );
  }
  return (
    <div className='grid-container'>
      <div className='container'>
        <div className='container2'>
          <div className='daily-weekly'>
            <div className='report'>
              <img src={image} />
              <div className='reportfor-name'>
                <span className='reportfor'>Report for</span>
                <label className='name'>Jeremy Robson</label>
              </div>
            </div>
            <ul className='list'>
              <li onClick={() => handleViewChange("daily")} className='daily'>
                Daily
              </li>
              <li onClick={() => handleViewChange("weekly")} className='weekly'>
                Weekly
              </li>
              <li
                onClick={() => handleViewChange("monthly")}
                className='monthly'
              >
                Monthly
              </li>
            </ul>
          </div>
        </div>

        <div className='container3'>{handleDaily(viewMode)}</div>
      </div>
    </div>
  );
}
