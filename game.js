enchant();
window.onload = function () {
  var game = new Game(320, 288);

  game.preload('home.png', 'assets/town_map.png', 'assets/town_map_cursor.png', 'assets/pallet-town-tilesets.png');
  game.onload = function () {
    var map = new Map(8, 8);
    map.image = game.assets['assets/pallet-town-tilesets.png'];
    map.loadData(pallet_town, pallet_town_foreground);

    var scene = new Scene();
    scene.addChild(map);

    scene.backgroundColor = 'black';
    scene.addChild(map);

    game.pushScene(scene);
  }
  game.start();
}