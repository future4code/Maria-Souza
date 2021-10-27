import React, { useState } from "react"
import PostCard from "../../components/PostCard/PostCard"
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/Urls'
import { RecipeListContainer, AlignLogo } from "./Styled"
import { useHistory } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import PostingCard from '../../components/PostingCard/PostingCard'
import NewPost from '../../assets/newpost.png'
import Feed from '../../assets/feed.png'

const FeedPage = () => {
    const [page, SetPage] = useState(1)
    const posts = useRequestData([], `${BASE_URL}/posts/?page=${page}&size=30`)
    const history = useHistory()
    useProtectedPage()

    // const onClickCard = (id) => {
    //     goToRecipeDetail(history, id)
    // }

    const postCards = posts.map((post) => {
        return (
            <PostCard
                key={post.id}
                title={post.title}
                body={post.body}
                commentCount={post.commentCount}
                voteSum={post.voteSum}
                userVote={post.userVote}
                username={post.username}
                createdAt={post.createdAt}
                // onClick={() => onClickCard(post.id)}
                />
        )
    })

    return (
        <div>
        <AlignLogo>
            <img src={NewPost} alt="Enviar novo post" />
                <PostingCard />
        </AlignLogo>
        <AlignLogo>
            <img src={Feed} alt="Feed" />
        </AlignLogo>
        <RecipeListContainer>
            {postCards.length > 0 ? postCards : <Loading />}
        {/* <AddRecipeButton
            color={"primary"}
            onClick={() => goToAddRecipes(history)}
            >
            <AddCircleRoundedIcon
            fontSize="large" />
        </AddRecipeButton> */}

        </RecipeListContainer>
        </div>
    )
}

export default FeedPage