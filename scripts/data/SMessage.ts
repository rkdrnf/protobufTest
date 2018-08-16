import { Message, Field, OneOf, Type } from "protobufjs";
import { ServerMessageType } from "../enums/ServerMessageType";
import { SMLinkedInfo, SMPlayerInfo, SMNewGround, SMNewLinked, SMNewMeteor, SMNewRush, SMNewShield, SMNewWitnessMeExplosion, SMNewGame, SMNewBarrel, SMNewColumn, SMNewPlayer, SMNewShopTime, SMNewUser, SMArray, SMSetMyPlayer, SMProjectileDestroyed, SMPong, SMUserDisconnected, SMGroundInfo, SMPlayerDead, SMNewSyncedObject, SMSyncedObjectDestroyed, SMShopTimeLeft, SMNewLightning, SMSpellInfo, SMSetMyUser, SMUserMoney, SMCooldownInfo, SMCastStart, SMCastFinish, SMTeleport, SMDamage, SMShieldDestroyed, SMRushDestroyed, SMScourge, SMPlayMode, SMChat, SMProjectileCollision, SMPlayerStatistics, SMUserStatistics, SMCrystal, SMItemBought, SMItemSold, SMThrustStart, SMThrustCollision, SMThrustFinish, SMInnerwareUsed, SMNewProjectile, SMProjectileInfo, SMShopTimeFinished, SMBuffApplied, SMBuffRemoved, SMScoreTime, SMRoundEnd, SMFightTime, SMRound, SMNewSpell, SMSpellRemoved, SMObstacleHealth, SMNewObstacle, SMPlayerSkin, SMTeamEntry, SMTeamScore, SMTeamScoreTime, SMTeamRoundEnd, SMGroundChecker, SMNewDelayedExplosion, SMBarrelBlow, SMObstacleCollision } from "./ServerProto";

@Type.d("SMessage")
export class SMessage extends Message<SMessage> {
    @Field.d(1, "string", "required")
    public type: ServerMessageType

    @Field.d(2, "bytes")
    public data: Uint8Array;
}

export namespace SMessage {
    export function wrap(type: ServerMessageType, data: any, encoder?: any) {
        return SMessage.create({
            type: type,
            data: typeClassMap.get(type).encode(data).finish()
        });
    }

