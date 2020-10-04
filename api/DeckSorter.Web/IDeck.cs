using System;
using System.Collections.Generic;
using System.Text;

namespace DeckSorter.Web
{
    /// <summary>
    /// Интерфейс колоды, содержащий в себе свойства Имя (Name), Объём колоды (Quantity), массив карт (Cards) и заполнение массива карт (FillTheDeck).
    /// </summary>
    interface IDeck
    {
        string Name { get; }
        int Quantity { get; }
        Card[] CardsInDeck { get; set; }
        void FillTheDeck();
    }
}
