const swaggerAutogen = require("swagger-autogen")({openapi: "3.0.0"});

const doc = {
    info: {
        title: "My API",
        description: "스웨거 자동생성",
    },
    host: "localhost:3000",
    schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["../app.js"];
swaggerAutogen(outputFile, endpointsFiles, doc);