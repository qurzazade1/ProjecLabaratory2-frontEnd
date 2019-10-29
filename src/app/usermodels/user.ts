import { Photo } from "./photo";

export interface User {
 id: number;
 username: string;
 city: string;
 country: string;
 number: number;
 email: string;
 lastSeen: Date;
 accountCreated: Date;
 famousFor: string;
 skills: string;
 about: string;
 photos: Photo[];
}
