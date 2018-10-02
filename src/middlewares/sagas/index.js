import { fork } from 'redux-saga/effects'
import updatePosition from 'middlewares/sagas/updatePosition';
import checkCollision from 'middlewares/sagas/checkCollision';

export default function* sagas() {
    yield [
        fork(updatePosition),
        fork(checkCollision)
    ]
}