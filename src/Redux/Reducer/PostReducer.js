import * as Type from "../Action/Type";
// fake data
const int = [];
const PostView = (state = int, action) => {
    
  switch (action.type) {
    case Type.VIEW_POST:
      let post=action.payload;
      return post;
    default:
      return state;
  }
};
export default PostView;
