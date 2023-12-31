import { toast } from "react-toastify"
import * as PostApi from "./../api/PostRequests"
import * as UserApi from "./../api/UserRequests";


export const reportPost = (data)=>async (dispatch)=>{
 try{
  const newReport = await PostApi.postReport(data) 
  toast.success("Report Submited")
 }catch(err){
  if(err.response?.data?.alreadyReported){
    toast.error("This post was already reported")
  }
  console.log(err)
 }
}

export const fetchLikedPosts = (userId)=> async (dispatch) =>{
  dispatch({ type: "FETCH_LIKED_STARTED" });
  try {
    let response = await UserApi.FetchLiked(userId);
    dispatch({ type: "FETCH_LIKED_SUCCESS",data:response.data?.likedPosts });

  } catch (err) {
    dispatch({ type: "FETCH_LIKED_FAILED" });
    throw err;
  }
}
