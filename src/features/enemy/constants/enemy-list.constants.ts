import { type Enemy, EnemyRarity, EnemyType } from "../enemy.types";
import { createEnemy } from "../helpers/calculate-enemy-stats.helpers";

//Area 1: Grasslands - Open fields
export const ENEMY_LIST_AREA_1: Record<string, Enemy> = {
  FIELD_MOUSE: createEnemy(
    "Field Mouse",
    1,
    EnemyRarity.COMMON,
    EnemyType.STANDARD,
    "../../../enemies/icons/field_mouse_icon.png",
    "../../../enemies/sprites/field_mouse_sprite.png"
  ),
  GRASSHOPPER: createEnemy(
    "Grasshopper",
    1,
    EnemyRarity.COMMON,
    EnemyType.FAST,
    "../../../enemies/icons/grasshopper_icon.png",
    "../../../enemies/sprites/grasshopper_sprite.png"
  ),
  WILD_RABBIT: createEnemy(
    "Wild Rabbit",
    1,
    EnemyRarity.COMMON,
    EnemyType.STRONG,
    "../../../enemies/icons/wild_rabbit_icon.png",
    "../../../enemies/sprites/wild_rabbit_sprite.png"
  ),
  PRAIRIE_WOLF: createEnemy(
    "Prairie Wolf",
    1,
    EnemyRarity.RARE,
    EnemyType.FAST,
    "../../../enemies/icons/prairie_wolf_icon.png",
    "../../../enemies/sprites/prairie_wolf_sprite.png"
  ),
  TERRITORIAL_BULL: createEnemy(
    "Territorial Bull",
    1,
    EnemyRarity.RARE,
    EnemyType.TANK,
    "../../../enemies/icons/territorial_bull_icon.png",
    "../../../enemies/sprites/territorial_bull_sprite.png"
  ),
  PLAINS_COLOSSUS: createEnemy(
    "Plains Colossus",
    1,
    EnemyRarity.LEGENDARY,
    EnemyType.TANK,
    "../../../enemies/icons/plains_colossus_icon.png",
    "../../../enemies/sprites/plains_colossus_sprite.png"
  ),
};

//Area 2: Living Forest - Aggressive nature
export const ENEMY_LIST_AREA_2: Record<string, Enemy> = {
  VINE_CREEPER: createEnemy(
    "Vine Creeper",
    2,
    EnemyRarity.COMMON,
    EnemyType.FAST,
    "../../../enemies/icons/vine_creeper_icon.png",
    "../../../enemies/sprites/vine_creeper_sprite.png"
  ),
  THORN_BUSH: createEnemy(
    "Thorn Bush",
    2,
    EnemyRarity.COMMON,
    EnemyType.TANK,
    "../../../enemies/icons/thorn_bush_icon.png",
    "../../../enemies/sprites/thorn_bush_sprite.png"
  ),
  POISON_IVY: createEnemy(
    "Poison Ivy",
    2,
    EnemyRarity.COMMON,
    EnemyType.STANDARD,
    "../../../enemies/icons/poison_ivy_icon.png",
    "../../../enemies/sprites/poison_ivy_sprite.png"
  ),
  CARNIVOROUS_PLANT: createEnemy(
    "Carnivorous Plant",
    2,
    EnemyRarity.RARE,
    EnemyType.STRONG,
    "../../../enemies/icons/carnivorous_plant_icon.png",
    "../../../enemies/sprites/carnivorous_plant_sprite.png"
  ),
  ANCIENT_TREANT: createEnemy(
    "Ancient Treant",
    2,
    EnemyRarity.RARE,
    EnemyType.TANK,
    "../../../enemies/icons/ancient_treant_icon.png",
    "../../../enemies/sprites/ancient_treant_sprite.png"
  ),
  FOREST_GUARDIAN: createEnemy(
    "Forest Guardian",
    2,
    EnemyRarity.LEGENDARY,
    EnemyType.TANK,
    "../../../enemies/icons/forest_guardian_icon.png",
    "../../../enemies/sprites/forest_guardian_sprite.png"
  ),
};

