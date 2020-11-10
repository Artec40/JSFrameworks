using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DeckSorter.Web
{
    /// <summary>
    /// Хранилище всех возможных вариаций карт и колод.
    /// </summary>
    class CardRepository : ICardRepository
    {
        public string[] SuitsRepository { get; }
        public string[] RanksRepository { get; }

        public CardRepository()
        {
            SuitsRepository = new string[4] { "clubs", "diamonds", "hearts", "spades" };
            RanksRepository = new string[13] { "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace" };
        }

        // Методы нужно выделить в отдельный класс DeckRepository. 
        public Card[] Get52Cards()
        {
            // Массив fivtyTwoCards, состоящий из возможных (допустимых) карт.
            Card[] fiftyTwoCards = new Card[52];
            int currentCard = 0;
            while (currentCard < fiftyTwoCards.Length)
            {
                // Заполнение массива с помощью SuitsRepository и RanksRepository.
                foreach (string suit in SuitsRepository)
                {
                    foreach (string rank in RanksRepository)
                    {
                        fiftyTwoCards[currentCard] = new Card(suit, rank, $"/cards/{rank}-{suit}.png");
                        currentCard++;
                    }
                }
            }
            // Возвращение массива.
            return fiftyTwoCards;
        }

        public Card[] Get36Cards()
        {
            // Массив thirtySixCards, состоящий из возможных (допустимых) карт.
            Card[] thirtySixCards = new Card[36];
            int currentCard = 0;
            while (currentCard < thirtySixCards.Length)
            {
                // Заполнение массива с помощью SuitsRepository и RanksRepository.
                foreach (string suit in SuitsRepository)
                {
                    foreach (string rank in RanksRepository.Skip(4))
                    {
                        thirtySixCards[currentCard] = new Card(suit, rank, $"/cards/{rank}-{suit}.png");
                        currentCard++;
                    }
                }
            }
            // Возвращение массива.
            return thirtySixCards;
        }

        public Card[] Get32Cards()
        {
            // Массив thirtyTwoCards, состоящий из возможных (допустимых) карт.
            Card[] thirtyTwoCards = new Card[32];
            int currentCard = 0;
            while (currentCard < thirtyTwoCards.Length)
            {
                // Заполнение массива с помощью SuitsRepository и RanksRepository.
                foreach (string suit in SuitsRepository)
                {
                    foreach (string rank in RanksRepository.Skip(5))
                    {
                        thirtyTwoCards[currentCard] = new Card(suit, rank, $"/cards/{rank}-{suit}.png");
                        currentCard++;
                    }
                }
            }
            // Возвращение массива.
            return thirtyTwoCards;
        }

        public Card[] Get24Cards()
        {
            // Массив twentyFourCards, состоящий из возможных (допустимых) карт.
            Card[] twentyFourCards = new Card[24];
            int currentCard = 0;
            while (currentCard < twentyFourCards.Length)
            {
                // Заполнение массива с помощью SuitsRepository и RanksRepository.
                foreach (string suit in SuitsRepository)
                {
                    foreach (string rank in RanksRepository.Skip(7))
                    {
                        twentyFourCards[currentCard] = new Card(suit, rank, $"/cards/{rank}-{suit}.png");
                        currentCard++;
                    }
                }
            }
            // Возвращение массива.
            return twentyFourCards;
        }
    }
}
