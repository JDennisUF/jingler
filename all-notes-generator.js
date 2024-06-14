import scales from './scales.js';

const allNotes = scales.reduce((acc, scale) => {
    return acc.concat(scale.notes);
}, []);
