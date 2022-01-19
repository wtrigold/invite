import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  .button {
    cursor: pointer;
  }
  .wrapper {
    cursor: pointer;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 20;
    .modal {
      cursor: default;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 5rem;
      background: #e6f1f1;
      border-radius: 0.06rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: 0.2rem;
        margin-top: 0.3rem;
        text-align: center;
        color: #147b96;
        font-style: italic;
        font-weight: 800;
      }
      .separate {
        text-align: center;
        color: #147b96;
        font-weight: 500;
        margin-top: 0.1rem;
      }
      .input-item {
        text-align: center;
        margin-top: 0.2rem;
        input {
          width: 4rem;
          height: 0.3rem;
          border-radius: 0.05rem;
          border: 1px solid black;
          cursor: pointer;
          &:hover {
            border: 1px solid #147b96;
          }
        }
        &.error input {
          border: 1px solid red;
        }
        .error-message {
          color: red;
          text-align: left;
          margin-left: 0.45rem;
        }
      }
      .send-button {
        margin-top: 0.4rem;
        margin-bottom: 0.4rem;
        cursor: pointer;
        width: 4.05rem;
        height: 0.35rem;
        border-radius: 0.05rem;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background: lightblue;
        font-weight: 800;
        color: #147b96;
        &:hover {
          background: skyblue;
        }
      }
      .server-message {
        color: red;
        text-align: center;
        margin-top: 0rem;
        margin-bottom: 0.3rem;
      }
      .success-content {
        text-align: center;
        margin-top: 0.2rem;
        .item-1,
        .item-2 {
          font-size: 0.16rem;
          color: #147b96;
          font-weight: 800;
        }
      }
      .ok-button {
        margin-top: 0.2rem;
        margin-bottom: 0.3rem;
        cursor: pointer;
        width: 3.3rem;
        height: 0.35rem;
        border-radius: 0.05rem;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.05rem;
        background: lightblue;
        font-weight: 800;
        color: #147b96;
        &:hover {
          background: skyblue;
        }
      }
    }
  }
`
export default CardContainer
