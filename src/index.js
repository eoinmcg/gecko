import o from './game/data/base';

import Game from './engine/game';

import Title from './game/scenes/title';
import Tut from './game/scenes/tut';
import Help from './game/scenes/help';
import Play from './game/scenes/play';
import Win from './game/scenes/win';
import Test from './game/scenes/test';

import P1 from './game/ents/p1';
import Donut from './game/ents/donut';
import Powerup from './game/ents/powerup';
import Particle from './game/ents/particle';
import Bullet from './game/ents/bullet';
import Circle from './game/ents/circle';
import Boom from './game/ents/boom';
import Button from './game/ents/button';
import Text from './game/ents/text';
import Bat from './game/ents/bat';
import Hole from './game/ents/hole';
import Cactus from './game/ents/cactus';
import Spider from './game/ents/spider';
import Worm from './game/ents/worm';
import Boss from './game/ents/boss';

import Obj from './game/ents/obj';

o.scenes = { Title, Help, Play, Tut, Win, Test };
o.ents = { Particle, P1, Bullet, Circle, Boom, Bat, Button, Text, Hole, Cactus, Donut, Spider, Powerup, Worm, Obj, Boss };
new Game(o).init();
