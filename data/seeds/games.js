
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: "Pacman", genre: "Arcade", releaseYear: 1980},
        {title: "Super Mario Bros", genre: "Console", releaseYear: 1988},
        {title: "Tetris", genre: "Arcade", releaseYear: 1979}
        
      ]);
    });
};
