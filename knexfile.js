module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/quantified-self-api',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/quantified-self-api-test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: 'postgres://tamnfdjdownlms:3ac7ea73db7ed248aaba3ef4b688b6025d71d81d37a29f3a3f6f29174fbd7c97@ec2-54-243-210-70.compute-1.amazonaws.com:5432/db0q3cbdr3t9sh',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
}
