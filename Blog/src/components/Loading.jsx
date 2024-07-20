import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="container-loading">
        <BeatLoader className="loader" color="white" />
      </div>
    </div>
  );
};

export default Loading;
