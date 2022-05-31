import * as C from './styles'

export const DrawNumbers = ({ numbers }) => {
    return <C.Container>
        <C.StyleDrawNumbers>
            {numbers}
        </C.StyleDrawNumbers>
    </C.Container>
}

export default DrawNumbers