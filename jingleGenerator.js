const scales = [
    {
        name: "C Major",
        notenames: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
        notes: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88],
        octaves: [4, 4, 4, 4, 4, 4, 4]
    },
    {
        name: "G Major",
        notenames: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
        notes: [196.00, 220.00, 246.94, 261.63, 293.66, 329.63, 392.00],
        octaves: [3, 3, 3, 4, 4, 4, 4]
    },
    {
        name: "D Major",
        notenames: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
        notes: [146.83, 164.81, 185.00, 196.00, 220.00, 246.94, 293.66],
        octaves: [4, 4, 4, 4, 4, 4, 5]
    },
    {
        name: "A Major",
        notenames: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
        notes: [220.00, 246.94, 277.18, 293.66, 329.63, 369.99, 415.30],
        octaves: [4, 4, 5, 5, 5, 5, 5]
    },
    {
        name: "E Major",
        notenames: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
        notes: [329.63, 369.99, 415.30, 440.00, 493.88, 554.37, 622.25],
        octaves: [4, 4, 4, 4, 4, 5, 5]
    },
    {
        name: "B Major",
        notenames: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
        notes: [493.88, 554.37, 622.25, 659.25, 739.99, 830.61, 932.33],
        octaves: [3, 4, 4, 4, 4, 4, 4]
    },
    {
        name: "F# Major",
        notenames: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'F'],
        notes: [369.99, 415.30, 466.16, 493.88, 554.37, 622.25, 698.46],
        octaves: [4, 4, 4, 4, 5, 5, 5]
    },
    {
        name: "F Major",
        notenames: ['F', 'G', 'A', 'A#', 'C', 'D', 'E'],
        notes: [349.23, 392.00, 440.00, 466.16, 523.25, 587.33, 659.25],
        octaves: [4, 4, 4, 4, 5, 5, 5]
    }
];
const durationMap = {
    "n": 'w',    // 768t Whole note
    "2n": 'h',   // 384t Half note
    "4n": 'q',   // 192t Quarter note
    "8n": '8',   // 96t  Eighth note
    "16n": '16', // 48t  Sixteenth note
    "32n": '32'  // 24t  Thirty-second note
    // Add more mappings as needed
};
// Define ticks for each rest duration
const restDurations = {
    "n": 192 * 4,   // Whole note rest (4 quarters)
    "2n": 192 * 2,  // Half note rest (2 quarters)
    "4n": 192,      // Quarter note rest
    "8n": 192 / 2,  // Eighth note rest
    "16n": 192 / 4, // Sixteenth note rest
    "32n": 192 / 8  // Thirty-second note rest
};

const ticksPerQuarterNote = 192;
const noteDurations = ["2", "4", "8", "16"]; // Possible note durations, omitting whole notes (32nd notes are optional)

let selectedScale = scales[0];
let currentJingle = [];
let savedJingles = [];
let tempo = 120;
let numNotesMax = 4;
let timeSignatureNotesPerMeasure = 4;
let timeSignatureNoteValue = 4;

populateScaleSelect();

document.getElementById('generate').addEventListener('click', generateJingle);
document.getElementById('tempo').addEventListener('input', function () {
    tempo = parseInt(this.value);
});
document.getElementById('numNotesMax').addEventListener('input', function () {
    numNotesMax = parseInt(this.value);
});
document.getElementById('scale').addEventListener('change', function () {
    selectedScale = scales.find(scale => scale.name === this.value);
});
document.getElementById('timeSignature').addEventListener('input', function () {
    // e.g. 4/4 = 4 and 4, 3/4 = 3 and 4
    timeSignatureNotesPerMeasure = parseInt(this.value.split('/')[0]);
    timeSignatureNoteValue = parseInt(this.value.split('/')[1]);
    totalTicksPerMeasure = ticksPerQuarterNote * timeSignatureNotesPerMeasure;
});
document.getElementById('export-music-staff').addEventListener('click', function () {
    const svg = document.getElementById('musicalstaff').getElementsByTagName('svg')[0];
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    canvas.width = 600;
    canvas.height = 140;

    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        const a = document.createElement('a');
        
        // name the file music-staff + the current date and time to avoid overwriting files
        const now = new Date();
        const timestamp = now.toISOString().replace(/[:\-]|\.\d{3}/g, '');
        a.download = `music-staff-${timestamp}.png`;

        a.href = canvas.toDataURL('image/png');
        a.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    // tell the user where the file was saved
    alert('The music staff image has been saved to your downloads folder.');
});
document.getElementById('include32ndNotes').addEventListener('change', function() {
  if (this.checked) {
    // Logic to include 32nd notes
    noteDurations.push('32'); // Assuming '32n' represents 32nd notes
  } else {
    // Logic to exclude 32nd notes
    var index = noteDurations.indexOf('32');
    if (index > -1) {
      noteDurations.splice(index, 1);
    }
  }
  // Update your application logic to reflect the change
});
function generateJingle() {

    getRandomNotes();
    savedJingles.push([...currentJingle]);
    displaySavedJingles();
    drawMusicalStaff(currentJingle);
    playJingle(currentJingle);
}

