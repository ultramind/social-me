import User from "../models/user.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    // get user frieds
    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedfriends = friends.map(
      ({ _is, firstname, lastname, occupation, picturePath }) => {
        return { _is, firstname, lastname, occupation, picturePath };
      }
    );
    res.status(200).json(formattedfriends);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// UPDATE
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;

    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    // save them
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedfriends = friends.map(
      ({ _id, firstName, lastName, occupation, picturePath }) => {
        return { _id, firstName, lastName, occupation, picturePath };
      }
    );
    res.status(200).json(formattedfriends);
  } catch (err) {
    res.status(404).json({ message: err });
    console.log(err);
  }
};
