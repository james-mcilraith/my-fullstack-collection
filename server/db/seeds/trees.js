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
      tree_url:
        'https://upload.wikimedia.org/wikipedia/commons/5/5e/00_29_0496_Waipoua_Forest_NZ_-_Kauri_Baum_Tane_Mahuta.jpg',
      description:
        'The largest known living Kauri tree in the world, towering at 51.2 meters tall.',
    },
    {
      name: 'General Sherman',
      age: 2500,
      species: 'Giant Sequoia',
      location: 'Sequoia National Park, California, USA',
      tree_url:
        'https://commons.wikimedia.org/wiki/File:General_Sherman_en_californie_a_s%C3%A9quoia_parc.jpg#/media/File:General_Sherman_en_californie_a_s%C3%A9quoia_parc.jpg',
      description:
        'The largest tree on Earth by volume, standing 83.8 meters tall and estimated to be over 2,500 years old.',
    },
    {
      name: 'The Old Tjikko',
      age: 9550,
      species: 'Norway Spruce',
      location: 'Fulufjället Mountain, Sweden',
      tree_url:
        'https://upload.wikimedia.org/wikipedia/commons/7/7e/Old-Tjikko-2011-07-19-001.jpg',
      description:
        'Considered one of the oldest known living clonal trees, dating back over 9,500 years.',
    },
    {
      name: 'The Pando Tree',
      age: 80000,
      species: 'Quaking Aspen',
      location: 'Fishlake National Forest, Utah, USA',
      tree_url:
        'https://upload.wikimedia.org/wikipedia/commons/9/9e/FallPando02.jpg',
      description:
        'A clonal colony of a single organism, making it one of the oldest and heaviest living beings on Earth.',
    },
    {
      name: 'The Tree of Ténéré',
      age: 'Unknown (died 1973)',
      species: 'Acacia',
      location: 'Sahara Desert, Niger',
      tree_url:
        'https://upload.wikimedia.org/wikipedia/commons/f/f0/Arbre-du-tenere-1961.jpg',
      description:
        'Once the only tree for hundreds of kilometers in the vast Sahara Desert, it became an iconic symbol of resilience.',
    },
    {
      name: 'The Baobab of Avenue of the Baobabs',
      age: '800-1000',
      species: 'Baobab',
      location: 'Avenue of the Baobabs, Madagascar',
      tree_url:
        'https://upload.wikimedia.org/wikipedia/commons/f/ff/Walking_the_Avenue_of_the_Baobabs.jpg',
      description:
        'A striking row of ancient baobab trees, often called the "upside-down trees" for their unique appearance.',
    },
    {
      name: 'The Angel Oak',
      age: '400-500',
      species: 'Southern Live Oak',
      location: 'Angel Oak Park, Charleston, South Carolina, USA',
      tree_url:
        'https://upload.wikimedia.org/wikipedia/commons/8/89/Angel_Oak_Tree_in_SC.jpg',
      description:
        'A towering Southern Live Oak that is an iconic symbol of Charleston, with a canopy that provides shade for over 17,000 square feet.',
    },
    {
      name: 'The Jomon Sugi',
      age: '2000-7000',
      species: 'Cryptomeria',
      location: 'Yakushima Island, Japan',
      tree_url:
        'https://upload.wikimedia.org/wikipedia/commons/3/3c/Jomon_Sugi_07.jpg',
      description:
        'An ancient and massive Cryptomeria tree, considered one of Japan’s oldest and most revered natural monuments.',
    },
    {
      id: 9,
      name: 'The Banyan Tree of India (The Great Banyan)',
      age: 'Over 250 years',
      species: 'Banyan',
      location:
        'Acharya Jagadish Chandra Bose Indian Botanic Garden, Kolkata, India',
      tree_url:
        'https://upload.wikimedia.org/wikipedia/commons/6/6c/TheGreatBanyanTree_November_2021.jpg',
      description:
        'A massive banyan tree known for its vast spread, with over 3,000 aerial roots supporting its huge canopy.',
    },
    {
      name: 'The Methuselah Tree',
      age: 4845,
      species: 'Great Basin Bristlecone Pine',
      location: 'White Mountains, California, USA',
      tree_url:
        'https://upload.wikimedia.org/wikipedia/commons/1/1b/Methuselah_Walk_USA_Ca.jpg',
      description:
        'One of the oldest non-clonal trees in the world, estimated to be over 4,800 years old.',
    },
  ])
}
