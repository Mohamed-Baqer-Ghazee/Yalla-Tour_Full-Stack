using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Yalla_Tour.Models;

namespace Yalla_Tour.DTO
{
    public class LocationDTO
    {

        [Required]
        public string? Name { get; set; }
        public string? ImgUrl { get; set; }
        public string? Description { get; set; }
        [Required]
        public string? Address { get; set; }
        public string? Type { get; set; }
        public string? OTime { get; set; }
        public string? CTime { get; set; }
        public float EnteranceFee { get; set; }
        public string? Rules { get; set; }
        [ForeignKey("Id")]
        public virtual int RestaurantId { get; set; }
        [ForeignKey("Id")]
        public virtual int TourGuideId { get; set; }

        public List<string> Images { get; set; }

    }
}
