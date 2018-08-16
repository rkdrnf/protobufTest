

export enum SkinName {
    Hood,
    Hood2,
    Hood3,
    Knight1,
    Knight2,
    Knight3,
    TKnight1,
    TKnight2,
    TKnight3,
}

export namespace SkinName {

    export function random(): SkinName {
        let values = Object.keys(SkinName).map(e => Number(e)).filter(e => !isNaN(e));

        return values[Math.floor(Math.random() * values.length)];
    }

}