//Area 3: Mushroom Caverns - Toxic/fungal enemies
export const ENEMY_LIST_AREA_3: Record<string, Enemy> = {
  SPORE_BAT: createEnemy(
    "Spore Bat",
    3,
    EnemyRarity.COMMON,
    EnemyType.FAST,
    "../../../enemies/icons/spore_bat_icon.png",
    "../../../enemies/sprites/spore_bat_sprite.png"
  ),
  POISON_CAP: createEnemy(
    "Poison Cap",
    3,
    EnemyRarity.COMMON,
    EnemyType.STANDARD,
    "../../../enemies/icons/poison_cap_icon.png",
    "../../../enemies/sprites/poison_cap_sprite.png"
  ),
  GLOW_SHROOM: createEnemy(
    "Glow Shroom",
    3,
    EnemyRarity.COMMON,
    EnemyType.TANK,
    "../../../enemies/icons/glow_shroom_icon.png",
    "../../../enemies/sprites/glow_shroom_sprite.png"
  ),
  MYCELIUM_CRAWLER: createEnemy(
    "Mycelium Crawler",
    3,
    EnemyRarity.RARE,
    EnemyType.FAST,
    "../../../enemies/icons/mycelium_crawler_icon.png",
    "../../../enemies/sprites/mycelium_crawler_sprite.png"
  ),
  TOXIC_BLOOM: createEnemy(
    "Toxic Bloom",
    3,
    EnemyRarity.RARE,
    EnemyType.STRONG,
    "../../../enemies/icons/toxic_bloom_icon.png",
    "../../../enemies/sprites/toxic_bloom_sprite.png"
  ),
  FUNGAL_TITAN: createEnemy(
    "Fungal Titan",
    3,
    EnemyRarity.LEGENDARY,
    EnemyType.TANK,
    "../../../enemies/icons/fungal_titan_icon.png",
    "../../../enemies/sprites/fungal_titan_sprite.png"
  ),
};

//Area 4: Insect Hive - Swarm enemies
export const ENEMY_LIST_AREA_4: Record<string, Enemy> = {
  WORKER_ANT: createEnemy(
    "Worker Ant",
    4,
    EnemyRarity.COMMON,
    EnemyType.FAST,
    "../../../enemies/icons/worker_ant_icon.png",
    "../../../enemies/sprites/worker_ant_sprite.png"
  ),
  SOLDIER_TERMITE: createEnemy(
    "Soldier Termite",
    4,
    EnemyRarity.COMMON,
    EnemyType.STANDARD,
    "../../../enemies/icons/soldier_termite_icon.png",
    "../../../enemies/sprites/soldier_termite_sprite.png"
  ),
  HIVE_BEETLE: createEnemy(
    "Hive Beetle",
    4,
    EnemyRarity.COMMON,
    EnemyType.TANK,
    "../../../enemies/icons/hive_beetle_icon.png",
    "../../../enemies/sprites/hive_beetle_sprite.png"
  ),
  GIANT_CENTIPEDE: createEnemy(
    "Giant Centipede",
    4,
    EnemyRarity.RARE,
    EnemyType.FAST,
    "../../../enemies/icons/giant_centipede_icon.png",
    "../../../enemies/sprites/giant_centipede_sprite.png"
  ),
  ARMORED_SCORPION: createEnemy(
    "Armored Scorpion",
    4,
    EnemyRarity.RARE,
    EnemyType.TANK,
    "../../../enemies/icons/armored_scorpion_icon.png",
    "../../../enemies/sprites/armored_scorpion_sprite.png"
  ),
  HIVE_QUEEN: createEnemy(
    "Hive Queen",
    4,
    EnemyRarity.LEGENDARY,
    EnemyType.TANK,
    "../../../enemies/icons/hive_queen_icon.png",
    "../../../enemies/sprites/hive_queen_sprite.png"
  ),
};