function playJingle(jingle) {
    // Create a synth and connect it to the main output
    // const synth = new Tone.Synth().toDestination();
    // Create a synth with a different waveform
    const synth = new Tone.Synth({
        oscillator: {
            type: 'triangle' // Options: 'sine', 'square', 'triangle', 'sawtooth'
        }
    }).toDestination();

    Tone.Transport.stop();
    Tone.Transport.cancel();
    Tone.Transport.bpm.value = tempo;

    drawMusicalStaff(jingle);

    let currentTime = 0;
    // Schedule each note in the jingle to be played
    jingle.forEach(({ note, duration, resting }, index) => {

        if (!resting) {
            Tone.Transport.schedule(time => {
                synth.triggerAttackRelease(note, duration, time);
            }, currentTime);

            currentTime += Tone.Time(duration).toSeconds();
        }
    });

    // Start the Transport to play the notes
    if (Tone.Transport.state !== 'started') {
        Tone.Transport.start();
    }
}

function displaySavedJingles() {
    const listElement = document.getElementById('savedJinglesDisplay'); // Assuming this is your list container
    listElement.innerHTML = ''; // Clear existing entries
    listElement.style.listStyleType = 'none';

    savedJingles.forEach((jingle, index) => {
        const listItem = document.createElement('li');

        // play button
        const playButton = document.createElement('button');
        playButton.textContent = 'Play';
        playButton.className = 'styled-button-small';
        playButton.onclick = () => playJingle(jingle);
        listItem.appendChild(playButton);

        // delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'styled-button-small';
        deleteButton.onclick = () => {
            savedJingles.splice(index, 1); // Remove the jingle from the array
            displaySavedJingles(); // Refresh the list display
        };
        listItem.appendChild(deleteButton);

        // add jingle    
        const notesContainer = document.createElement('span');
        jingle.filter(note => !note.resting).forEach(note => {
            // display the notename before the image
            const noteNameSpan = document.createElement('span');
            noteNameSpan.textContent = ` ${note.noteName}`;
            noteNameSpan.className = 'note-name';
            notesContainer.appendChild(noteNameSpan);

            // add the image for the note duration 
            const noteIcon = document.createElement('img');
            noteIcon.src = `images/${note.duration}.png`; // Adjust the path and extension as needed
            noteIcon.alt = `${note.noteName}`;
            noteIcon.className = 'small-note-icon'; // Add a class for styling if needed
            notesContainer.appendChild(noteIcon);
        });
        listItem.appendChild(notesContainer);
        listElement.appendChild(listItem);
    });
}

