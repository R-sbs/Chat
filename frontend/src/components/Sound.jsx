import React from 'react';
import soundNotification from '../assets/sounds/notification.mp3';

let audioContext = new (window.AudioContext || window.webkitAudioContext)();

const Sound = () => {

    

    const handleSound =  () => {
        // Resume the audio context after a user interaction
        if (audioContext.state === 'suspended') {
            audioContext.resume().then(() => {
                console.log('AudioContext resumed');
                playSound();
            });
        } else {
            playSound();
        }
    }

    function playSound() {
        const sound = new Audio(soundNotification);
        sound.play().catch(error => {
            console.error('Playback failed:', error);
        });
    }

    return (
        <div>
            <button className='sound' onClick={handleSound}>Click to Play sound</button>
        </div>
    )
}

export default Sound;






