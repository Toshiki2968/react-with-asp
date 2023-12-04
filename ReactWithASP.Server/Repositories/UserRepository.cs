using Microsoft.AspNetCore.Identity;
using ReactWithASP.Server.Models;

namespace ReactWithASP.Server.Repositories
{
    public class UserRepository
    {
        private readonly UserManager<User> _userManager;

        public UserRepository(UserManager<User> userManager) {  _userManager = userManager; }

        public async Task<IdentityResult> CreateUserAsync(User user, string password)
        {
            return await _userManager.CreateAsync(user, password);
        }
    }
}
