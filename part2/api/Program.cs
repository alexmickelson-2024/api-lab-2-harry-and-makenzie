var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
var app = builder.Build();

app.UseCors(c =>
c.AllowAnyHeader()
.AllowAnyMethod()
.AllowAnyOrigin());

List<Message> myMessages = new List<Message>();
app.MapGet("/messages", () => myMessages);

app.MapPost("/messages", (Message currentMessage) =>
{
    myMessages.Add(currentMessage);
});

app.Run();

public record Message(ulong Id, string Text, ulong Parent);