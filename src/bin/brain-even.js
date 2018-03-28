#!/usr/bin/env node

import { startGame, brainEven } from '..';
import settings from '../settings';

startGame(brainEven, settings.brainEven, 'Answer "yes" if number even otherwise answer "no".');
