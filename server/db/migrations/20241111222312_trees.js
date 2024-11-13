/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('trees', (table) => {
    table.integer('id').primary()
    table.string('name').notNullable()
    table.string('age')
    table.string('species')
    table.string('location')
    table.string('url')
    table.string('description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('trees')
}
