using System;
using System.Collections.Generic;

namespace datacollector.Entity{
    public class Author{
        public int Id { get; set; }
        public string AuthorFullName { get; set; }
        public string AuthorUrl { get; set; }   

        public List<PicsumImage> PicsumImages {get;set;}
    }
}