var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy.WithOrigins("https://localhost:4200", "http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();

    // Start Angular dev server automatically
    var spaPath = Path.GetFullPath(
        Path.Combine(Directory.GetCurrentDirectory(), "..", "portfolio_srivignesh.client"));

    if (Directory.Exists(spaPath))
    {
        Task.Run(() =>
        {
            var process = new System.Diagnostics.Process
            {
                StartInfo = new System.Diagnostics.ProcessStartInfo
                {
                    FileName = "cmd.exe",
                    Arguments = "/c npm start",
                    WorkingDirectory = spaPath,
                    UseShellExecute = true
                }
            };
            process.Start();
        });
    }
}

app.UseHttpsRedirection();
app.UseCors();
app.UseDefaultFiles();
app.UseStaticFiles();
app.MapFallbackToFile("index.html");

app.Run();
