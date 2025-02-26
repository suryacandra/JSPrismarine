import DataPacket from './DataPacket.js';
import Identifiers from '../Identifiers.js';
import MetadataManager from '../../entity/Metadata.js';

export default class SetActorDataPacket extends DataPacket {
    public static NetID = Identifiers.SetActorDataPacket;

    public runtimeEntityId!: bigint;
    public metadata = new MetadataManager();

    public tick!: bigint;

    public encodePayload() {
        this.writeUnsignedVarLong(this.runtimeEntityId);
        this.metadata.networkSerialize(this);

        this.writeUnsignedVarInt(0); // ? unknown
        this.writeUnsignedVarInt(0); // ? unknown

        this.writeUnsignedVarLong(this.tick);
    }
}
