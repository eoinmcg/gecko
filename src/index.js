import o from './game/data/base';

import Game from './engine/game';

import Title from './game/scenes/title';
import Play from './game/scenes/play';

import P1 from './game/ents/p1';
import Donut from './game/ents/donut';
import Powerup from './game/ents/powerup';
import Particle from './game/ents/particle';
import Bullet from './game/ents/bullet';
import Circle from './game/ents/circle';
import Boom from './game/ents/boom';
import Button from './game/ents/button';
import Bg from './game/ents/bg';
import Bat from './game/ents/bat';
import Hole from './game/ents/hole';
import Cactus from './game/ents/cactus';
import Spider from './game/ents/spider';
import Worm from './game/ents/worm';

o.scenes = { Title, Play };
o.ents = { Particle, P1, Bullet, Circle, Bg, Boom, Bat, Button, Hole, Cactus, Donut, Spider, Powerup, Worm };
new Game(o).init();
