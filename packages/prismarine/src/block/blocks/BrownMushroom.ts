import { BlockIdsType } from '../BlockIdsType.js';
import Flowable from '../Flowable.js';

export default class BrownMushroom extends Flowable {
    public constructor() {
        super({
            name: 'minecraft:brown_mushroom',
            id: BlockIdsType.BrownMushroom,
            hardness: 0
        });
    }

    public getLightLevel(): number {
        return 1;
    }
}
