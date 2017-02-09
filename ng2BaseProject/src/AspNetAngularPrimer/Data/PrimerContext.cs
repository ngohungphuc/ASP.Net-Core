using Microsoft.EntityFrameworkCore;

namespace AspNetAngularPrimer.Data
{
    public class PrimerContext : DbContext
    {
        public PrimerContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Person> Persons { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            var personTableModel = modelBuilder.Entity<Person>();
            personTableModel.HasKey(p => p.PersonId);
            personTableModel.Property(p => p.PersonId).UseSqlServerIdentityColumn();
            personTableModel.Property(p => p.Name).IsRequired().HasMaxLength(30);
        }
    }
}