using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DeckSorter.Web
{

    public class DeckRequest
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public int Quantity { get; set; }
        
    }
}
