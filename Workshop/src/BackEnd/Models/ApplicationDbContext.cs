using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.DependencyInjection;

namespace BackEnd.Models
{

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {

        }

        public DbSet<Speaker> Speaker { get; set; }
    }

    //public class ApplicationDbContextFactory : IDbContextFactory<ApplicationDbContext>
    //{
    //    public ApplicationDbContext Create(string[] args) =>
    //        Program.BuildWebHost(args).Services.CreateScope().ServiceProvider.GetRequiredService<ApplicationDbContext>();
    //}

}
