// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    
    connection: {
      filename: '/home/joaovicente/Documents/developer_branch/apiRestful_omni/backend/src/db.sqlite'
    },

    migrations: {
      directory: '/home/joaovicente/Documents/developer_branch/apiRestful_omni/backend/migrations'
    },

    useNullAsDefault: true,

  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {

    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
