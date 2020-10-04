using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeckSorter.Web
{
    public class DeckResponse
    {
        public string Name { get; set; }
        public CardResponse[] Cards { get; set; }

    }
}
