import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const GAME_DESCRIPTION = 'What number is missing in the progression?'
const PROGRESSION_LENGTH = 10
const MIN_START_NUMBER = 1
const MAX_START_NUMBER = 50
const MIN_STEP = 1
const MAX_STEP = 10

const buildProgression = (start, step, length) => {
  const progression = []

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }

  return progression
}

const getRoundData = () => {
  const start = getRandomNumber(MIN_START_NUMBER, MAX_START_NUMBER)
  const step = getRandomNumber(MIN_STEP, MAX_STEP)
  const hiddenIndex = getRandomNumber(0, PROGRESSION_LENGTH - 1)

  const progression = buildProgression(start, step, PROGRESSION_LENGTH)
  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'

  const question = progression.join(' ')

  return [question, correctAnswer]
}

const runProgressionGame = () => {
  runGame(GAME_DESCRIPTION, getRoundData)
}

export default runProgressionGame
