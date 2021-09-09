import styled from "styled-components"
import Image from "next/image"



const RoadAnime = styled.div`
  background-image: url('/Car_Animation_Img/sky.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  height: 200px;
  width: 100%;
  overflow: hidden;

  .highway {
    height: 50px;
    width: 3000%;
    background-image: url('/Car_Animation_Img/road.jpg');
    background-repeat: repeat-x;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    animation: highway 5s linear infinite;
  }

  .city {
    height: 15em;
    width: 3000%;
    background-image: url('/Car_Animation_Img/city.png');
    background-repeat: repeat-x;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    animation: highway 20s linear infinite;
  }

  .car {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%)
    margin: auto;
    z-index: 2;
    animation: car 1s linear infinite;

    .left-wheel {
      z-index: 3;
      position: absolute;
      bottom: 3px;
      right: 18px;
      animation: wheel 1s linear infinite;
    }

    .right-wheel {
      z-index: 3;
      position: absolute;
      bottom: 2px;
      right: 110px;
      animation: wheel 1s linear infinite;
    }
  }


  @keyframes highway {
    100%{
      transform: translateX(-3400px)
    }
  }

  @keyframes city {
    100%{
      transform: translateX(-3400px)
    }
  }

  @keyframes wheel {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes car {
    100% {
      transform: translateY(-1px);
    }
    50% {
      transform: translateY(1px);
    }
    0% {
      transform: translateY(-1px);
    }
  }
`

const RoadAnimation = () => (
  <RoadAnime>
    <div className='city'></div>
    <div className='highway'></div>
    <div className='car'>
      <Image
        unoptimized
        alt=""
        src="/Car_Animation_Img/car.png"
        height={60}
        width={150}
      />
      <div className="left-wheel">
        <Image
          unoptimized
          alt=""
          src="/Car_Animation_Img/wheel.png"
          height={25}
          width={25}
        />
      </div>
      <div className="right-wheel">
        <Image
          unoptimized
          alt=""
          src="/Car_Animation_Img/wheel.png"
          height={25}
          width={25}
        />
      </div>
    </div>

  </RoadAnime>
)

export default RoadAnimation