using System;
using System.Collections.Generic;
using System.Linq;

namespace Sample.ConsoleApp
{
    public class Program
    {
        public static SampleModel Model = new SampleModel();
        public static void Main(string[] args)
        {
            Model.Arguments = args.ToList();

            Console.WriteLine("Hello World!" + string.Join(":::", Model.Arguments));
        }
    }

    public class SampleModel
    {
        public List<string> Arguments { get; set; } = new List<string>();
    }
}
