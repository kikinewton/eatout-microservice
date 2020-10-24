import { ILeader } from "@entities/Leader";
import Leader from "src/models/Leader";
// import Leader from '@models/Leader';

export interface ILeaderDao {
    getOne: (name: string) => Promise<ILeader | null>;
    getAll: () => Promise<ILeader[]>;
    add: (leader: ILeader) => Promise<void>;
    update: (leader: ILeader) => Promise<void>;
    delete: () => Promise<void>;

}

class LeaderDao implements ILeaderDao {
    /**
     * @param _id
     */
    public getOne(id: string) : Promise<ILeader | null> {
        const result = Leader.findById(id).then((leader) => {return leader}).catch((err: Error) => { throw err})
        return Promise.resolve(result)
    }

 
    public getAll() : Promise<ILeader[]> {
        const result = Leader.find({}).then((leaders) => {return leaders}).catch((err: Error) => {throw err})
        return Promise.resolve(result)
    }

    /**
     * @param leader
     */
    public add(leader: ILeader) : Promise<void> {
        return Promise.resolve(undefined);
    }

    /**
     * 
     * @param leader 
     */
    public update(leader: ILeader) : Promise<void> {
        return Promise.resolve(undefined);
    }

    public delete(): Promise<void> {
        return Promise.resolve(undefined);
    }

}

export default LeaderDao;