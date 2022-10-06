type Mods = Record<string, boolean | string>
/*type Mods = { readonly [key: string]: string; }*/

export const className = (mainCls: string, mods: Mods, additional: string[]): string => {
    return [
        mainCls,
        ...additional,
        ...Object.entries(mods)
            .filter(([key, value]) => !!value)
            .map(([key, value])=>key)
    ].join(" ")
}