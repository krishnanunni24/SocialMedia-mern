import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPosts } from "../../../actions/UserActions";
import ListPosts from "../postList/ListPosts";

function UserPosts({ userId }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.userReducer.userPosts);
  
  useEffect(() => {
    dispatch(fetchUserPosts(userId));
  }, [userId]);

  return (
    <>
      <span className="flex justify-center from-accent py-3 font-semibold">
        Posts
      </span>
      <div className="p-4">
        <ListPosts Posts={posts} />
      </div>
    </>
  );
}

export default UserPosts;
