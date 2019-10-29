//const { gql } = require("apollo-server-express");

//const { gql } = require("apollo-server-express");
const db = require("./db");
const Query = {
  job: (root, { id }) => db.jobs.get(id),
  company: (root, { id }) => db.companies.get(id),
  jobs: () => db.jobs.list()
};
const Mutation = {
  createJob: (root, { input }, context) => {
    console.log("context", context);
    // const id = db.jobs.create(input);
    // return db.jobs.get(id);
    return null;
  }
};
const Job = {
  company: job => db.companies.get(job.companyId)
};
const Company = {
  jobs: company => db.jobs.list().filter(job => job.companyId === company.id)
};
module.exports = { Query, Mutation, Job, Company };
