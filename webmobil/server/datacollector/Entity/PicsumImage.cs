using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace datacollector.Entity
{
    public class PicsumImage
    {
        public int Id { get; set; }
        public int PicsumImageId { get; set; }
        public string Format { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public string FileName { get; set; }
        [ForeignKey("AuthorForeignKey")]
        public Author Author { get; set; }
        public string PostUrl { get; set; }
    }
}