import { v4 as uuidv4 } from 'uuid';

// const uniqueId = uuidv4();

export const uniqueId = () => {
    return uuidv4();
}