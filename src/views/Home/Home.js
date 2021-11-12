import "./Home.scss";

import Intro from "../../components/Intro/Intro";
import Characters from "../../components/Characters/Characters";
import Fighter from "../../components/Fighter/Fighter";
import BuyCharacter from "../../components/BuyCharacter/BuyCharacter";
import RoadMap from "../../components/RoadMap/RoadMap";

export const Home = ({
  mintLoading,
  onMintCharacterHandler,
  onMintMountHandler,
  onMintPetHandler,
  totalSupply,
}) => {
  return (
    <div className="home">
      <Intro />
      <Characters />
      <Fighter />
      <BuyCharacter
        totalSupply={totalSupply}
        mintLoading={mintLoading}
        onMintCharacterHandler={onMintCharacterHandler}
        onMintMountHandler={onMintMountHandler}
        onMintPetHandler={onMintPetHandler}
      />
      <RoadMap />
    </div>
  );
};

export default Home;
