import { Message, Field, Type, OneOf } from "protobufjs";
import { ItemName } from "./ItemName";
import { SpellName } from "./SpellName";
import { AddMoneyReason } from "./AddMoneyReason";
import { TeleportReason } from "./TeleportReason";
import { ProjectileType } from "./ProjectileType";
import { PlayMode } from "./PlayMode";
import { SMessage } from "./SMessage";
import { BuffType } from "./BuffType";
import { ActionType } from "./ActionType";
import { SkinName } from "./SkinName";
import { GameModeType } from "./GameModeType";
import { TeamName } from "./TeamName";
import { DelayedExplosionType } from "./DelayedExplosionType";
import { ObstacleType } from "./ObstacleType";


@Type.d("SMPos")
export class SMPos extends Message<SMPos> {
    @Field.d(1, "float", "required")
    x: number;
    @Field.d(2, "float", "required")
    y: number;
}

@Type.d("SMVec")
export class SMVec extends Message<SMVec> {
    @Field.d(1, "float", "required")
    x: number;
    @Field.d(2, "float", "required")
    y: number;
}



@Type.d("SMArray")
export class SMArray extends Message<SMArray> {
    @Field.d(1, "SMessage", "repeated")
    items: SMessage[];
}

@Type.d("SMSetMyPlayer")
export class SMSetMyPlayer extends Message<SMSetMyPlayer> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    playerId: number;
}

@Type.d("SMPlayerInfo")
export class SMPlayerInfo extends Message<SMPlayerInfo> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    playerId: number;
    @Field.d(3, SMPos, "required")
    position: SMPos;
    @Field.d(4, SMVec, "required")
    velocity: SMVec;
    @Field.d(5, "float", "required")
    health: number
    @Field.d(6, "float", "required")
    knockbackGauge: number
    @Field.d(7, "string", "required")
    action: ActionType

}

@Type.d("SMBuffData")
export class SMBuffData extends Message<SMBuffData> {
    @Field.d(1, BuffType, "required")
    type: BuffType;
    @Field.d(2, "int32", "optional")
    value?: number;
}

@Type.d("SMNewPlayer")
export class SMNewPlayer extends Message<SMNewPlayer> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    userId: number;
    @Field.d(3, "int32", "required")
    playerId: number;
    @Field.d(4, "int32", "required")
    radius: number
    @Field.d(5, SMPos, "required")
    position: SMPos;
    @Field.d(6, SMVec, "required")
    velocity: SMVec;
    @Field.d(7, "int32", "required")
    maxHealth: number
    @Field.d(8, "int32", "required")
    maxMana: number;
    @Field.d(9, SMBuffData, "repeated")
    buffs: SMBuffData[];
    @Field.d(10, "string", "required")
    action: ActionType;

}

@Type.d("SMProjectileDestroyed")
export class SMProjectileDestroyed extends Message<SMProjectileDestroyed> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    position: SMPos;
}

@Type.d("SMPong")
export class SMPong extends Message<SMPong> {
    @Field.d(1, "uint64", "required")
    time: number;
}


@Type.d("SMUserDisconnected")
export class SMUserDisconnected extends Message<SMUserDisconnected> {
    @Field.d(1, "int32", "required")
    userId: number;
}

@Type.d("SMNewGround")
export class SMNewGround extends Message<SMNewGround> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    center: SMPos;
    @Field.d(3, "int32", "required")
    radius: number;
}

@Type.d("SMGroundInfo")
export class SMGroundInfo extends Message<SMGroundInfo> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    center: SMPos;
    @Field.d(3, "int32", "required")
    radius: number;
}

@Type.d("SMPlayerDead")
export class SMPlayerDead extends Message<SMPlayerDead> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    playerId: number;
    @Field.d(3, "int32", "optional")
    killerId: number;
    @Field.d(4, SMPos, "required")
    pos: SMPos;
}

@Type.d("SMSpellData")
export class SMSpellData extends Message<SMSpellData> {
    @Field.d(1, "string", "required")
    name: SpellName;
    @Field.d(2, "int32", "required")
    level: number;
}

@Type.d("SMSpellInfo")
export class SMSpellInfo extends Message<SMSpellInfo> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    userId: number;
    @Field.d(3, SMSpellData, "repeated")
    spells: SMSpellData[];
}

@Type.d("SMNewUser")
export class SMNewUser extends Message<SMNewUser> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    userId: number;
    @Field.d(3, "string", "required")
    name: string;
    @Field.d(4, "string", "repeated")
    items: ItemName[];
    @Field.d(5, "int32", "required")
    crystal: number;
}

