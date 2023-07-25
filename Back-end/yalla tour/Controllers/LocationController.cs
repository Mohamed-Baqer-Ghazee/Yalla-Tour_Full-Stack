using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Yalla_Tour.Data;
using Yalla_Tour.DTO;
using Yalla_Tour.Models;
using Microsoft.EntityFrameworkCore;

namespace Yalla_Tour.Controllers
{
    [Route("/[Controller]/[Action]")]
    public class LocationController: Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public LocationController (ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        [HttpGet]
        public ICollection<Location> GetAllLocations()
        {
            return _context.Location.ToList();
        }
        [HttpPost]
        public async Task<IActionResult> AddLocation([FromBody] LocationDTO locationDTO)
        {
            if (locationDTO == null)
                return BadRequest();

            var location = new Location
            {
                Name = locationDTO.Name,
                ImgUrl = locationDTO.ImgUrl,
                Description = locationDTO.Description,
                Address = locationDTO.Address,
                Type = locationDTO.Type,
                OTime = locationDTO.OTime,
                CTime = locationDTO.CTime,
                EnteranceFee = locationDTO.EnteranceFee,
                Rules = locationDTO.Rules,
                RestaurantId = locationDTO.RestaurantId,
                TourGuideId = locationDTO.TourGuideId
            };

            /*foreach (var imageUrl in locationDTO.Images)
            {
                var locationImage = new LocationImages
                {
                    ImageUrl = imageUrl,
                    Location = location
                };
                location.Images.Add(locationImage);
            }*/
            
            await _context.Location.AddAsync(location);
            await _context.SaveChangesAsync();

            int locationId = location.Id;
            
            // Create a LocationImages entity and associate it with the LocationId
            foreach (var imageUrl in locationDTO.Images)
            {
                var locationImage = new LocationImages
                {
                    ImageUrl = imageUrl,
                    LocationId = locationId
                };
                Console.WriteLine(locationImage.ImageUrl);
                await _context.LocationImages.AddAsync(locationImage);
            }
            await _context.SaveChangesAsync();

            return Ok(location);
        }


        [HttpGet]
        public async Task<IActionResult> GetLocationByAddress(string? address)
        {
            if (address != null)
            {
                try
                {
                    var location = await _context.Location.Where(a => a.Address == address).FirstOrDefaultAsync();
                    if(location == null)
                        return NotFound("no location with the given address");
                    var LocationDTO = _mapper.Map<Location, LocationDTO>(location);
                    
                    return Ok(LocationDTO);

                }catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
            

            return NotFound();
        }
        [HttpGet]
        public async Task<IActionResult> GetLocationById(int? id)
        {
            if (id != null)
            {
                try
                {
                    var Location = await _context.Location.Where(a => a.Id == id).FirstOrDefaultAsync();
                    if (Location == null)
                        return NotFound("no Location with the given id");
                    var LocationImages = await _context.LocationImages.Where(a => a.LocationId == id).ToListAsync();
                    var LocationDTO = _mapper.Map<Location, LocationDTO>(Location);
                    List<string> ImageUrls= new();
                    foreach(var Image in LocationImages)
                    {
                        ImageUrls.Add(Image.ImageUrl);
                    }
                    LocationDTO.Images = ImageUrls;

                    return Ok(LocationDTO);

                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }


            return NotFound();
        }

        [HttpPut]
        public async Task<IActionResult>  EditLocation([FromBody] Location location, int? id)
        {
            if (location == null) { return NoContent(); }

            var locationInfo = await _context.Location.FirstOrDefaultAsync(s => s.Id == id);

            if (locationInfo == null) { return NoContent(); }



            try
            {
                locationInfo.Name = location.Name;
                locationInfo.Description = location.Description;
                locationInfo.Address = location.Address;
                locationInfo.Type = location.Type;
                locationInfo.OTime = location.OTime;
                locationInfo.CTime = location.CTime;
                locationInfo.CTime = location.CTime;
                locationInfo.EnteranceFee = location.EnteranceFee;
                locationInfo.Rules = location.Rules;
                locationInfo.RestaurantId = location.RestaurantId;
                locationInfo.TourGuideId = location.TourGuideId;

                _context.Location.Update(locationInfo);
                await _context.SaveChangesAsync();

                return Ok(_context.Location.FirstOrDefault(s => s.Id == id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteLocation(int? id)
        {
            if (id == null) { return NoContent(); }
            var locationInfo = _context.Location.FirstOrDefault(s => s.Id == id);

            if (locationInfo == null) { return NoContent(); }

            try
            {
                _context.Location.Remove(locationInfo);
                await _context.SaveChangesAsync();

                return Ok(_context.Location.ToList());

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
