import { Database } from "../db/Fakedb";

const database = new Database();


export class Listcontroller{

    async boxplot(){
        return await database.db();
    }
}