@Type.d("SMNewSyncedObject")
export class SMNewSyncedObject extends Message<SMNewSyncedObject> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "SMessage", "repeated")
    items: SMessage[];
}

@Type.d("SMSyncedObjectDestroyed")
export class SMSyncedObjectDestroyed extends Message<SMSyncedObjectDestroyed> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "string", "optional")
    reason?: string
    @Field.d(3, "string", "optional")
    data?: any
}

@Type.d("SMShopTimeLeft")
export class SMShopTimeLeft extends Message<SMShopTimeLeft> {
    @Field.d(1, "int32", "optional")
    time: number
}

@Type.d("SMNewShopTime")
export class SMNewShopTime extends Message<SMNewShopTime> {
    @Field.d(1, "int32", "optional")
    time: number
}

@Type.d("SMNewLightning")
export class SMNewLightning extends Message<SMNewLightning> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    origin: SMPos;
    @Field.d(3, SMPos, "required")
    dest: SMPos;
    @Field.d(4, SMPos, "required")
    hitPosition: SMPos;
}

@Type.d("SMSetMyUser")
export class SMSetMyUser extends Message<SMSetMyUser> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    userId: number
}

@Type.d("SMUserMoney")
export class SMUserMoney extends Message<SMUserMoney> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    userId: number;
    @Field.d(3, "int32", "required")
    money: number;
    @Field.d(4, "int32", "optional")
    delta?: number;
    @Field.d(5, "string", "optional")
    reason: AddMoneyReason
}

@Type.d("SMCooldownData")
export class SMCooldownData extends Message<SMCooldownData> {
    @Field.d(1, "string", "required")
    spell: SpellName;
    @Field.d(2, "int32", "required")
    cooldown: number;
}

@Type.d("SMCooldownInfo")
export class SMCooldownInfo extends Message<SMCooldownInfo> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    playerId: number;
    @Field.d(3, SMCooldownData, "repeated")
    cooldowns: SMCooldownData[]
}

@Type.d("SMCastStart")
export class SMCastStart extends Message<SMCastStart> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    playerId: number;
}

@Type.d("SMCastFinish")
export class SMCastFinish extends Message<SMCastFinish> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    playerId: number;
}

@Type.d("SMNewGame")
export class SMNewGame extends Message<SMNewGame> {
    @Field.d(1, "string", "required")
    gameId: string
    @Field.d(2, GameModeType, "required")
    mode: GameModeType;
}


@Type.d("SMTeleport")
export class SMTeleport extends Message<SMTeleport> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    dest: SMPos;
    @Field.d(3, TeleportReason, "required")
    reason: TeleportReason;
}

@Type.d("SMNewProjectile")
export class SMNewProjectile extends Message<SMNewProjectile> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, ProjectileType, "required")
    type: ProjectileType;
    @Field.d(3, "int32", "required")
    playerId: number;
    @Field.d(4, "int32", "required")
    projectileId: number;
    @Field.d(5, SMPos, "required")
    position: SMPos;
    @Field.d(6, SMVec, "required")
    velocity: SMVec;
    @Field.d(7, "int32", "required")
    radius: number;
}

@Type.d("SMProjectileInfo")
export class SMProjectileInfo extends Message<SMProjectileInfo> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    position: SMPos;
    @Field.d(3, SMVec, "required")
    velocity: SMVec;
}

@Type.d("SMDamage")
export class SMDamage extends Message<SMDamage> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    health: number;
    @Field.d(3, "int32", "required")
    knockback: number;
}

@Type.d("SMNewMeteor")
export class SMNewMeteor extends Message<SMNewMeteor> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    dest: SMPos;
    @Field.d(3, "int32", "required")
    radius: number;
    @Field.d(4, "int32", "required")
    fallingTimeLeft: number;
    @Field.d(5, "int32", "required")
    playerId: number;
}

@Type.d("SMNewDelayedExplosion")
export class SMNewDelayedExplosion extends Message<SMNewMeteor> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    dest: SMPos;
    @Field.d(3, "int32", "required")
    radius: number;
    @Field.d(4, "int32", "required")
    delay: number;
    @Field.d(5, "int32", "optional")
    playerId: number;
    @Field.d(6, DelayedExplosionType, "required")
    type: DelayedExplosionType;
}


@Type.d("SMNewLinked")
export class SMNewLinked extends Message<SMNewLinked> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    linkNid: number;
    @Field.d(3, SMPos, "required")
    origin: SMPos;
    @Field.d(4, SMPos, "required")
    dest: SMPos;
}

