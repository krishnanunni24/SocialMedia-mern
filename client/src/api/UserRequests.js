import { API } from "./ApiConfig";



export const FetchFollowing= (id)=> API.get(`/user/${id}/following`);
export const FetchPosts=(id,page)=>API.get(`/user/${id}/posts/${page}`)
export const FetchUserPosts =(id)=>API.get(`/user/${id}/userPosts`)
export const FetchSaved=(id)=>API.get(`/user/${id}/saved`)
export const FetchLiked=(id)=>API.get(`/user/${id}/LikedPosts`)
export const FetchUser=(userId,) => API.get(`/user/${userId}`)
export const FetchUsers=(userId) => API.get(`/user/suggestion/${userId}`)
export const SearchUsers=(text)=> API.get(`user/search/${text}`)
export const SearchFollowingUsers=(text,userId)=> API.get(`user/${userId}/searchFollowing/${text}`)

export const fetchFollowingUsersData = (userId) => API.get(`/user/followingUsers/${userId}`)
export const fetchFollowersData = (userId) => API.get(`/user/followerUsers/${userId}`)


export const DeletePost=(postId,userId)=>API.delete(`/user/${userId}/${postId}/delete`)

export const SavePost=(data)=>API.post(`/user/saved`,data)
export const LikePost=(data)=>API.post(`/user/Liked`,data)
export const SendMessage=(data)=> API.post(`/chat/`,data)

export const followUser = (id,data)=> API.put(`/user/${id}/follow/${data}`)
export const unfollowUser = (unFollowingUserId,currentUserId)=> API.put(`/user/${currentUserId}/unfollow/${unFollowingUserId}`)