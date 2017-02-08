using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace TodoApp.Data.Repositories
{
    internal class BaseRepository
    {
        private const string CONNECTIONSTRINGKEY = "ConnectionString";
        protected SqlConnection connection;

        /// <summary>
        /// get connection string in api project
        /// </summary>
        /// <param name="configuration"></param>
        public BaseRepository(IConfigurationRoot configuration)
        {
            var connectionString = configuration.GetSection(CONNECTIONSTRINGKEY);
            if (string.IsNullOrWhiteSpace(connectionString.Value))
                throw new ArgumentNullException("Connection string not found");

            connection = new SqlConnection(connectionString.Value);
        }
    }
}