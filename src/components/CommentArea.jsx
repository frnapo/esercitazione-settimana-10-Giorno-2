import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { useEffect, useState } from "react";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState({
    comments: [],
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    fetchComments();
  }, [asin]);

  const fetchComments = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmRlYmUwZGQxZDAwMTgyZDE3NjgiLCJpYXQiOjE3MDQ3MjE4OTksImV4cCI6MTcwNTkzMTQ5OX0.KUa3ZuV_ghbFwVz_BnfoQ5cTvW0KWN-D73DAZ1a0Ebw",
        },
      });
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        setComments({ comments: comments, isLoading: false, isError: false });
      } else {
        setComments({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      setComments({ isLoading: false, isError: true });
    }
  };

  return (
    <div className="text-center mt-5 pt-3">
      {comments.isLoading && <Loading />}
      {comments.isError && <Error />}
      {asin && <AddComment asin={asin} />}
      {asin && <CommentList commentsToShow={comments.comments} />}
    </div>
  );
};

export default CommentArea;
