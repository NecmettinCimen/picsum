using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using datacollector.Entity;
using Microsoft.EntityFrameworkCore.Design;

namespace datacollector.PicsumContext
{
    public class PicsumContextFactory : IDesignTimeDbContextFactory<PicsumDbContext>
    {
        public PicsumDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<PicsumDbContext>();
            optionsBuilder.UseNpgsql("User ID=postgres;Password=localpass;Host=localhost;Port=5432;Database=dbPicsum;Pooling=true;");

            return new PicsumDbContext(optionsBuilder.Options);
        }
    }
    public class PicsumDbContext : DbContext
    {
        public PicsumDbContext(DbContextOptions<PicsumDbContext> options) : base(options)
        {

        }

        public DbSet<Author> Authors { get; set; }
        public DbSet<PicsumImage> PicsumImage { get; set; }
    }
}