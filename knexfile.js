// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/appPlaylists.sqlite3'
    }, 
    
    useNullAsDefault: true,
  },

};
