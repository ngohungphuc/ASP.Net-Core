using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.DependencyInjection;

namespace Backend.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
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