#!/usr/bin/env node

import runGame from '../src/engine.js';
import { generateRound, gameDescription } from '../src/games/brain-calc.js';

runGame(gameDescription, generateRound);
