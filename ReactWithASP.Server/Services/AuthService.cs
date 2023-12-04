using Microsoft.AspNetCore.Identity;
using ReactWithASP.Server.DTOs;
using ReactWithASP.Server.Models;
using ReactWithASP.Server.Repositories;

namespace ReactWithASP.Server.Services
{
    public class AuthService
    {
        private readonly UserRepository _userRepository;

        public AuthService(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<IdentityResult> RegisterUserAsync(UserDto userDto)
        {
            var user = new User { UserName = userDto.Username, Email = userDto.Email };

            return await _userRepository.CreateUserAsync(user, userDto.Password);
        }
    }
}
