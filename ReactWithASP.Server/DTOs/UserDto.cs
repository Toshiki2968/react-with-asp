namespace ReactWithASP.Server.DTOs
{
    // DTOs/RegisterDto.cs

    using System.ComponentModel.DataAnnotations;

    public class UserDto
    {
        [Required]
        public string? Username { get; set; }

        [Required]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }
    }

}
