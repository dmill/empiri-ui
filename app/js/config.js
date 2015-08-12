var env = process.env.NODE_ENV || "development";

var environments = {
  development: {
    empiriApiEndpoint: "http://localhost:9292",
    publicationPath: "dev"
  },
  production: {
    empiriApiEndpoint: "http://localhost:9292",
    publicationPath: "prod"
  }
};

var config = environments[env];


export { config as default };
