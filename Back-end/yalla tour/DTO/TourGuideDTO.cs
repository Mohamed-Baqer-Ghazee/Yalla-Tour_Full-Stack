using System.ComponentModel.DataAnnotations;

namespace Yalla_Tour.DTO
{
    public class TourGuideDTO
    {

        [Required]
        public string? Name { get; set; }
        public int Age { get; set; }
        public bool Gender { get; set; }
        [Required]
        public string? Address { get; set; }
        [Required]
        public string? PhoneNumber { get; set; }
        [Required]
        public string? Email { get; set; }

    }
}
