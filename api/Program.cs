using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Mastermind.Core;

var builder = FunctionsApplication.CreateBuilder(args);

builder.ConfigureFunctionsWebApplication();

builder.Services
    .AddApplicationInsightsTelemetryWorkerService()
    .ConfigureFunctionsApplicationInsights();
// We use AddSingleton because the engine is stateless and doesn't need 
// to be recreated for every single HTTP request.
builder.Services.AddSingleton<IGameEngine, GameEngine>();
builder.Build().Run();
