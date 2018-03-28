#!/usr/bin/env node

import { startGame, brainCalculator } from '..';
import settings from '../settings';

startGame(brainCalculator, settings.brainCalculator, 'What is the result of the expression?');