//Area 5: Earth's Core - Planet's heart
export const ENEMY_LIST_AREA_5: Record<string, Enemy> = {
  MAGMA_MITE: createEnemy(
    "Magma Mite",
    5,
    EnemyRarity.COMMON,
    EnemyType.FAST,
    "../../../enemies/icons/magma_mite_icon.png",
    "../../../enemies/sprites/magma_mite_sprite.png"
  ),
  CORE_WORM: createEnemy(
    "Core Worm",
    5,
    EnemyRarity.COMMON,
    EnemyType.STANDARD,
    "../../../enemies/icons/core_worm_icon.png",
    "../../../enemies/sprites/core_worm_sprite.png"
  ),
  PRESSURE_BEAST: createEnemy(
    "Pressure Beast",
    5,
    EnemyRarity.COMMON,
    EnemyType.TANK,
    "../../../enemies/icons/pressure_beast_icon.png",
    "../../../enemies/sprites/pressure_beast_sprite.png"
  ),
  LAVA_SERPENT: createEnemy(
    "Lava Serpent",
    5,
    EnemyRarity.RARE,
    EnemyType.FAST,
    "../../../enemies/icons/lava_serpent_icon.png",
    "../../../enemies/sprites/lava_serpent_sprite.png"
  ),
  MOLTEN_GOLEM: createEnemy(
    "Molten Golem",
    5,
    EnemyRarity.RARE,
    EnemyType.TANK,
    "../../../enemies/icons/molten_golem_icon.png",
    "../../../enemies/sprites/molten_golem_sprite.png"
  ),
  CORE_LEVIATHAN: createEnemy(
    "Core Leviathan",
    5,
    EnemyRarity.LEGENDARY,
    EnemyType.TANK,
    "../../../enemies/icons/core_leviathan_icon.png",
    "../../../enemies/sprites/core_leviathan_sprite.png"
  ),
};

//Area 6: Snowy Mountains - Cold creatures and mythical beings
export const ENEMY_LIST_AREA_6: Record<string, Enemy> = {
  FROST_RABBIT: createEnemy(
    "Frost Rabbit",
    6,
    EnemyRarity.COMMON,
    EnemyType.FAST,
    "../../../enemies/icons/frost_rabbit_icon.png",
    "../../../enemies/sprites/frost_rabbit_sprite.png"
  ),
  ICE_SPRITE: createEnemy(
    "Ice Sprite",
    6,
    EnemyRarity.COMMON,
    EnemyType.FAST,
    "../../../enemies/icons/ice_sprite_icon.png",
    "../../../enemies/sprites/ice_sprite_sprite.png"
  ),
  SNOW_WOLF: createEnemy(
    "Snow Wolf",
    6,
    EnemyRarity.COMMON,
    EnemyType.STANDARD,
    "../../../enemies/icons/snow_wolf_icon.png",
    "../../../enemies/sprites/snow_wolf_sprite.png"
  ),
  FROST_TROLL: createEnemy(
    "Frost Troll",
    6,
    EnemyRarity.RARE,
    EnemyType.STRONG,
    "../../../enemies/icons/frost_troll_icon.png",
    "../../../enemies/sprites/frost_troll_sprite.png"
  ),
  ICE_GOLEM: createEnemy(
    "Ice Golem",
    6,
    EnemyRarity.RARE,
    EnemyType.TANK,
    "../../../enemies/icons/ice_golem_icon.png",
    "../../../enemies/sprites/ice_golem_sprite.png"
  ),
  YETI_KING: createEnemy(
    "Yeti King",
    6,
    EnemyRarity.LEGENDARY,
    EnemyType.TANK,
    "../../../enemies/icons/yeti_king_icon.png",
    "../../../enemies/sprites/yeti_king_sprite.png"
  ),
};

// Combine all enemies
export const ALL_ENEMIES: Record<string, Enemy> = {
  ...ENEMY_LIST_AREA_1,
  ...ENEMY_LIST_AREA_2,
  ...ENEMY_LIST_AREA_3,
  ...ENEMY_LIST_AREA_4,
  ...ENEMY_LIST_AREA_5,
  ...ENEMY_LIST_AREA_6,
};
