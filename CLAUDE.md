# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jingler is a web-based automatic jingle generator that creates random, single-measure musical phrases. It's a client-side JavaScript application using Web Audio API through Tone.js for audio synthesis and VexFlow for musical notation rendering.

## Development Commands

- **Start**: `npm start` - Runs the application (currently points to non-existent jingleGenerator.js)
- **Test**: No test framework configured
- **Build**: No build process configured - this is a static HTML/CSS/JS application
- **Dependencies**: `npm install` to install VexFlow dependency

## Architecture

### Core Files Structure
- `index.html` - Main application interface with controls for scale, tempo, synth settings
- `jingler.js` - Main application logic containing all musical generation and playback functionality
- `styles/style.css` - Application styling
- `images/` - Contains note duration icons (16n.png, 2n.png, etc.) and logo

### Key Components

**Musical Data**:
- `scales` array: 15 predefined musical scales (major/minor keys) with note frequencies and octaves
- `allNotes` array: Complete note database with frequencies and octave mappings
- `durationMap`: Converts Tone.js durations to VexFlow notation format

**Audio System**:
- Uses Tone.js for audio synthesis with multiple synth types (Synth, AMSynth, FMSynth, etc.)
- `validOscillatorsBySynth` defines which oscillator types work with each synth
- Audio scheduling through Tone.Transport

**Music Generation**:
- `createJingle()`: Core algorithm that generates random note sequences within measure constraints
- `calculateRestsForRemainingTicks()`: Fills remaining measure time with appropriate rest durations
- Respects time signatures and max note limits

**Visualization**:
- VexFlow integration for musical staff rendering
- `drawMusicalStaff()`: Converts internal note format to VexFlow notation
- `convertNoteToVexFlowFormat()`: Handles note/duration/octave mapping

**User Interface**:
- Real-time parameter controls (scale, tempo, max notes, synth settings)
- Jingle library with play/delete/edit functionality
- Note editing through dropdown selectors in saved jingles
- PNG export functionality for musical staff

### Important Technical Details

- Time calculations use Tone.js tick system (192 ticks per quarter note)
- Measure completion logic prevents partial notes and ensures rhythmic validity
- Memory management includes synth disposal when changing synth types
- Scale-aware note generation ensures musical coherence
- Dynamic oscillator validation based on synth compatibility

## File Dependencies

- External: Tone.js (v15.0.4) for audio, VexFlow (v4.2.2) for notation
- Internal: All functionality contained in single jingler.js file
- No build system or module bundling required