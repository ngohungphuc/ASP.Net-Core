using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace OdeToFood.Models
{
    public class OleDbContext : IdentityDbContext<User>
    {
        public OleDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Restaurant> Restaurants { get; set; }
    }
}