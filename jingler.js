const scales = [
    {
        name: "C Major",
        notenames: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
        notes: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88],
        octaves: [4, 4, 4, 4, 4, 4, 4]
    },
    {
        name: "C Minor",
        notenames: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
        notes: [261.63, 293.66, 311.13, 349.23, 392.00, 415.30, 466.16],
        octaves: [4, 4, 4, 4, 4, 4, 4]
    },
    {
        name: "G Major",
        notenames: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
        notes: [196.00, 220.00, 246.94, 261.63, 293.66, 329.63, 392.00],
        octaves: [3, 3, 3, 4, 4, 4, 4]
    },
    {
        name: "G Minor",
        notenames: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'],
        notes: [392.00, 440.00, 466.16, 523.25, 587.33, 622.25, 349.23],
        octaves: [4, 4, 4, 5, 5, 5, 4]
    },
    {
        name: "D Major",
        notenames: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
        notes: [146.83, 164.81, 185.00, 196.00, 220.00, 246.94, 293.66],
        octaves: [4, 4, 4, 4, 4, 4, 5]
    },
    {
        name: "D Minor",
        notenames: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'],
        notes: [293.66, 329.63, 349.23, 392.00, 440.00, 466.16, 261.63],
        octaves: [4, 4, 4, 4, 4, 4, 4]
    },
    {
        name: "A Major",
        notenames: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
        notes: [220.00, 246.94, 277.18, 293.66, 329.63, 369.99, 415.30],
        octaves: [4, 4, 5, 5, 5, 5, 5]
    },
    {
        name: "A Minor",
        notenames: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        notes: [440.00, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99],
        octaves: [4, 4, 4, 4, 4, 4, 4]
    },
    {
        name: "E Major",
        notenames: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
        notes: [329.63, 369.99, 415.30, 440.00, 493.88, 554.37, 622.25],
        octaves: [4, 4, 4, 4, 4, 5, 5]
    },
    {
        name: "E Minor",
        notenames: ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
        notes: [329.63, 369.99, 392.00, 440.00, 493.88, 261.63, 293.66],
        octaves: [4, 4, 4, 4, 4, 4, 4]
    },
    {
        name: "B Major",
        notenames: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
        notes: [493.88, 554.37, 622.25, 659.25, 739.99, 830.61, 932.33],
        octaves: [3, 4, 4, 4, 4, 4, 4]
    },
    {
        name: "B Minor",
        notenames: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'],
        notes: [246.94, 277.18, 293.66, 329.63, 369.99, 392.00, 440.00],
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
    },
    {
        name: "F Minor",
        notenames: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
        notes: [349.23, 392.00, 415.30, 466.16, 523.25, 554.37, 622.25],
        octaves: [4, 4, 4, 4, 5, 5, 5]
    }
];

const allNotes = [
    {
        "notename": "G",
        "note": 196,
        "octave": 3
    },
    {
        "notename": "A",
        "note": 220,
        "octave": 3
    },
    {
        "notename": "B",
        "note": 246.94,
        "octave": 3
    },
    {
        "notename": "C",
        "note": 261.63,
        "octave": 4
    },
    {
        "notename": "D",
        "note": 293.66,
        "octave": 4
    },
    {
        "notename": "Eb",
        "note": 311.13,
        "octave": 4
    },
    {
        "notename": "E",
        "note": 329.63,
        "octave": 4
    },
    {
        "notename": "F",
        "note": 349.23,
        "octave": 4
    },
    {
        "notename": "G",
        "note": 392,
        "octave": 4
    },
    {
        "notename": "F#",
        "note": 392,
        "octave": 4
    },
    {
        "notename": "Ab",
        "note": 415.3,
        "octave": 4
    },
    {
        "notename": "G#",
        "note": 415.3,
        "octave": 4
    },
    {
        "notename": "A",
        "note": 440,
        "octave": 4
    },
    {
        "notename": "Bb",
        "note": 466.16,
        "octave": 4
    },
    {
        "notename": "B",
        "note": 493.88,
        "octave": 4
    },
    {
        "notename": "C#",
        "note": 554.37,
        "octave": 5
    },
    {
        "notename": "D#",
        "note": 622.25,
        "octave": 5
    },
    {
        "notename": "A#",
        "note": 932.33,
        "octave": 5
    },
    {
        "notename": "C#",
        "note": 293.66,
        "octave": 4
    },
    {
        "notename": "E",
        "note": 329.63,
        "octave": 4
    },
    {
        "notename": "F#",
        "note": 369.99,
        "octave": 4
    },
    {
        "notename": "G#",
        "note": 415.3,
        "octave": 4
    },
    {
        "notename": "C",
        "note": 523.25,
        "octave": 5
    },
    {
        "notename": "Db",
        "note": 554.37,
        "octave": 5
    },
    {
        "notename": "D",
        "note": 587.33,
        "octave": 5
    },
    {
        "notename": "Eb",
        "note": 622.25,
        "octave": 5
    },
    {
        "notename": "D#",
        "note": 622.25,
        "octave": 5
    },
    {
        "notename": "F",
        "note": 698.46,
        "octave": 5
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
document.getElementById('include32ndNotes').addEventListener('change', function () {
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
});

//#region Functions
function generateJingle() {

    createJingle();
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
            // Create a select element
            const noteSelect = document.createElement('select');
            noteSelect.className = 'note-select';
            let currentScale = scales.find(scale => scale.name === note.scale.name);

            noteSelect.onchange = function () {
                note.noteName = this.value;
                note.note = currentScale.notes[currentScale.notenames.indexOf(note.noteName)];
                drawMusicalStaff(jingle);
            };

            // Populate the select element with options from selectedScale
            currentScale.notenames.forEach(notenames => {
                const option = document.createElement('option');
                option.value = notenames;
                option.textContent = notenames;
                // Set the current note as selected
                if (notenames === note.noteName) {
                    option.selected = true;
                }
                noteSelect.appendChild(option);
            });

            // Append the select element to the notesContainer
            notesContainer.appendChild(noteSelect);

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

function createJingle() {
    const notes = selectedScale ? selectedScale.notes : [];
    let noteDuration = '';
    let ticksInCurrentJingle = 0;
    let totalTicksPerMeasure = ticksPerQuarterNote * timeSignatureNotesPerMeasure;
    let numNotes = 0;
    let resting = false;

    currentJingle = [];
    
    // get the amount of ticks left in the current measure
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

// use this to generate all the notes from the scales
// whenever the scales are updated
// manually copy them from the console to the allNotes array
function exportAllNotesFromScales() {
    let allNotes = [];

    scales.forEach(scale => {
        scale.notenames.forEach((noteName, index) => {
            const note = {
                notename: noteName,
                note: scale.notes[index],
                octave: scale.octaves[index]
            };
            // Check if the note already exists in allNotes
            const noteExists = allNotes.some(existingNote =>
                existingNote.notename === note.notename && existingNote.octave === note.octave
            );
            if (!noteExists) {
                allNotes.push(note);
            }
        });
    });

    // Optional: Sort allNotes if needed, for example, by octave then by note frequency
    allNotes.sort((a, b) => {
        if (a.octave === b.octave) {
            return a.note - b.note;
        }
        return a.octave - b.octave;
    });

    console.log(allNotes);
}   