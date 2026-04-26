const PlatformCard = ({ img, heading, content, url }) => {
  return (
    <>
      <div className="platCard flex flex-col justify-evenly">
        <a href={url} target="_blank">
          <div
            className="platLogo w-[9vw] h-[9vw]"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </a>
        <div className="plat-card-cont flex flex-col justify-center text-amber-50">
          <div className="plat-card-head gradient-text">{heading}</div>
          <div className="plat-card-content">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformCard;
