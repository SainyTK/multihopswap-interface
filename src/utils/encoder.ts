import { ethers } from "ethers";
import { TokenType } from "../types/TokenType";

export const encodePath = (tokens: TokenType[], fees: number[]) => {
    const { pathArr, typeArr } = tokens.reduce((prev, token, index) => {
        if (index < tokens.length - 1) {
            return {
                typeArr: [...prev.typeArr, 'address', 'uint24'],
                pathArr: [...prev.pathArr, token.address, fees[index].toString()]
            }
        } else {
            return {
                typeArr: [...prev.typeArr, 'address'],
                pathArr: [...prev.pathArr, token.address]
            }
        }
    }, { pathArr: [] as string[], typeArr: [] as string[] })

    console.log({ typeArr, pathArr })
    return ethers.utils.solidityPack(typeArr, pathArr)
}