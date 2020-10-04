using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace DeckSorter.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        static Dictionary<string, Deck> deckCollection = new Dictionary<string, Deck>();
        // get - получить,
        // post - создать, положить
        // put - изменить
        // delete - удалить


        // GET api/values. Получить список названий колод.
        [HttpGet]
        [EnableCors("AnotherPolicy")]
        public ActionResult<IEnumerable<string>> Get()
        {
            return deckCollection.Select(deck => deck.Key).ToArray();
        }


        //GET api/values/getDeck. Получить колоду по имени.
        [HttpGet("getDeck")]
        [EnableCors("AnotherPolicy")]
        public ActionResult<DeckResponse> GetDeckByName([FromQuery][Required] string deckName)
        {
            if (deckCollection.ContainsKey(deckName))
            {
                DeckResponse deckResponse = new DeckResponse();
                foreach (KeyValuePair<string, Deck> deck in deckCollection)
                {
                    if (deckName == deck.Key)
                    {
                        deckResponse.Name = deck.Key;
                        deckResponse.Cards = deck.Value.CardsInDeck.Select(x => new CardResponse { CardName = $"{x.Rank} {x.Suit}" }).ToArray();
                        // Работает только с IList в DeckResponse;
                        //    deckResponse.Cards = new List<CardResponse>();
                        //    foreach (Card card in deck.Value.CardsInDeck)
                        //    {
                        //        CardResponse cardResponse = new CardResponse();
                        //        cardResponse.CardName = card.Rank + " " + card.Suit;

                        //        deckResponse.Cards.Add(cardResponse);
                        //    }
                    }
                }
                return Ok(deckResponse);
            }

            return NotFound();
        }


        // POST api/values. Создать именованную колоду карт.
        [HttpPost]
        [EnableCors("AnotherPolicy")]
        public ActionResult Post([FromBody] DeckRequest deckRequest)
        {
            if (deckCollection.ContainsKey(deckRequest.Name))
                return Conflict();

            Deck deck = new Deck(deckRequest.Name, deckRequest.Quantity);
            deck.FillTheDeck();
            if (deck.CardsInDeck == null)
                return Conflict();

            deckCollection.Add(deckRequest.Name, deck);
            return Ok();
        }


        // PUT api/values/filldeckName. Перетасовать колоду.
        [HttpPut("fill{deckName}")]
        [EnableCors("AnotherPolicy")]
        public ActionResult Put([FromRoute][Required] string deckName)
        {
            if (deckCollection.ContainsKey(deckName))
            {
                Random random = new Random();
                foreach (KeyValuePair<string, Deck> deck in deckCollection)
                {
                    if (deckName == deck.Key)
                    {
                        Card deckFillHelper = null;
                        for (int i = 0; i < deck.Value.CardsInDeck.Length; i++)
                        {
                            int fillerCard = random.Next(0, deck.Value.CardsInDeck.Length);
                            deckFillHelper = deck.Value.CardsInDeck[i];
                            deck.Value.CardsInDeck[i] = deck.Value.CardsInDeck[fillerCard];
                            deck.Value.CardsInDeck[fillerCard] = deckFillHelper;
                        }
                    }
                }
                return Ok();
            }
            return NotFound();
        }


        // DELETE api/values/deletedeckName. Удалить колоду карт.
        [HttpDelete("delete{deckName}")]
        [EnableCors("AnotherPolicy")]
        public ActionResult Delete([FromRoute][Required] string deckName)
        {
            if (deckCollection.ContainsKey(deckName))
            {
                deckCollection.Remove(deckName);
                return NoContent();
            }
            else
                return NotFound();

        }
    }
}
