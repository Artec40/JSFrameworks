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
        public Card(string suit, string rank)
        {
            this.Suit = suit;
            this.Rank = rank;
        }
    }
}

