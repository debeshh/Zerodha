import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container border-top mt-5">
      <div className="row mt-5 p-3">
        <div className="col-6 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={tryDemo}><img src=""/></a>
          <a href={learnMore}><img src=""/></a>
          <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
          <a href={appStore} className="p-3"><img src="media/images/appstoreBadge.svg"/></a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
