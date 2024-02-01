"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const BaseError_1 = require("./BaseError");
class UnauthorizedError extends BaseError_1.BaseError {
    constructor(message = "Acesso não autorizado") {
        super(401, message);
    }
}
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=UnauthorizedError.js.map