@Type.d("SMLinkedInfo")
export class SMLinkedInfo extends Message<SMLinkedInfo> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    origin: SMPos;
    @Field.d(3, SMPos, "required")
    dest: SMPos;
}

@Type.d("SMNewShield")
export class SMNewShield extends Message<SMNewShield> {
    @Field.d(1, "int32", "required")
    networkId: number;
}

@Type.d("SMShieldDestroyed")
export class SMShieldDestroyed extends Message<SMShieldDestroyed> {
    @Field.d(1, "int32", "required")
    networkId: number;
}

@Type.d("SMNewRush")
export class SMNewRush extends Message<SMNewRush> {
    @Field.d(1, "int32", "required")
    networkId: number;
}

@Type.d("SMRushDestroyed")
export class SMRushDestroyed extends Message<SMRushDestroyed> {
    @Field.d(1, "int32", "required")
    networkId: number;
}

@Type.d("SMScourge")
export class SMScourge extends Message<SMScourge> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    radius: number;
}

@Type.d("SMPlayMode")
export class SMPlayMode extends Message<SMPlayMode> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, PlayMode, "required")
    mode: PlayMode

}

@Type.d("SMNewColumn")
export class SMNewColumn extends Message<SMNewColumn> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    pos: SMPos;
    @Field.d(3, "int32", "required")
    radius: number
}


@Type.d("SMNewBarrel")
export class SMNewBarrel extends Message<SMNewBarrel> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    pos: SMPos;
    @Field.d(3, "int32", "required")
    radius: number
}

@Type.d("SMChat")
export class SMChat extends Message<SMChat> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    userId: number;
    @Field.d(3, "string", "required")
    message: string
}

@Type.d("SMProjectileCollision")
export class SMProjectileCollision extends Message<SMProjectileCollision> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    pos: SMPos;
}

@Type.d("SMPlayerStatistics")
export class SMPlayerStatistics extends Message<SMPlayerStatistics> {
    @Field.d(2, "int32", "required")
    kills: number;
    @Field.d(3, "int32", "required")
    damageReceivedFromMagma: number;
    @Field.d(4, "int32", "required")
    damageReceivedFromPlayer: number;
    @Field.d(5, "int32", "required")
    damageReceived: number;
    @Field.d(6, "int32", "required")
    damageDealt: number;
    @Field.d(7, "string", "optional")
    playerDealtMostDamageTo: string;
    @Field.d(1, "string", "optional")
    playerDealtMostDamageFrom: string;
}

@Type.d("SMUserStatistics")
export class SMUserStatistics extends Message<SMUserStatistics> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    userId: number;
    @Field.d(3, "int32", "required")
    kills: number;
    @Field.d(4, "int32", "required")
    deaths: number;
    @Field.d(5, "int32", "required")
    score: number;
}

@Type.d("SMCrystal")
export class SMCrystal extends Message<SMCrystal> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    userId: number;
    @Field.d(3, "int32", "required")
    amount: number;
    @Field.d(4, "int32", "required")
    delta: number;
}

@Type.d("SMItemBought")
export class SMItemBought extends Message<SMItemBought> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    userId: number;
    @Field.d(3, "string", "required")
    item: ItemName;
}

@Type.d("SMItemSold")
export class SMItemSold extends Message<SMItemSold> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    userId: number;
    @Field.d(3, "string", "required")
    item: ItemName;
}

@Type.d("SMNewWitnessMeExplosion")
export class SMNewWitnessMeExplosion extends Message<SMNewWitnessMeExplosion> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    dest: SMPos;
    @Field.d(3, "int32", "required")
    radius: number;
    @Field.d(4, "int32", "required")
    fallingTimeLeft: number;
}

@Type.d("SMThrustStart")
export class SMThrustStart extends Message<SMThrustStart> {
    @Field.d(1, "int32", "required")
    networkId: number;
}

@Type.d("SMThrustCollision")
export class SMThrustCollision extends Message<SMThrustCollision> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    pos: SMPos
}

@Type.d("SMThrustFinish")
export class SMThrustFinish extends Message<SMThrustFinish> {
    @Field.d(1, "int32", "required")
    networkId: number;

}

@Type.d("SMInnerwareUsed")
export class SMInnerwareUsed extends Message<SMInnerwareUsed> {
    @Field.d(1, "int32", "required")
    networkId: number;
}

@Type.d("SMShopTimeFinished")
export class SMShopTimeFinished extends Message<SMShopTimeFinished> {
}

