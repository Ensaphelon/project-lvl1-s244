#!/usr/bin/env node

import { print, ask, getGreetings } from '..';

print('Welcome to Brain Games!');
print(getGreetings(ask('May I have your name? ')));
