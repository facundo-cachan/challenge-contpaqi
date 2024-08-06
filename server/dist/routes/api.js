"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const middleware_1 = require("./middleware");
const auth_router_1 = __importDefault(require("./auth-router"));
const user_router_1 = __importDefault(require("./user-router"));
const chat_router_1 = __importDefault(require("./chat-router"));
const ine_router_1 = __importDefault(require("./ine-router"));
// Init
const apiRouter = (0, express_1.Router)();
// Add api routes
apiRouter.use("/auth", auth_router_1.default);
apiRouter.use("/v1", ine_router_1.default);
apiRouter.use("/uaa", ine_router_1.default);
apiRouter.use("/users", middleware_1.authMw, user_router_1.default);
apiRouter.use("/chat", middleware_1.authMw, chat_router_1.default);
// Export default
exports.default = apiRouter;
