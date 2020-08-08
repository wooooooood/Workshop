- C#, C# Excensions 설치  
  
- dotnet new sln -n SampleApp
- dotnet new console -n Sample.ConsoleApp
- dotnet sln add .\Sample.ConsoleApp\
  
- dotnet run -p .\Sample.ConsoleApp\

- dotnet new mstest -n Sample.ConsoleApp.Tests
- dotnet sln add .\Sample.ConsoleApp.Tests\
- dotnet add . package FluentAssertions
- dotnet add . reference ../Sample.ConsoleApp  

- dotnet . build
- dotnet . test
