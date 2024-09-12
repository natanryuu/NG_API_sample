using Microsoft.EntityFrameworkCore;
using mod09API.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<MeetingRoomContext>(
       options => options.UseSqlServer(
         builder.Configuration.GetConnectionString("MeetingDB")));

var AllowMyFrontEnd = "AllowMyFrontEnd";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowMyFrontEnd,
        policy =>
        {
         policy.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader(); 
        });
});



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    using (var scope = app.Services.CreateScope())
    {
        var services = scope.ServiceProvider;
        var context = services.GetRequiredService<MeetingRoomContext>();
        DbInitializer.Initialize(context);
    }

    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(AllowMyFrontEnd);
app.UseAuthorization();

app.MapControllers();

app.Run();
