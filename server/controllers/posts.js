import Post from "../models/post.js";

export const createPosts = async (req, res) => {
  try {
    const { userId, description, picturePath } = re.body;
    const newPost = new Post({
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPictureAth: user.picturePath,
      pictuePath,
      likes: {},
      commets: [],
    });

    await newPost.save();
    const post = await Post.find();
    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

// READ
export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ userId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

// UPDATE
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;
    const post = await Post.findById(id);
    // check if user id exits
    const isliked = post.likes.get(userId);
    if (isliked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await findOneByIdAndUdate(
      id,
      { likes: post.likes },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};
