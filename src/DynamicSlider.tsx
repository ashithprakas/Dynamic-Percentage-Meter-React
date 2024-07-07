const DynamicSlider = () => {
  return (
    <div className="skill-container">
      <div className="skill">
        <div className="outer">
          <div className="inner">
            <div className="number" id="number">
              65%
            </div>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="200px"
        height="200px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#Da22ff" />
            <stop offset="110%" stop-color="#9733ee" />
          </linearGradient>
        </defs>
        <circle cx={100} cy={100} r={90} stroke-linecap="round"></circle>
      </svg>
    </div>
  );
};

export default DynamicSlider;
