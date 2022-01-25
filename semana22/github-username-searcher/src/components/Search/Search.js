import { Typography } from "@mui/material"
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import { useState, useContext } from "react"
import { GlobalContext } from '../../context/GlobalState'
import Client from '../../services/Client'
import Logo from '../../assets/logo.png'

export const Search = (props) => {
    const global = useContext(GlobalContext)
    const [search, setSearch] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
    }

    const getData = async () => {
        try {
            const response = await Client.get(`${search}`)
            const repos = await Client.get(`${search}/repos`)
            global.setUserData(response.data)
            global.setUserRepo(repos.data)
        } catch (error) {
            window.alert("Usuário não encontrado!")
        }
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                <img src={Logo} alt={"Logo"} />
            </Typography>
            <form noValidate onSubmit={handleSubmit}>
            <InputBase
                value={search}
                onChange={event => setSearch(event.target.value)}
                sx={{ ml: 1, flex: 1, width: '13rem', border: '1px solid grey', borderRadius: 2, padding: 0.5, backgroundColor: "#FFFFFF" }}
                placeholder="Search for a user"
                inputProps={{ 'aria-label': 'search for a user' }}
            />
      <IconButton 
        type="submit" 
        onClick={() => getData()}
        sx={{ p: '10px' }} 
        aria-label="search">
        <SearchIcon />
      </IconButton>
      </form>
        </div>
    )
}

export default Search