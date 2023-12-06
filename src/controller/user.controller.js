import userService from "../service/user.service.js";

const UserCreate = async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;

    if (!name || !lastname || !email || !password ) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    const user = await userService.UserCreateService(req.body);

    if (!user) {
      return res.status(400).send({ message: "Error creating User" });
    }

    res.status(201).send({
      message: "User created successfully",
      user: {
        id: user._id,
        name,
        lastname,
        email,
      },
    });
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

const UserUpdate = async (req, res) => {
  try {
    // boa parte da função esta sendo passada nos middlewares
    const { name, lastname, email, password } = req.body;
    
    if (!name && ! lastname && !email && !password) {
      res.status(400).send({ message: "Submit at least one fields for update" });
    }
    const {id, user} = req; // sofreu alterações pois agora ele esta sendo passado pelo middlewares


    await userService.UpdateService(
      id,
      name,
      lastname,
      email,
    )

    res.send({ message: "User successfully updated!"})
  } catch (e) {
    return res.status(400).send(e.message)
  }
}

export default {
    UserCreate,
    UserUpdate,
};
