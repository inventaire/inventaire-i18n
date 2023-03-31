#!/usr/bin/env node
import { activeLanguages } from '#assets/active_languages'
process.stdout.write(activeLanguages.join(' '))