@Type.d("SMBuffApplied")
export class SMBuffApplied extends Message<SMBuffApplied> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    playerId: number;
    @Field.d(3, SMBuffData, "required")
    buff: SMBuffData
}

@Type.d("SMBuffRemoved")
export class SMBuffRemoved extends Message<SMBuffRemoved> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    playerId: number;
    @Field.d(3, BuffType, "required")
    type: BuffType
}

@Type.d("SMUserRank")
export class SMUserRank extends Message<SMUserRank> {
    @Field.d(1, "int32", "required")
    userId: number;
    @Field.d(2, "int32", "required")
    rank: number;
}

@Type.d("SMScoreTime")
export class SMScoreTime extends Message<SMScoreTime> {
    @Field.d(1, "int32", "required")
    timeLeft: number;
    @Field.d(2, SMUserRank, "repeated")
    ranks: SMUserRank[];
}

@Type.d("SMTeamScoreTime")
export class SMTeamScoreTime extends Message<SMTeamScoreTime> {
    @Field.d(1, "int32", "required")
    timeLeft: number;
    @Field.d(2, TeamName, "required")
    winner: TeamName;
}



@Type.d("SMPlayerRoundRank")
export class SMPlayerRoundRank extends Message<SMPlayerRoundRank> {
    @Field.d(1, "int32", "required")
    userId: number;
    @Field.d(2, "int32", "required")
    rank: number;
}

@Type.d("SMUserScore")
export class SMUserScore extends Message<SMUserScore> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    userId: number;
    @Field.d(3, "int32", "required")
    score: number;
}

@Type.d("SMRoundEnd")
export class SMRoundEnd extends Message<SMRoundEnd> {
    @Field.d(1, "int32", "required")
    timeLeft: number;
    @Field.d(2, SMUserRank, "repeated")
    ranks: SMUserRank[]
}

@Type.d("SMTeamRoundEnd")
export class SMTeamRoundEnd extends Message<SMTeamRoundEnd> {
    @Field.d(1, "int32", "required")
    timeLeft: number;
    @Field.d(2, TeamName, "optional")
    winner: TeamName;
}



@Type.d("SMFightTime")
export class SMFightTime extends Message<SMFightTime> {
}

@Type.d("SMRound")
export class SMRound extends Message<SMRound> {
    @Field.d(1, "int32", "required")
    current: number;
    @Field.d(2, "int32", "required")
    max: number;
}

@Type.d("SMNewSpell")
export class SMNewSpell extends Message<SMNewSpell> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "string", "required")
    spell: SpellName;
    @Field.d(3, "int32", "required")
    level: number;
}

@Type.d("SMSpellRemoved")
export class SMSpellRemoved extends Message<SMSpellRemoved> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "string", "required")
    spell: SpellName;
}

@Type.d("SMObstacleHealth")
export class SMObstacleHealth extends Message<SMObstacleHealth> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "int32", "required")
    health: number;
    @Field.d(3, "int32", "required")
    maxHealth: number;

}

@Type.d("SMNewObstacle")
export class SMNewObstacle extends Message<SMNewObstacle> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SMPos, "required")
    pos: Pos;
    @Field.d(3, "int32", "required")
    radius: number;
    @Field.d(4, ObstacleType, "required")
    type: ObstacleType;
}

@Type.d("SMPlayerSkin")
export class SMPlayerSkin extends Message<SMPlayerSkin> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, SkinName, "required")
    skin: SkinName;
}

@Type.d("SMTeamEntry")
export class SMTeamEntry extends Message<SMTeamEntry> {
    @Field.d(1, "int32", "repeated")
    blue: number[];
    @Field.d(2, "int32", "repeated")
    purple: number[];
}

@Type.d("SMTeamScore")
export class SMTeamScore extends Message<SMTeamScore> {
    @Field.d(1, "int32", "required")
    blue: number;
    @Field.d(2, "int32", "required")
    purple: number;
}

@Type.d("SMGroundChecker")
export class SMGroundChecker extends Message<SMGroundChecker> {
    @Field.d(1, "int32", "required")
    networkId: number;
    @Field.d(2, "bool", "required")
    isOnGround: boolean;
}

@Type.d("SMBarrelBlow")
export class SMBarrelBlow extends Message<SMBarrelBlow> {
    @Field.d(1, "int32", "required")
    networkId: number;
}

@Type.d("SMObstacleCollision")
export class SMObstacleCollision extends Message<SMObstacleCollision> {
    @Field.d(1, "int32", "required")
    networkId: number;
}







