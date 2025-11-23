#!/usr/bin/env node

import runGame from '../src/engine.js';
import { generateRound, gameDescription } from '../src/games/brain-gcd.js';

runGame(gameDescription, generateRound);
