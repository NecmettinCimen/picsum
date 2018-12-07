using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using datacollector.Dto;
using datacollector.Entity;
using datacollector.PicsumContext;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace datacollector
{
    class Program
    {
        private static readonly HttpClient client = new HttpClient();
        static void Main(string[] args)
        {
            Console.WriteLine("DataCollector Started!");

            PicsumPhotosListSaveDatabase().Wait();


        }

        private static async Task PicsumPhotosListSaveDatabase()
        {
            var stringTask = client.GetStringAsync("https://picsum.photos/list");

            var msg = await stringTask;

            List<PicsumListDto> picsumList = JsonConvert.DeserializeObject<List<PicsumListDto>>(msg);

            Console.WriteLine("List Created!");


            var optionsBuilder = new DbContextOptionsBuilder<PicsumDbContext>();
            optionsBuilder.UseNpgsql("User ID=postgres;Password=localpass;Host=localhost;Port=5432;Database=dbPicsum;Pooling=true;");

            using (var db = new PicsumDbContext(optionsBuilder.Options))
            {
                Console.WriteLine("Db Open!");

                foreach (PicsumListDto item in picsumList)
                {
                    Console.WriteLine("Image " + item.id);

                    Author author = await db.Authors.FirstOrDefaultAsync(x => x.AuthorFullName == item.author);
                    if (author == null)
                    {
                        author = new Author();
                        author.AuthorUrl = item.authorurl;
                        author.AuthorFullName = item.author;

                        await db.Authors.AddAsync(author);
                        await db.SaveChangesAsync();
                        Console.WriteLine("author " + author.Id);
                    }

                    await db.PicsumImage.AddAsync(new PicsumImage
                    {
                        PicsumImageId = item.id,
                        Height = item.height,
                        Format = item.format,
                        FileName = item.filename,
                        PostUrl = item.PostUrl,
                        Width = item.width,
                        Author = author
                    });

                    await db.SaveChangesAsync();
                    Console.WriteLine("image success " + item.id);

                }
            }


        }
    }
}
