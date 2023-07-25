using System.ComponentModel.DataAnnotations;

namespace Yalla_Tour.DTO
{
    public class LocationImageDTO
    {
        [Required]
        public string ImageUrl { get; set; }

    }
}
