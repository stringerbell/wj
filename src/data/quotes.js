const defaultAttribution = 'Jesus, probably';
let quotes = [
  {
    text:
      "Remember two things. Number one, I said, we're going to be saying Christmas again. And, number two, I said I was going to give you a Christmas present."
  },
  {
    text:
      "Let the children come to me (Unless they don't have adequate health insurance coverage). Don't stop them! For the Kingdom of Heaven belongs to those who are like these (non-pre-existing condition) children."
  },
  {
    text:
      "Remember two things. Number one, I said, we're going to be saying Christmas again. And, number two, I said I was going to give you a Christmas present."
  },
  {
    text:
      'You go to the hospital. You have a broken arm. You come out, you are a drug addict with this crap.'
  },
  {
    text: "We're going to win at space."
  },
  {
    text: 'That just shows when you get good ratings, you can say anything.'
  },
  {
    text:
      "To be honest – I'll be honest, I thought it was a – I thought it was a very close to complete victory.",
    attribution: 'Jesus to the Devil, probably'
  },
  {
    text:
      "He may have had a bad past. Who knows, you know? He may have had some, I think, accusations made. Didn't he have a couple things in his past?",
    attribution: 'Jesus about Judas, probably'
  }
];

let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const imageFetcher = () => {
  return fetch('https://source.unsplash.com/random').then(res => res.url);
};

export { quotes, defaultAttribution, imageFetcher, sleep };
