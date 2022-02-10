import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const ContainerIMG = styled.div `
  @keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(20px);
	}
	100% {
		transform: translatey(0px);
	}
}
  img {
      width: 15rem;
      transform: translatey(0px);
	  animation: float 4s ease-in-out infinite;
  }
`

export const Subtitle = styled.div `
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`