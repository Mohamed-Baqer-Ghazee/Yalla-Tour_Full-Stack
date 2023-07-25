using System.ComponentModel.DataAnnotations;

namespace Yalla_Tour.DTO
{
    public class UserDTO
    {

        [Required]
        public string? Name { get; set; }
        public int Age { get; set; }
        public bool Gender { get; set; }
        public string? Address { get; set; }
        [Required]
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }

    }
}
