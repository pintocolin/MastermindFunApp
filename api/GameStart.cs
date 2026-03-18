using System.Net;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace Mastermind.Function
{
    public class StartGame
    {
        private readonly ILogger<StartGame> _logger;

        public StartGame(ILogger<StartGame> logger)
        {
            _logger = logger;
        }

        [Function("StartGame")]
        public async Task<HttpResponseData> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequestData req)
        {
            _logger.LogInformation("Generating a new secret code.");

            // Logic for a random 4-digit code (digits 1-6)
            var random = new Random();
            var secretCode = string.Join("", Enumerable.Range(0, 4).Select(_ => random.Next(1, 7)));

            var response = req.CreateResponse(HttpStatusCode.OK);
            await response.WriteAsJsonAsync(new { secret = secretCode });

            return response;
        }
    }
}