import { Typography } from "@mui/material"
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from '../../context/GlobalContext'
import axios from "axios";
import BASE_URL from '../../constants/Url'

export const Search = (props) => {
    const {userInfo, setUserInfo, repos, setRepos} = useContext(GlobalContext)
    const [userList, setUserList] = useState("")

    const getUsers = () => {
        axios
            .get(`${BASE_URL}/${props.username}`)
            .then((res) => {
                setUserInfo(res.data.username)
            })
            .catch((err) => {
                window.alert("Ocorreu um erro! Tente novamente.")
            })
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                GH User Search
            </Typography>
            <InputBase
                
                sx={{ ml: 1, flex: 1, border: '1px solid grey', borderRadius: 2, padding: 0.5 }}
                placeholder="Search for a user"
                inputProps={{ 'aria-label': 'search for a user' }}
            />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
        </div>
    )
}

export default Search