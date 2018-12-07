using System;

namespace datacollector.Dto{
    public class PicsumListDto{
        public int id { get; set; }
        public string format { get; set; }
        public int width { get; set; }
        public int height { get; set; }
        public string filename { get; set; }
        public string author { get; set; }
        public string authorurl { get; set; }
        public string PostUrl { get; set; }    
    }
}