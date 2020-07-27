import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';
import line from "../music/line.wav";
const lineAudio = new Audio(line);
const playSound = audioFile => {
    audioFile.play();
}
const StartButton = ({ callback }) => (
    <StyledStartButton onClick={callback}{playSound(lineAudio)}>Start Game</StyledStartButton>
)

export default StartButton;