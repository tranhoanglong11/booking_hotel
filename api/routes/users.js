import express from "express";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CHECK AUTHENTICATION
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("You are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, You are logged in and can delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello admin, You are logged in and can delete all account");
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET ALL
router.get("/", verifyUser, getAllUser);

//GET
router.get("/:id", verifyAdmin, getUser);

export default router;
