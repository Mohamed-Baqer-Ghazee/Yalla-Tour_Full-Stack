using Microsoft.EntityFrameworkCore;
using Yalla_Tour.Models;

namespace Yalla_Tour.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext()
        {
        }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }
        public DbSet<Location> Location { get; set; }
        public DbSet<Restaurant> Restaurant { get; set; }
        public DbSet<TourGuide> TourGuide { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<LocationImages> LocationImages { get; set; }
    }
}
