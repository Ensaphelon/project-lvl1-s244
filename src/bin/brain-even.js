#!/usr/bin/env node

import { startGame } from '..';
import brainEven from '../games/brain-even';
import settings from '../settings';

startGame(brainEven, settings.brainEven, 'Answer "yes" if number even otherwise answer "no".');