    export let typeClassMap: Map<ServerMessageType, any> = new Map([
        [ServerMessageType.SET_MY_PLAYER, SMSetMyPlayer as any] as any,
        [ServerMessageType.NEW_PLAYER, SMNewPlayer],
        [ServerMessageType.PONG, SMPong],
        [ServerMessageType.USER_DISCONNECTED, SMUserDisconnected],
        [ServerMessageType.GROUND, SMGroundInfo],
        [ServerMessageType.NEW_GROUND, SMNewGround],
        [ServerMessageType.PLAYER_DEAD, SMPlayerDead],
        [ServerMessageType.NEW_USER, SMNewUser],
        [ServerMessageType.NEW_PROJECTILE, SMNewProjectile],
        [ServerMessageType.PROJECTILE_INFO, SMProjectileInfo],
        [ServerMessageType.PROJECTILE_DESTROYED, SMProjectileDestroyed],
        [ServerMessageType.ARRAY, SMArray],
        [ServerMessageType.PLAYER_INFO, SMPlayerInfo],
        [ServerMessageType.NEW_SYNCED_OBJECT, SMNewSyncedObject],
        [ServerMessageType.SYNCED_OBJECT_DESTROYED, SMSyncedObjectDestroyed],
        [ServerMessageType.SHOP_TIME_LEFT, SMShopTimeLeft],
        [ServerMessageType.NEW_SHOP_TIME, SMNewShopTime],
        [ServerMessageType.NEW_LIGHTNING, SMNewLightning],
        [ServerMessageType.SPELL_INFO, SMSpellInfo],
        [ServerMessageType.SET_MY_USER, SMSetMyUser],
        [ServerMessageType.COOLDOWN_INFO, SMCooldownInfo],
        [ServerMessageType.USER_MONEY, SMUserMoney],
        [ServerMessageType.CAST_START, SMCastStart],
        [ServerMessageType.CAST_FINISH, SMCastFinish],
        [ServerMessageType.NEW_GAME, SMNewGame],
        [ServerMessageType.TELEPORT, SMTeleport],
        [ServerMessageType.DAMAGE, SMDamage],
        [ServerMessageType.NEW_METEOR, SMNewMeteor],
        [ServerMessageType.NEW_LINKED, SMNewLinked],
        [ServerMessageType.LINKED_INFO, SMLinkedInfo],
        [ServerMessageType.NEW_SHIELD, SMNewShield],
        [ServerMessageType.SHIELD_DESTROYED, SMShieldDestroyed],
        [ServerMessageType.NEW_RUSH, SMNewRush],
        [ServerMessageType.RUSH_DESTROYED, SMRushDestroyed],
        [ServerMessageType.SCOURGE, SMScourge],
        [ServerMessageType.PLAY_MODE, SMPlayMode],
        [ServerMessageType.NEW_COLUMN, SMNewColumn],
        [ServerMessageType.NEW_BARREL, SMNewBarrel],
        [ServerMessageType.CHAT, SMChat],
        [ServerMessageType.PROJECTILE_COLLISION, SMProjectileCollision],
        [ServerMessageType.PLAYER_STATISTICS, SMPlayerStatistics],
        [ServerMessageType.USER_STATISTICS, SMUserStatistics],
        [ServerMessageType.CRYSTAL, SMCrystal],
        [ServerMessageType.ITEM_BOUGHT, SMItemBought],
        [ServerMessageType.ITEM_SOLD, SMItemSold],
        [ServerMessageType.WITNESS_ME_EXP, SMNewWitnessMeExplosion],
        [ServerMessageType.THRUST_START, SMThrustStart],
        [ServerMessageType.THRUST_FINISH, SMThrustFinish],
        [ServerMessageType.THRUST_COLLISION, SMThrustCollision],
        [ServerMessageType.INNERWARE_USED, SMInnerwareUsed],
        [ServerMessageType.SHOP_TIME_FINISHED, SMShopTimeFinished],
        [ServerMessageType.BUFF_APPLIED, SMBuffApplied],
        [ServerMessageType.BUFF_REMOVED, SMBuffRemoved],
        [ServerMessageType.PLAYER_ROUND_RANK, SMBuffRemoved],
        [ServerMessageType.SCORE_TIME, SMScoreTime],
        [ServerMessageType.TEAM_SCORE_TIME, SMTeamScoreTime],
        [ServerMessageType.ROUND_END, SMRoundEnd],
        [ServerMessageType.TEAM_ROUND_END, SMTeamRoundEnd],
        [ServerMessageType.FIGHT_TIME, SMFightTime],
        [ServerMessageType.ROUND, SMRound],
        [ServerMessageType.NEW_SPELL, SMNewSpell],
        [ServerMessageType.SPELL_REMOVED, SMSpellRemoved],
        [ServerMessageType.OBSTACLE_HEALTH, SMObstacleHealth],
        [ServerMessageType.NEW_OBSTACLE, SMNewObstacle],
        [ServerMessageType.PLAYER_SKIN, SMPlayerSkin],
        [ServerMessageType.TEAM_ENTRY, SMTeamEntry],
        [ServerMessageType.TEAM_SCORE, SMTeamScore],
        [ServerMessageType.GROUND_CHECKER, SMGroundChecker],
        [ServerMessageType.DELAYED_EXPLOSION, SMNewDelayedExplosion],
        [ServerMessageType.BARREL_BLOW, SMBarrelBlow],
        [ServerMessageType.OBSTACLE_COLLISION, SMObstacleCollision],
    ]);
}