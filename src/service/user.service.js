import UserModels from "../models/User.js";

const UserCreateService = (body) => UserModels.create(body);

const findIDService = (id) => UserModels.findById(id);

const UpdateService = (id, name, lastname, email, password) =>
  UserModels.findOneAndUpdate({ _id: id }, { name, lastname, email, password });

export default {
  UserCreateService,
  UpdateService,
  findIDService,
};
