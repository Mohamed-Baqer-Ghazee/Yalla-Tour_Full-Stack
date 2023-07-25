using System.ComponentModel.DataAnnotations;

namespace Yalla_Tour.Models
{
    public class Restaurant
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string? Name { get; set; }
        public string? ImgUrl { get; set; }
        [Required]
        public string? Address { get; set; }
        public string? Description { get; set; }


    }
}
