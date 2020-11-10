using System;
using System.Collections.Generic;
using System.Text;

namespace DeckSorter.Web
{
    /// <summary>
    /// Карта, обладающая свойствами - масть и ранг.
    /// </summary>
    class Card : ICard
    {
        public string Suit { get; }
        public string Rank { get; }
        public string Url { get; }
        public Card(string suit, string rank, string url)
        {
            this.Suit = suit;
            this.Rank = rank;
            this.Url = url;
        }
    }
}

