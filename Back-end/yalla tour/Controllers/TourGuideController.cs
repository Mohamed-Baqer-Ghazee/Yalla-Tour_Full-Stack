using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Yalla_Tour.Data;
using Yalla_Tour.DTO;
using Yalla_Tour.Models;
using Microsoft.EntityFrameworkCore;

namespace Yalla_Tour.Controllers
{
    [Route("/[Controller]/[Action]")]
    public class TourGuideController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public TourGuideController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public ICollection<TourGuide> GetTourGuides()
        {
            return _context.TourGuide.ToList();
        }

        [HttpPost]
        public async Task<IActionResult> addTourGuide([FromBody] TourGuideDTO TourGuideDTO)
        {
            if (TourGuideDTO == null)
                return NoContent();

            var TourGuide = new TourGuide
            {
                Name = TourGuideDTO.Name,
                Age = TourGuideDTO.Age,
                Gender = TourGuideDTO.Gender,
                Address = TourGuideDTO.Address,
                PhoneNumber = TourGuideDTO.PhoneNumber,
                Email = TourGuideDTO.Email
            };

            await _context.TourGuide.AddAsync(TourGuide);
            await _context.SaveChangesAsync();
            return Ok(TourGuide);

        }

        [HttpGet]
        public async Task<IActionResult> GetTourGuideById(int? id)
        {
            if (id != null)
            {
                try
                {
                    var TourGuide = await _context.TourGuide.Where(a => a.Id == id).FirstOrDefaultAsync();
                    if (TourGuide == null)
                        return NotFound("no TourGuide with given id");

                    var TourGuideDTO = _mapper.Map<TourGuide, TourGuideDTO>(TourGuide);

                    return Ok(TourGuideDTO);


                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }

            return NotFound();
        }

        [HttpGet]
        public async Task<IActionResult> GetTourGuideByPhoneNumber(string? phoneNumber)
        {
            if (phoneNumber != null)
            {
                try
                {
                    var TourGuide = await _context.TourGuide.Where(a => a.PhoneNumber == phoneNumber).FirstOrDefaultAsync();
                    if (TourGuide == null)
                        return NotFound("no TourGuide with given phone Number");

                    var TourGuideDTO = _mapper.Map<TourGuide, TourGuideDTO>(TourGuide);

                    return Ok(TourGuideDTO);


                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }

            return NotFound();
        }

        [HttpPut]
        public async Task<IActionResult> EditTourGuide([FromBody] TourGuide tourGuide, int? id)
        {
            if (tourGuide == null) { return NoContent(); }

            var tourGuideInfo = await _context.TourGuide.FirstOrDefaultAsync(s => s.Id == id);

            if (tourGuideInfo == null) { return NoContent(); }



            try
            {
                tourGuideInfo.Name = tourGuide.Name;
                tourGuideInfo.Age = tourGuide.Age;
                tourGuideInfo.Gender = tourGuide.Gender;
                tourGuideInfo.Address = tourGuide.Address;
                tourGuideInfo.PhoneNumber = tourGuide.PhoneNumber;
                tourGuideInfo.Email = tourGuide.Email;

                _context.TourGuide.Update(tourGuideInfo);
                await _context.SaveChangesAsync();

                return Ok(_context.TourGuide.FirstOrDefault(s => s.Id == id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteTourGuide(int? id)
        {
            if (id == null) { return NoContent(); }
            var tourGuideInfo = _context.TourGuide.FirstOrDefault(s => s.Id == id);

            if (tourGuideInfo == null) { return NoContent(); }

            try
            {
                _context.TourGuide.Remove(tourGuideInfo);
                await _context.SaveChangesAsync();

                return Ok(_context.TourGuide.ToList());

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}

