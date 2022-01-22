import styled from "styled-components";

const Animation = styled.div`
    position: relative;
    height: calc(100vh - 4rem);
    display: flex;
    justify-content: center;
    align-items: center;
    & .background {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -100;
        & img {
            width: 100%;
            height: 100%;
            min-height: 600px;
            opacity: 0.8;
        }
    }
  & .earth {
    width: 500px;
    height: 500px;
    & img {
        width: 100%;
        height: 100%;
    }
  }
  & .bicycle {
      position: absolute;
      animation: spin 15s linear infinite;
  }

  @keyFrames spin {
      0% { transform: rotate(0deg) translate(0, -245px) }
      25% { transform: rotate(90deg) translate(0, -230px) }
      50% { transform: rotate(180deg) translate(0, -230px) }
      75% { transform: rotate(270deg) translate(5px, -240px) }
      100% { transform: rotate(360deg) translate(0, -245px) }
  }

  @media only screen and (max-width: 768px) {
    & .earth {
      width: 400px;
      height: 400px;
    }

    @keyFrames spin {
      0% { transform: rotate(0deg) translate(0, -200px) }
      25% { transform: rotate(90deg) translate(5px, -190px) }
      50% { transform: rotate(180deg) translate(5px, -190px) }
      75% { transform: rotate(270deg) translate(5px, -195px) }
      100% { transform: rotate(360deg) translate(0, -200px) }
    }
  }

  @media only screen and (max-width: 500px) {
    & .earth {
      width: 250px;
      height: 250px;
    }

    & .bicycle img {
      width: 100px;
    }

    @keyFrames spin {
      0% { transform: rotate(0deg) translate(0, -130px) }
      25% { transform: rotate(90deg) translate(5px, -120px) }
      50% { transform: rotate(180deg) translate(5px, -120px) }
      75% { transform: rotate(270deg) translate(5px, -125px) }
      100% { transform: rotate(360deg) translate(0, -130px) }
    }
  }
`;

export default Animation;