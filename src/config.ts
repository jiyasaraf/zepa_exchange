import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Zepa Exchange",
    chainId: "galileo-4",
    createdDate: "2025-01-02T12:05:43.063Z",
    modifiedDate: "2025-01-02T12:05:43.063Z",
    id: "andromeda",
    collections: [
        {
            exchange: "andr12flqugxfqv4v332zpe0dup48yxp62lhn8e4l0k5apzmch0z8a5mqehezrp",
            cw20: "andr1k3gs0ag6vkcq25ppdha6zqcgqnh4yzheqyxm8jjmsprrqp89zf5qwyjsfh",
            name: "Zepa Exchange",
            type: ICollectionType.EXCHANGE,
            id: "exchange"
        }
    ],
};

export default CONFIG;
