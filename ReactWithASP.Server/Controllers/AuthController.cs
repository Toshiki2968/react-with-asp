namespace ReactWithASP.Server.Controllers
{
    // Controllers/AuthController.cs

    using Microsoft.AspNetCore.Mvc;
    using ReactWithASP.Server.DTOs;
    using ReactWithASP.Server.Services;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserDto model)
        {
            var result = await _authService.RegisterUserAsync(model);

            if (result.Succeeded)
            {
                return Ok(new { Message = "User registered successfully" });
            }

            return BadRequest(new { Message = "Registration failed", Errors = result.Errors });
        }
    }

}
