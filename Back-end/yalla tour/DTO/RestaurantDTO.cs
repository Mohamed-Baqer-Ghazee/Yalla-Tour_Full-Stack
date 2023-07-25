using System.ComponentModel.DataAnnotations;

namespace Yalla_Tour.DTO
{
    public class RestaurantDTO
    {

        [Required]
        public string? Name { get; set; }
        public string? ImgUrl { get; set; }
        [Required]
        public string? Address { get; set; }
        public string? Description { get; set; }

    }
}
