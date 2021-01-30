import { Subject } from './Subject';
export class Soutenance {
    public room: Room;
    public dateTime: Date;
    public subject: Subject
}

enum Room{
    ROOM1 = '2B6-2',
    ROOM2 = '2B6-3',
    ROOM3 = '2B6-4',
}