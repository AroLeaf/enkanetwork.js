import { AssetNameFinder } from "../client/AssetNameFinder"
import { AssetNameFinderOptions, ReliquaryFlatAPI } from "../types"
import { IconLinks } from "./AssetLink"
import { ReliquaryMainstat } from "./ReliquaryMainstat"
import { ReliquarySubstats } from "./ReliquarySubstats"

export class ReliquaryFlat {
  nameTextMapHash: string
  setNameTextMapHash: string
  stars: number
  artifactMainstat: ReliquaryMainstat 
  artifactSubstats: ReliquarySubstats[]
  itemType: string
  icon: IconLinks
  equipType: string

  constructor(data: ReliquaryFlatAPI) {
    this.nameTextMapHash = data.nameTextMapHash
    this.setNameTextMapHash = data.setNameTextMapHash
    this.stars = data.rankLevel
    this.artifactMainstat = new ReliquaryMainstat(data.reliquaryMainstat)
    this.artifactSubstats = data.reliquarySubstats ? data.reliquarySubstats.map((data) => new ReliquarySubstats(data)) : []
    this.itemType = data.itemType
    this.icon = new IconLinks(data.icon)
    this.equipType = data.equipType
  }

  name(options?: AssetNameFinderOptions) {
    let language = options?.language
    if (!options?.language) language = 'en'

    return new AssetNameFinder({ language }).search(this.nameTextMapHash).value
  }

  setName(options?: AssetNameFinderOptions) {
    let language = options?.language
    if (!options?.language) language = 'en'

    return new AssetNameFinder({ language }).search(this.setNameTextMapHash).value
  }
}