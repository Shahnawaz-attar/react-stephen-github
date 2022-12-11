import React from "react";
import Buttons from "../components/Buttons";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

const ButtonsPage = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="mt-2">
      <div>
        <Buttons
          secondary
          outline
          rounded
          onClick={handleClick}
          onMouseOver={() => {
            console.log("dsf");
          }}
        >
          <GoBell />
          Click me!!
        </Buttons>
      </div>
      <div>
        <Buttons danger outline className="mb-5">
          <GoCloudDownload />
          Buy Now!
        </Buttons>
      </div>
      <div>
        <Buttons warning>
          <GoDatabase />
          See Deal!
        </Buttons>
      </div>
      <div>
        <Buttons secondary outline>
          Hide Ads!
        </Buttons>
      </div>
      <div>
        <Buttons primary outline>
          Something!
        </Buttons>
      </div>
    </div>
  );
};

export default ButtonsPage;
