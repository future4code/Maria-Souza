import styledComponentsCjs from "styled-components"

export const Container = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 100%;
    height: 70vh;
`

export const ContainerImg = styledComponentsCjs.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 15rem;
  margin-top: 6rem;
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
      width: 20rem;
      margin-top: -5rem;
      transform: translatey(0px);
	  animation: float 4s ease-in-out infinite;
  }
`