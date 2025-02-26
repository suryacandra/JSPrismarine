import { BlockIdsType } from '../BlockIdsType.js';
import Flowable from '../Flowable.js';

export default class Fire extends Flowable {
    public constructor() {
        super({
            name: 'minecraft:Fire',
            id: BlockIdsType.Fire,
            hardness: 0
        });
    }

    public getLightLevel(): number {
        return 15;
    }

    public canBeReplaced(): boolean {
        return true;
    }
}
