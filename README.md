# Jingler ♪ - The Jingle Maker ♫

Jingler is a modern, web-based automatic jingle generator that creates random, single-measure musical phrases with style! Whether you're a musician looking for creative inspiration, a content creator needing quick musical elements, or just someone who loves making music, Jingler makes it fun and easy to generate unique jingles in seconds.

## ✨ Features

### 🎵 Musical Generation
- **Automatic Jingle Creation** - Generate random, musically coherent jingles instantly
- **15 Musical Scales** - Choose from major and minor scales in various keys (C, G, D, A, E, B, F#, F)
- **Customizable Parameters** - Control tempo (20-300 BPM), maximum notes (2-20), and note durations
- **32nd Note Support** - Optional inclusion of fast 32nd notes for more complex rhythms
- **Time Signature Support** - Currently supports 4/4 time with plans for more signatures

### 🎹 Audio Synthesis
- **Multiple Synthesizers** - Choose from 6 different synth types:
  - Synth (basic oscillator)
  - AMSynth (amplitude modulation)
  - FMSynth (frequency modulation) 
  - MonoSynth (monophonic synthesizer)
  - DuoSynth (dual oscillator)
  - MetalSynth (metallic sounds)
- **Oscillator Options** - Select from sine, square, triangle, sawtooth, and PWM waveforms
- **High-Quality Audio** - Powered by Tone.js for professional audio synthesis

### 🎼 Visual Music Notation
- **Live Musical Staff** - See your jingles displayed in standard musical notation
- **VexFlow Integration** - Professional-quality sheet music rendering
- **Key Signatures** - Automatically displays correct key signatures for selected scales
- **Note Duration Icons** - Visual representation of note lengths in jingle library

### 💫 Modern User Interface
- **Jazzy Design** - Vibrant purple, pink, and gold color scheme with musical themes
- **Compact Controls** - Collapsible settings panel maximizes space for music creation
- **Parameter Display** - Quick view of current settings without opening full controls
- **Responsive Design** - Works great on desktop, tablet, and mobile devices
- **Smooth Animations** - Delightful micro-interactions and hover effects

### 🎶 Jingle Management
- **Jingle Library** - Save and organize all your generated jingles
- **Newest First** - Recently created jingles appear at the top of your collection
- **Play Controls** - Instant playback with professional audio synthesis
- **Note Editing** - Modify individual notes in saved jingles using dropdown selectors
- **Delete Management** - Remove individual jingles or clear your entire collection
- **PNG Export** - Export musical staff notation as high-quality PNG images

## 🚀 Getting Started

### Installation
1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Start creating jingles immediately - no installation required!

### System Requirements
- Modern web browser with JavaScript enabled
- Audio support (for playback)
- Internet connection (for external libraries)

## 🎯 How to Use

### Basic Workflow
1. **Open Jingler** - Load the application in your web browser
2. **Adjust Settings** (optional) - Click the "⚙️ Settings" button to customize parameters
3. **Generate Jingle** - Click "New Jingle" to create a random musical phrase
4. **View & Listen** - Your jingle appears in musical notation and plays automatically
5. **Save & Manage** - Jingles are automatically saved to your collection below

### Customizing Your Jingles

#### Musical Settings
- **Scale**: Choose from 15 different major and minor scales
- **Tempo**: Set the speed from 20 to 300 beats per minute
- **Max # Notes**: Control complexity with 2-20 notes per jingle
- **Time Signature**: Currently supports 4/4 time (more coming soon!)
- **32nd Notes**: Toggle to include/exclude very fast note durations

#### Audio Settings  
- **Synthesizer**: Select the type of sound synthesis
- **Oscillator**: Choose the basic waveform character

### Managing Your Collection
- **Play**: Click the "Play" button on any saved jingle
- **Edit**: Use dropdown menus to change individual notes
- **Delete**: Remove unwanted jingles with the "Delete" button
- **Export**: Save the musical staff as a PNG image
- **Clear All**: Remove all jingles with "Delete All"

### Tips for Best Results
- **Start Simple**: Begin with fewer max notes for cleaner melodies
- **Experiment with Scales**: Different scales create different moods
- **Try Various Synths**: Each synthesizer type has a unique character
- **Adjust Tempo**: Slower tempos for contemplative pieces, faster for energetic jingles
- **Edit Creatively**: Use the note editing feature to refine generated jingles

## 🛠 Technical Details

### Built With
- **Tone.js** (v15.0.4) - Web Audio API abstraction for audio synthesis
- **VexFlow** (v4.2.2) - Music notation rendering
- **Vanilla JavaScript** - No framework dependencies
- **CSS Grid/Flexbox** - Modern responsive layout
- **CSS Custom Properties** - Consistent theming system

### Browser Compatibility
- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with Web Audio API support

### Performance
- Client-side generation - no server required
- Instant jingle creation
- Minimal memory footprint
- Responsive across devices

## 🎨 Customization

Jingler is designed to be easily customizable:

- **Colors**: Modify CSS custom properties in `styles/style.css`
- **Scales**: Add new scales in the `scales` array in `jingler.js`
- **Synthesizers**: Extend with additional Tone.js synthesizer types
- **UI**: All interface elements use semantic classes for easy styling

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

Created by Jason Dennis

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Share your favorite jingles

## 🎵 Have Fun!

Jingler is all about creative musical exploration. Don't be afraid to experiment with different settings, edit your generated jingles, and most importantly - **Jingle Away!** ♪♫♬

---

*Made with ♪ for music lovers everywhere*