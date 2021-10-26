export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToAddPost = (history, id) => {
    history.push(`/post/${id}`)
}

export const goToFeed = (history) => {
    history.push("/")
}