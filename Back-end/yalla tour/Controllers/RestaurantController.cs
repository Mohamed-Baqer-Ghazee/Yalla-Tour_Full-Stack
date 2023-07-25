using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Yalla_Tour.Data;
using Yalla_Tour.DTO;
using Yalla_Tour.Models;

namespace Yalla_Tour.Controllers
{
    [Route("/[Controller]/[Action]")]
    public class RestaurantController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public RestaurantController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        [HttpGet]
        public ICollection<Restaurant> GetAllRestaurants()
        {
            return _context.Restaurant.ToList();
        }
        [HttpPost]
        public async Task<IActionResult> AddRestaurant([FromBody] RestaurantDTO RestaurantDTO)
        {
            if (RestaurantDTO == null)
                return NoContent();

            var Restaurant = new Restaurant
            {
                Name = RestaurantDTO.Name ?? "NA",
                ImgUrl = RestaurantDTO.ImgUrl ?? "NA",
                Description = RestaurantDTO.Description ?? "NA",
                Address = RestaurantDTO.Address ?? "NA",
            };

            //var Restaurant = _mapper.Map<RestaurantDTO, Restaurant>(RestaurantDTO);

            await _context.Restaurant.AddAsync(Restaurant);
            await _context.SaveChangesAsync();
            return Ok(Restaurant);

        }

        [HttpGet]
        public async Task<IActionResult> GetRestaurantByAddress(string? address)
        {
            if (address != null)
            {
                try
                {
                    var Restaurant = await _context.Restaurant.Where(a => a.Address == address).FirstOrDefaultAsync();
                    if (Restaurant == null)
                        return NotFound("no Restaurant with the given address");
                    var RestaurantDTO = _mapper.Map<Restaurant, RestaurantDTO>(Restaurant);

                    return Ok(RestaurantDTO);

                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }


            return NotFound();
        }
        [HttpGet]
        public async Task<IActionResult> GetRestaurantById(int? id)
        {
            if (id != null)
            {
                try
                {
                    var Restaurant = await _context.Restaurant.Where(a => a.Id == id).FirstOrDefaultAsync();
                    if (Restaurant == null)
                        return NotFound("no Restaurant with the given id");
                    var RestaurantDTO = _mapper.Map<Restaurant, RestaurantDTO>(Restaurant);

                    return Ok(RestaurantDTO);

                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }


            return NotFound();
        }

        [HttpPut]
        public async Task<IActionResult> EditRestaurant([FromBody] Restaurant restaurant, int? id)
        {
            if (restaurant == null) { return NoContent(); }

            var restaurantInfo = await _context.Restaurant.FirstOrDefaultAsync(s => s.Id == id);

            if (restaurantInfo == null) { return NoContent(); }



            try
            {
                restaurantInfo.Name = restaurant.Name;
                restaurantInfo.ImgUrl = restaurant.ImgUrl;
                restaurantInfo.Address = restaurant.Address;
                restaurantInfo.Description = restaurant.Description;

                _context.Restaurant.Update(restaurantInfo);
                await _context.SaveChangesAsync();

                return Ok(_context.Location.FirstOrDefault(s => s.Id == id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteRestaurant(int? id)
        {
            if (id == null) { return NoContent(); }
            var restaurantInfo = _context.Restaurant.FirstOrDefault(s => s.Id == id);

            if (restaurantInfo == null) { return NoContent(); }

            try
            {
                _context.Restaurant.Remove(restaurantInfo);
                await _context.SaveChangesAsync();

                return Ok(_context.Restaurant.ToList());

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
