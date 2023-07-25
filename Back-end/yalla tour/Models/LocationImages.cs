using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Yalla_Tour.Models
{
    public class LocationImages
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string? ImageUrl { get; set; }

        [Required]
        public int LocationId { get; set; }

    }
}
