import { BlockIdsType } from '../BlockIdsType.js';
import { BlockToolType } from '../BlockToolType.js';
import Solid from '../Solid.js';

export default class BrownGlazedTerracotta extends Solid {
    public constructor() {
        super({
            name: 'minecraft:brown_glazed_terracotta',
            id: BlockIdsType.BrownGlazedTerracotta,
            hardness: 1.4
        });
    }

    public getToolType() {
        return [BlockToolType.Pickaxe];
    }
}
