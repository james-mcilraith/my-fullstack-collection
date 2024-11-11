/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('trees').del()
  await knex('trees').insert([
    {
      name: 'Tāne Mahuta',
      age: 2500,
      species: 'Kauri',
      location: 'Waipoua Forest, New Zealand',
      url: 'https://en.wikipedia.org/wiki/T%C4%81ne_Mahuta',
    },
    {
      name: 'General Sherman',
      age: 2500,
      species: 'Giant Sequoia',
      location: 'Sequoia National Park, California, USA',
      url: 'https://en.wikipedia.org/wiki/General_Sherman_(tree)',
    },
    {
      name: 'The Old Tjikko',
      age: 9550,
      species: 'Norway Spruce',
      location: 'Fulufjället Mountain, Sweden',
      url: 'https://en.wikipedia.org/wiki/Old_Tjikko',
    },
    {
      name: 'The Pando Tree',
      age: 80000,
      species: 'Quaking Aspen',
      location: 'Fishlake National Forest, Utah, USA',
      url: 'https://en.wikipedia.org/wiki/Pando_(tree)',
    },
    {
      name: 'The Tree of Ténéré',
      age: 'Unknown (died 1973)',
      species: 'Acacia',
      location: 'Sahara Desert, Niger',
      url: 'https://en.wikipedia.org/wiki/Tree_of_T%C3%A9n%C3%A9r%C3%A9',
    },
    {
      name: 'The Baobab of Avenue of the Baobabs',
      age: '800-1000',
      species: 'Baobab',
      location: 'Avenue of the Baobabs, Madagascar',
      url: 'https://en.wikipedia.org/wiki/Avenue_of_the_Baobabs',
    },
    {
      name: 'The Angel Oak',
      age: '400-500',
      species: 'Southern Live Oak',
      location: 'Angel Oak Park, Charleston, South Carolina, USA',
      url: 'https://en.wikipedia.org/wiki/Angel_Oak',
    },
    {
      name: 'The Jomon Sugi',
      age: '2000-7000',
      species: 'Cryptomeria',
      location: 'Yakushima Island, Japan',
      url: 'https://en.wikipedia.org/wiki/J%C5%8Dmon_sugi',
    },
    {
      id: 9,
      name: 'The Banyan Tree of India (The Great Banyan)',
      age: 'Over 250 years',
      species: 'Banyan',
      location:
        'Acharya Jagadish Chandra Bose Indian Botanic Garden, Kolkata, India',
      url: 'https://en.wikipedia.org/wiki/Great_Banyan',
    },
    {
      name: 'The Methuselah Tree',
      age: 4845,
      species: 'Great Basin Bristlecone Pine',
      location: 'White Mountains, California, USA',
      url: 'https://en.wikipedia.org/wiki/Methuselah_(tree)',
    },
  ])
}
