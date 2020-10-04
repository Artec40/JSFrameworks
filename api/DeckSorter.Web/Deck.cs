using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace DeckSorter.Web
{
    /// <summary>
    /// Класс, представляющий колоду с именем и объёмом (количеством карт).
    /// </summary>
    class Deck : IDeck
    {
        public string Name { get; }
        public int Quantity { get; }
        public Card[] CardsInDeck { get; set; }

        public Deck(string name, int quantity)
        {
            this.Name = name;
            this.Quantity = quantity;
            this.CardsInDeck = new Card[Quantity];
        }

        /// <summary>
        /// Заполнение колоды картами из хранилища CardRepository.
        /// </summary>
        public void FillTheDeck()
        {
            CardRepository cardRepository = new CardRepository();
            switch (Quantity)
            {
                case 52:
                    CardsInDeck = cardRepository.Get52Cards();
                    break;
                case 36:
                    CardsInDeck = cardRepository.Get36Cards();
                    break;
                case 32:
                    CardsInDeck = cardRepository.Get32Cards();
                    break;
                case 24:
                    CardsInDeck = cardRepository.Get24Cards();
                    break;
                default:
                    CardsInDeck = null;
                    break;
            }
        }

    }
}
