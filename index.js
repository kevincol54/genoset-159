var gql = require('gql')

module.exports = gql.and([
  gql.exact('rs762551', 'AA'),
  gql.not(gql.has('rs12720461', 'T')),
  gql.not(gql.has('rs2069526', 'G')),
  gql.not(gql.has('rs28399424', 'T'))
])
