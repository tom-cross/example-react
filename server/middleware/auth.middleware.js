const jwt = require("jsonwebtoken");
require("dotenv").config();
const { UserRepository } = require("../schema");
const { UnauthorizedException, NotFoundException } = require("../exceptions");

async function AuthMiddleware(req, res, next) {
  try {
    const tokenClient = req.headers["x-access-token"];
    if (!tokenClient) {
      return next(new UnauthorizedException());
    }
    const validToken = jwt.verify(tokenClient, process.env.SECRET_KEY, {
      algorithms: ["HS256"],
    });

    if (!validToken) {
      return next(new UnauthorizedException());
    }

    const checkingUser = await UserRepository.findOne({ _id: validToken.id });
    if (!checkingUser) {
      return next(new NotFoundException("User not found!"));
    }
    req.user = {
      _id: checkingUser._id,
      username: checkingUser.username,
      avatarUrl: checkingUser.avatarUrl,
      createdAt: checkingUser.createdAt,
      updatedAt: checkingUser.updatedAt,
    };
    next();
  } catch (error) {
    next(new UnauthorizedException());
  }
}

module.exports = AuthMiddleware;
