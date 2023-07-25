using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Yalla_Tour.Models
{
    public class Location
    {
        [Key]
        public int Id { get; set; }
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

    }
}
