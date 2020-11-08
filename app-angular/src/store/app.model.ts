export interface Card{
  name: string;
  url: string;
}

export interface Deck{
  id: number;
  name: string;
  quantity: number;
  cards: Card[];
}