function getRandomNotes() {
    const notes = selectedScale ? selectedScale.notes : [];
    let noteDuration = '';
    let ticksInCurrentJingle = 0;
    let totalTicksPerMeasure = ticksPerQuarterNote * timeSignatureNotesPerMeasure;
    let numNotes = 0;
    let resting = false;

    // get the amount of ticks left in the current measure
    currentJingle = [];

    while (ticksInCurrentJingle < totalTicksPerMeasure) {
        noteDuration = noteDurations[Math.floor(Math.random() * noteDurations.length)] + 'n';
        let note = notes[Math.floor(Math.random() * notes.length)];
        let noteName = selectedScale.notenames[notes.indexOf(note)];
        // if this is the second note and the measure is already complete
        // skip to the next note instead.  This avoids two half notes in one measure (boring)
        if (numNotes === 1 && 
            ticksInCurrentJingle + Tone.Time(noteDuration).toTicks() >= totalTicksPerMeasure) {
            continue;
        }

        // If the duration is too long to fit in the measure, get a shorter duration
        if (ticksInCurrentJingle + Tone.Time(noteDuration).toTicks() > totalTicksPerMeasure) {
            numNotes--;
            ticksInCurrentJingle -= Tone.Time(currentJingle[currentJingle.length - 1].duration).toTicks();
            currentJingle.pop(); // Remove the last note to try again
        }
        else {
            numNotes++;
            resting = (numNotes > numNotesMax);
            if (resting) {
                note = getMiddleNoteFrequency(selectedScale);
                noteName = getMiddleNoteName(selectedScale);
                // Get the array of rests that fit in the remaining measure
                let restsForMeasure = calculateRestsForRemainingTicks(ticksInCurrentJingle);
                // Iterate over the array and push each rest to currentJingle
                restsForMeasure.forEach(restDuration => {
                    currentJingle.push({
                        note: note,
                        duration: restDuration,
                        noteName: noteName,
                        resting: true,
                        scale: selectedScale
                        });
                    ticksInCurrentJingle += Tone.Time(restDuration).toTicks();
                });
            }
            else {
                currentJingle.push({ note, duration: noteDuration, noteName, resting, scale: selectedScale });
                ticksInCurrentJingle += Tone.Time(noteDuration).toTicks();
            }
        }
    }
}

function getTicksInCurrentJingle(currentJingleIndex) {
    // loop through currentJingle up to the currentJingleIndex
    // summing up the ticks of each note
    let currentJingleTicks = 0;
    for (let i = 0; i < currentJingleIndex; i++) {
        const duration = currentJingle[i].duration;
        currentJingleTicks += Tone.Time(duration).toTicks();
    }

    return currentJingleTicks;
}

function populateScaleSelect() {
    const select = document.getElementById('scale');
    scales.forEach(scale => {
        const option = document.createElement('option');
        option.value = scale.name;
        option.text = scale.name;
        select.appendChild(option);
    });
}

function drawMusicalStaff(jingle) {
    const { Factory } = Vex.Flow;
    const container = document.getElementById('musicalstaff');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    var vf = new Factory({ renderer: { elementId: 'musicalstaff', width: 800, height: 120 } });
    var score = vf.EasyScore();
    var system = vf.System();
    var jingleNotes = jingle.map(({ noteName, note, duration, resting, scale }) => convertNoteToVexFlowFormat(noteName, note, duration, resting, scale)).join(', ');

    system.addStave({
        voices: [
            score.voice(score.notes(jingleNotes, { stem: 'up' })),
        ]
    }).addClef('treble').addTimeSignature(getTimeSignature());

    vf.draw();
}

function convertNoteToVexFlowFormat(noteValue, frequency, duration, resting, scale) {
    let vexFlowNote = '';
    // Convert the duration using the map
    const vexFlowDuration = durationMap[duration] || duration;
    // get the octave from the selectedScale's octaves array
    let octave = scale.octaves[scale.notes.indexOf(frequency)];

    vexFlowNote = `${noteValue}${octave}/${vexFlowDuration}` + (resting ? '/r' : '');
    // Combine note value, octave, and duration into VexFlow format
    return vexFlowNote;
}

// Function to calculate rests needed to fill remaining ticks
function calculateRestsForRemainingTicks(usedTicks) {
    let remainingTicks = 768 - usedTicks; // 768 ticks per measure in 4/4 time
    let restsNeeded = [];

    // Iterate over each rest duration
    for (let [restType, ticks] of Object.entries(restDurations)) {
        while (remainingTicks >= ticks) { // Can we fit this rest?
            restsNeeded.push(restType); // Add rest type to the result
            remainingTicks -= ticks; // Subtract the ticks of this rest from remaining
        }
    }

    return restsNeeded;
}

function getTimeSignature() {
    return `${timeSignatureNotesPerMeasure}/${timeSignatureNoteValue}`;
}

function getMiddleNote(scale) {
    const middleNote = scale.notes[Math.floor(scale.notes.length / 2) + 2];

    return middleNote;
}

function getMiddleNoteFrequency(scale) {
    const middleNote = getMiddleNote(scale);

    return middleNote;
}

function getMiddleNoteName(scale) {
    const middleNote = getMiddleNote(scale);
    const middleNoteName = scale.notenames[scale.notes.indexOf(middleNote)];

    return middleNoteName;
}
