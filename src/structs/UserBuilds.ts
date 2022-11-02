import { UserBuildsAPI } from "../types"
import { CharactersInfo } from "./CharactersInfo"

export class UserBuilds {
    id: number
    name: string
    characterId: string
    avatarData: CharactersInfo
    order: number
    live: boolean
    settings: object
    isPublic: boolean

    constructor(data: UserBuildsAPI) {
        this.id = data.id
        this.name = data.name
        this.characterId = data.avatar_id
        this.avatarData = new CharactersInfo(data.avatar_data)
        this.order = data.order
        this.live = data.live
        this.settings = data.settings
        this.isPublic = data.is_public
    }
}