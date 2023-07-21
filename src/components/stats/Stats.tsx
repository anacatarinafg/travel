import CountUp from "react-countup";
import "./stats.scss";
import { stats } from "../../data";

const Stats = () => {
  return (
    <div className="stats">
      {stats.map((stats) => (
        <div className="stats__box">
          <h1 className="stats__number">
            <CountUp
              start={-5}
              end={stats.number}
              duration={2}
              decimals={4}
              decimal=","
              suffix=" +"
              enableScrollSpy
            ></CountUp>
          </h1>
          <p className="stats__text">{stats.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
