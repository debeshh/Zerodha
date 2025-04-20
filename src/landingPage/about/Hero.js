import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container mt-5 p-5 mb-5">
      <div className="row text-center">
        <h1 className="fs-2 mt-5  p-2">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row border-top mt-5 mb-5 p-5">
        <div className="col-6 p-5">
          <p className="text-muted">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p className="text-muted">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p className="text-muted">
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 p-5">
          <p className="text-muted">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p className="text-muted">
            <a href="" className="text-decoration-none">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p className="text-muted">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
      <div className="row border-top  mt-5 p-5">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <h1 className="fs-2 text-muted p-5">People</h1>
          </div>
        </div>

        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ width: "60%", borderRadius: "100%" }}
          />
          <p className="text-muted fs-5 p-2" style={{ textAlign: "center" }}>
            Nithin Kamath
          </p>
          <p className="text-muted small">Founder, CEO</p>
        </div>

        <div className="col-6 p-5">
          <p className="text-muted p-2">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="text-muted p-2">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="text-muted p-2">Playing basketball is his zen.</p>

          <p className="text-muted p-2">
            Connect on{" "}
            <Link className="text-decoration-none" to="/home">
              Homepage
            </Link>{" "}
            /
            <Link className="text-decoration-none" to="/trading">
              {" "}
              TradingQnA{" "}
            </Link>{" "}
            /
            <Link className="text-decoration-none" to="/twitter">
              {" "}
              Twitter{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
