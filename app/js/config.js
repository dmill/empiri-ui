var env = process.env.NODE_ENV || "development";

var environments = {
  development: {
    empiriApiEndpoint: "http://localhost:9292",
    publicationPath: "publications"
  },
  production: {
    empiriApiEndpoint: "http://localhost:9292",
    publicationPath: "publications"
  }
};

var config = environments[env];


export { config as default };
