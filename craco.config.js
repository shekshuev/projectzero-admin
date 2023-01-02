const path = require("path");

const resolvePath = p => path.resolve(__dirname, p);

module.exports = {
    webpack: {
        alias: {
            "@components": resolvePath("./src/components"),
            "@data": resolvePath("./src/data"),
            "@hooks": resolvePath("./src/hooks"),
            "@services": resolvePath("./src/services"),
            "@styles": resolvePath("./src/styles")
        }
    }
};
