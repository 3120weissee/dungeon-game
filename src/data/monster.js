import { getRandomColor } from '../utils/randomColor'

const caveBatColor = getRandomColor()
const skeletonColor = getRandomColor()
const ramColor = getRandomColor()

const CaveBat = {
  name: 'Cave Bat',
  hp: 20,
  strength: 1,
  defense: 2,
  picture: caveBatColor
}

const Skeleton = {
  name: 'Skeleton',
  hp: 30,
  strength: 3,
  defense: 4,
  picture: skeletonColor
}

const Ram = {
  name: 'Ram',
  hp: 40,
  strength: 5,
  defense: 2,
  picture: ramColor
}

export default {
  CaveBat,
  Skeleton,
  Ram
}