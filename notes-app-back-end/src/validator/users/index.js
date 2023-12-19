const InvariantError = require("../../exceptions/InvariantError");
const { UserPayloadSchema } = require("./schema")

const UsersValidator = {
    validateUserPayload: (payload) => {
        const validationResult = UserPayloadSchema.validate(payload);

        if (ValidationResult.error) {
            throw new InvariantError(validationResult.error.message);
        }
    },
};

module.exports = UsersValidator;